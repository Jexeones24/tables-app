export const quarterMil15 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=250000&term_in_years=15')
    .then(resp => resp.json())
}

export const quarterMil20 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=250000&term_in_years=20')
    .then(resp => resp.json())
}

export const quarterMil25 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=250000&term_in_years=25')
    .then(resp => resp.json())
}

export const halfMil15 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=500000&term_in_years=15')
    .then(resp => resp.json())
}

export const halfMil20 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=500000&term_in_years=20')
    .then(resp => resp.json())
}

export const halfMil25 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=500000&term_in_years=25')
    .then(resp => resp.json())
}

export const mil15 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=1000000&term_in_years=15')
    .then(resp => resp.json())
}

export const mil20 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=1000000&term_in_years=20')
    .then(resp => resp.json())
}

export const mil25 = () => {
  return fetch('https://fauxtuary.herokuapp.com/policies?coverage_amount=1000000&term_in_years=25')
    .then(resp => resp.json())
}
