import { stateTaxData } from './stateTaxData'

export function getTaxRate(stateLabel, income) {
  const data = stateTaxData[stateLabel]
  if (!data) return 0

  if (Array.isArray(data)) {
    const bracket = data.find(b => income >= b.min && income < b.max)
    return bracket ? bracket.rate : 0
  } else {
    return data.rate
  }
}
