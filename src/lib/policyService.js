// 250K: 15
export const fetchFifteenForQuarterMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=250000&term_in_years=15')
    .then(resp => resp.json())
}

// 250K: 20
export const fetchTwentyForQuarterMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=250000&term_in_years=20')
    .then(resp => resp.json())
}

// 250K: 25
export const fetchTwentyFiveForQuarterMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=250000&term_in_years=25')
    .then(resp => resp.json())
}

// 500K: 15
export const fetchFifteenForHalfMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=500000&term_in_years=15')
    .then(resp => resp.json())
}

// 500K: 20
export const fetchTwentyForHalfMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=500000&term_in_years=20')
    .then(resp => resp.json())
}

// 500K: 25
export const fetchTwentyFiveForHalfMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=500000&term_in_years=25')
    .then(resp => resp.json())
}

// 1MIL: 15
export const fetchFifteenForMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=1000000&term_in_years=15')
    .then(resp => resp.json())
}

// 1MIL: 20
export const fetchTwentyForMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=1000000&term_in_years=20')
    .then(resp => resp.json())
}

// 1MIL: 25
export const fetchTwentyFiveForMil = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=1000000&term_in_years=25')
    .then(resp => resp.json())
}
