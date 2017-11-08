import React, { Component } from 'react'
import './App.css'
// this import is gross - fix it
import { fetchFifteenForQuarterMil, fetchTwentyForQuarterMil, fetchTwentyFiveForQuarterMil, fetchFifteenForHalfMil, fetchTwentyForHalfMil, fetchTwentyFiveForHalfMil, fetchFifteenForMil, fetchTwentyForMil, fetchTwentyFiveForMil } from './lib/policyService'
import Table from './Table'

class App extends Component {
  state = {
    // make this more reusable
    termsInYears: ['', 15, 20, 25],
    coverage: {
      // 250000: {
      //   15: 0,
      //   20: 0,
      //   25: 0
      // },
      // 500000: {
      //   15: 0,
      //   20: 0,
      //   25: 0
      // },
      // 1000000: {
      //   15: 0,
      //   20: 0,
      //   25: 0
      // }
    }
  }

  sortByPremium = (arr) => arr.sort((a, b) => a.monthly_premium - b.monthly_premium)

  componentDidMount() {

    let fetches = [
      fetchFifteenForQuarterMil(),
      fetchTwentyForQuarterMil(),
      fetchTwentyFiveForQuarterMil(),
      fetchFifteenForHalfMil(),
      fetchTwentyForHalfMil(),
      fetchTwentyFiveForHalfMil(),
      fetchFifteenForMil(),
      fetchTwentyForMil(),
      fetchTwentyFiveForMil()
    ]

    Promise.all(fetches)
      .then(policies => {
        let sorted = policies.map(f => this.sortByPremium(f))
        let lowest = sorted.map(s => s[0])
        let quarterMil = lowest.filter(f => f.coverage_amount === 250000)
        let halfMil = lowest.filter(f => f.coverage_amount === 500000)
        let mil = lowest.filter(f => f.coverage_amount === 1000000)
        let newState = Object.assign(
        {}, this.state, {
          coverage: Object.assign(
            {}, this.state.coverage, {
              250000: Object.assign({}, quarterMil),
              500000: Object.assign({}, halfMil),
              1000000: Object.assign({}, mil)
            })
          })
        this.setState({coverage: newState}, () =>
        {console.log('state:', this.state)}
      )
    })
  }

  render () {
    return (
      <div className='App'>
        {Object.keys(this.state.coverage).length === 0 && this.state.coverage.constructor === Object ? [] : <Table
          data={this.state.coverage}
          termsInYears={this.state.termsInYears}
        />}
      </div>
    )
  }
}

export default App
