import Moment from 'moment'
import { extendMoment } from 'moment-range'
import numberFormat from './numberFormat'

const reduce = (arr, key) => arr.reduce((cur, v) => ({ ...cur, [v[key]]: v }), {})
const moment = extendMoment(Moment)
const toDouble = v => numberFormat(v, 2, '.', ' ')
const toNumber = v => Number(numberFormat(v || 0, 2, '.', ''))
const summ = (...values) => toDouble(values.reduce((a, b) => a + toNumber(b), 0))
const mult = (a, b) => {
  return toNumber(a) * toNumber(b)
}
const proc = (a, b) => mult(a, b) / 100
const diff = (a, b) => toDouble(toNumber(a) - toNumber(b))

const round = v => {
  return Number(numberFormat(v))
}
const firstChar = v => {
  return (v + '').charAt(0).toUpperCase()
}
moment.locale('ru')
const months = {
  format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
  standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
}
const daysDiff = (d1, d2) => {
  if (!d1 || !d2) return
  d1 = moment(d1).startOf('day')
  d2 = moment(d2).startOf('day')
  return moment.duration(d1.diff(d2)).asDays()
}

export {
  proc,
  numberFormat,
  toDouble,
  toNumber,
  summ,
  diff,
  mult,
  moment,
  months,
  round,
  firstChar,
  daysDiff,
  reduce
}
