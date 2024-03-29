module.exports = ({title, headers}) => async (req, res) => {
  const { periods, header } = await require(`../header`)(req, res)
  const schema = [
    { row: 'my-3', children: [
      { col: 'col', style: 'max-width: fit-content;', is: 'strong', value: title },
      { col: 'col-2', is: 'selector', attrs: { key: 'period', options: periods }},
    ] },
    { col: 'my-3', children: header},
    { row: 'my-3', children: [{ col: 'col', is: 'report-table', attrs: { headers, hovered: 'row' }}] },
      
  ]
    return { schema }

};
