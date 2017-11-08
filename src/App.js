import React, { Component } from 'react'
import './App.css'
import { fetchFifteenForQuarterMil, fetchTwentyForQuarterMil, fetchTwentyFiveForQuarterMil, fetchFifteenForHalfMil, fetchTwentyForHalfMil, fetchTwentyFiveForHalfMil, fetchFifteenForMil, fetchTwentyForMil, fetchTwentyFiveForMil } from './lib/policyService'
import Table from './Table'

class App extends Component {
  state = {
    termsInYears: ['', 15, 20, 25],
    coverage: {
      250000: {
        15: 0,
        20: 0,
        25: 0
      },
      500000: {
        15: 0,
        20: 0,
        25: 0
      },
      1000000: {
        15: 0,
        20: 0,
        25: 0
      }
    }
  }

  sortByPremium = (arr) => arr.sort((a, b) => a.monthly_premium - b.monthly_premium)

  deepMerge = (amount, term, lowest) => {
    let value = {[term]:lowest}
    return Object.assign({}, this.state, {
      coverage: Object.assign({}, this.state.coverage, {
        [amount]: Object.assign({}, this.state.coverage[amount], {
          ...value
        })
      })
    })
  }

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
      .then(fetches => {
        console.log('all fetches:', fetches)
        let sorted = fetches.map(f => this.sortByPremium(f))
        console.log(sorted)
        let lowest = sorted.map(s => s[0])
        console.log(lowest)
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
