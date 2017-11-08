import React, { Component } from 'react'
import './App.css'
import * as fetch from './lib/policyService'
import Table from './Table'

class App extends Component {
  state = {
    terms: ['', 15, 20, 25],
    coverage: {}
  }

  sortByPremium = (arr) => arr.sort((a, b) => a.monthly_premium - b.monthly_premium)

  componentDidMount() {
    let fetches = [
      fetch.quarterMil15(),
      fetch.quarterMil20(),
      fetch.quarterMil25(),
      fetch.halfMil15(),
      fetch.halfMil20(),
      fetch.halfMil25(),
      fetch.mil15(),
      fetch.mil20(),
      fetch.mil25()
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
        this.setState({coverage: newState}, () => {console.log('state in App:', this.state)})
      })
    }

  render () {
    return (
      <div className='App'>
        {Object.keys(this.state.coverage).length === 0 && this.state.coverage.constructor === Object ? [] :
        <Table
          policies={this.state.coverage}
          terms={this.state.terms}
        />}
      </div>
    )
  }
}

export default App
