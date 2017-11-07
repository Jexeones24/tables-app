import React, { Component } from 'react'

export default class Table extends Component {

  getPremiums = (coverageObj) => {
    let premiums = []
    for (let key in coverageObj) {
      if (coverageObj.hasOwnProperty(key)) {
        premiums.push(coverageObj[key])
      }
    }
    return premiums
  }

  render () {
    const lowest = this.props.data.coverage[250000]
    const mid = this.props.data.coverage[500000]
    const highest = this.props.data.coverage[1000000]
    console.log('props in table', this.props.data.coverage)
    return (
      <table className='table'>
        <tbody>
          <tr>
            {this.props.termsInYears.map((term, idx) => <TableHeader key={idx} term={term} />)}
          </tr>
          <tr>
            <TableHeader term='$250,000' />
            {this.getPremiums(lowest).map((premium, idx) => <TableDescription key={idx} premium={premium} />)}
          </tr>
          <tr>
            <TableHeader term='$500,000' />
            {this.getPremiums(mid).map((premium, idx) => <TableDescription key={idx} premium={premium} />)}
          </tr>
          <tr>
            <TableHeader term='$1,000,000' />
            {this.getPremiums(highest).map((premium, idx) => <TableDescription key={idx} premium={premium} />)}
          </tr>
        </tbody>
      </table>
    )
  }
}

// row 1 = [fetch1: 250000 + 15 yrs, fetch2: 250000 + 20 yrs, fetch3: 250000 + 25 yrs]
const TableHeader = ({term}) => <th>{term}</th>

const TableDescription = ({premium}) => <td>{premium}</td>
