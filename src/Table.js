import React, { Component } from 'react'

export default class Table extends Component {

  getPremiums = (obj) => {
    let values = []
    for (let key in obj) {
      (obj.hasOwnProperty(key)) ? values.push(obj[key]) : false
    }
    return values
  }


  render () {
    const coverage = this.props.policies.coverage
    console.log('coverage in table:', coverage[250000])
    const quarterMil = coverage[250000]
    const halfMil = coverage[500000]
    const mil = coverage[1000000]
    console.log('2.5K:', quarterMil, '50K:', halfMil, '1M:', mil)

    // make table headers reusable instead of hard coded
    return (
      <table className='table'>
        <tbody>
          {/* <tr>
            {this.props.terms.map((term, idx) => <TableHeader key={idx} term={term} />)}
          </tr>
          <tr>
            <TableHeader term='$250,000' />
            {this.getPremiums(quarterMil).map((premium, idx) => <TableDescription key={idx} premium={premium} />)}
          </tr>
          <tr>
            <TableHeader term='$500,000' />
            {this.getPremiums(halfMil).map((premium, idx) => <TableDescription key={idx} premium={premium} />)}
          </tr>
          <tr>
            <TableHeader term='$1,000,000' />
            {this.getPremiums(mil).map((premium, idx) => <TableDescription key={idx} premium={premium} />)}
          </tr> */}
        </tbody>
      </table>
    )
  }
}

const TableHeader = ({term}) => <th>{term}</th>
const TableDescription = ({premium}) => <td>{premium}</td>
