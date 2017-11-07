import React, { Component } from 'react'
import './App.css'
import { fetchFifteenForQuarterMil, fetchTwentyForQuarterMil, fetchTwentyFiveForQuarterMil, fetchFifteenForHalfMil, fetchTwentyForHalfMil, fetchTwentyFiveForHalfMil, fetchFifteenForMil, fetchTwentyForMil, fetchTwentyFiveForMil } from './lib/policyService'
import Table from './Table'

class App extends Component {
  state = {
    termsInYears: ['', 15, 20, 25],
    coverage: {
      // 250000: {
      //   15: null,
      //   20: null,
      //   25: null
      // },
      // 500000: {
      //   15: null,
      //   20: null,
      //   25: null
      // },
      // 1000000: {
      //   15: null,
      //   20: null,
      //   25: null
      // }
    }
  }

  sortValues = (values) => values.sort((a, b) => a - b)

  componentDidMount() {
    fetchFifteenForQuarterMil()
      .then(data => {
        let premiums = data.map((d) => d.monthly_premium)
        let lowest = this.sortValues(premiums)[0]
        this.setState({ coverage: Object.assign({}, this.state.coverage, { coverage: Object.assign({}, this.state.coverage, { 250000: Object.assign({},    this.state.coverage[250000], { 15: lowest} ) } ) } )
      })
    })
    fetchTwentyForQuarterMil()
      .then(data => {
        let premiums = data.map((d) => d.monthly_premium)
        let previousTermValue = this.state.coverage.coverage
        let lowest = this.sortValues(premiums)[0]
        this.setState({ coverage: Object.assign({}, this.state.coverage, { coverage: Object.assign({}, this.state.coverage, { 250000: Object.assign({},    this.state.coverage[250000], { 15: previousTermValue[250000][15], 20: lowest} ) } ) } )
      })
    })
    fetchTwentyFiveForQuarterMil()
      .then(data => {
        let premiums = data.map((d) => d.monthly_premium)
        let previousTermValue = this.state.coverage.coverage
        let lowest = this.sortValues(premiums)[0]
        this.setState({ coverage: Object.assign({}, this.state.coverage, { coverage: Object.assign({}, this.state.coverage, { 250000: Object.assign({},    this.state.coverage[250000], { 15: previousTermValue[250000][15], 20: previousTermValue[250000][20], 25: lowest} ) } ) } )
      })
    })
    fetchFifteenForHalfMil()
      .then(data => {
        let premiums = data.map((d) => d.monthly_premium)
        let lowest = this.sortValues(premiums)[0]
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
