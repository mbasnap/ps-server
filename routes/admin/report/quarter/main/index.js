
const express = require('express')
const router = express.Router()
const title = `Форма 0201. Отчёт о деятельности некредитных финансовых организаци,
          осуществляющей деятельность ломбардов`
const tabs = [
  { key: 'common', title: 'Общие сведения' },
  { key: 'results', title: 'Основные показатели' },
  { key: 'average', title: 'Средняя стоимость займов' },
  { key: 'money', title: 'Денежные операции' },
  { key: 'balance', title: 'Балансовые показатели' },
  { key: 'guaranty', title: 'Информация о залогах' }
]

router.get('/', async (req, res) => {
  const { value: period = '' } = require('../period')(req, res)
  const { header, selector } = await require(`../header`)(req, res)
  try {
    res.json([ 
      { row: 'my-3', children: selector },
      { row: 'my-3', children: [ 
        { is: 'strong', value: title },
        { value: `По состоянию на ${period}`}
      ]},
      ...header,
      period && { row: 'mt-3', children: [ { is: 'tabs', attrs: { 
          tabs, 
          values: await require(`./tabs`)(req, res)
        }}
      ]},
      !period && require(`../../noPeriod`)
    ])
  } catch(e) {
    res.status(500).json({ 'main': e.message })
    console.error(e);
  }
})

router.get('/print', async (req, res) => {
  const { value: period = '' } = require('../period')(req, res)
  if(!period) throw new Error('no period specified')
  const { header } = await require(`../header`)(req, res)
  const getValues = ({key}) => require(`./${key}`)(req, res)
  const values = await Promise.all(tabs.map(getValues))
  try {
    res.json([
      { row: 'my-3', children: [ 
        { is: 'strong', value: title },
        { value: `По состоянию на ${period}`}
      ]},
      ...header,
      ...values.reduce((cur, v) => [...cur, ...v], []),
      ...require(`../../sign`)(req, res)
    ])
  } catch(e) {
    res.status(500).json({ 'print': e.message })
    console.error(e);
  }
})

module.exports = router