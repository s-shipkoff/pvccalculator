import { stateTaxData } from './stateTaxData'

export function getTaxAmount(
  stateLabel,
  income,
  capitalGains = 0,
  nyLocation = 'Neither',
  shortTermGains = 0,
  collectiblesGains = 0
) {
  const data = stateTaxData[stateLabel]
  if (!data) return 0

  // Massachusetts Special Handling
  if (stateLabel === 'Massachusetts') {
    const totalIncome = income + shortTermGains + collectiblesGains
    let tax = 0
    tax += income * 0.05
    tax += shortTermGains * 0.085
    tax += collectiblesGains * 0.06

    if (totalIncome > 1083150) {
      const surcharge = (totalIncome - 1083150) * 0.04
      tax += surcharge
    }
    return tax
  }

  // Montana Special Handling
  if (stateLabel === 'Montana') {
    let ordinaryTax = 0
    if (income <= 21100) {
      ordinaryTax = income * 0.047
    } else {
      ordinaryTax = 21100 * 0.047 + (income - 21100) * 0.059
    }

    let gainsTax = 0
    if (income >= 21100) {
      gainsTax = capitalGains * 0.041
    } else if (capitalGains <= 21100) {
      gainsTax = capitalGains * 0.03
    } else {
      gainsTax = 21100 * 0.03 + (capitalGains - 21100) * 0.041
    }

    return ordinaryTax + gainsTax
  }

  // Generic Cases (Marginal or Non-Marginal)
  let baseTax = 0

  if (data.tiers) {
    const tier = data.tiers.find(t => income <= t.threshold)
    baseTax = calculateMarginalTax(tier.brackets, income)
  } else if (Array.isArray(data) && data.some(b => 'lose' in b)) {
    baseTax = calculateNonMarginalTax(data, income)
  } else if (Array.isArray(data) && !data.some(b => 'base' in b)) {
    baseTax = calculateMarginalTax(data, income)
  } else if (Array.isArray(data) && data.some(b => 'base' in b)) {
    const bracket = data.find(b => income >= b.min && income < b.max)
    if (!bracket) return 0
    const { base = 0, rate = 0, min = 0 } = bracket
    baseTax = base + rate * (income - min)
  } else if (data.rate !== undefined) {
    baseTax = data.rate * income
  }

  // New York NYC/Yonkers Handling
  if (stateLabel === 'New York') {
    if (nyLocation === 'Yonkers') {
      baseTax += baseTax * 0.1675
    } else if (nyLocation === 'NYC') {
      let nycTax = 0
      if (income <= 12000) {
        nycTax = income * 0.03078
      } else if (income <= 25000) {
        nycTax = 369 + (income - 12000) * 0.03762
      } else if (income <= 50000) {
        nycTax = 858 + (income - 25000) * 0.03819
      } else {
        nycTax = 1813 + (income - 50000) * 0.03876
      }
      baseTax += nycTax
    }
  }

  return baseTax
}

// Non-marginal brackets
function calculateNonMarginalTax(brackets, income) {
  const bracket = brackets.find(b => income >= b.min && income < b.max)
  if (!bracket) return 0
  const { rate, lose } = bracket
  return income * rate - lose
}

// Marginal bracket tax calculation
function calculateMarginalTax(brackets, income) {
  let total = 0
  for (const { min, max, rate } of brackets) {
    if (income > min) {
      const taxable = Math.min(income, max) - min
      total += taxable * rate
    }
  }
  return total
}
