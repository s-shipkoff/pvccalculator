'use client'
import { useState } from 'react'
import styles from './calculator.module.css'

export default function Calculator() {
  const options = [
    { label: "Alabama", factor: 0.05 },
    { label: "Alaska", factor: 0 },
    { label: "Arizona", factor: 0.05 },
    { label: "Arkansas", factor: 0.05 },
    { label: "California", factor: 0.05 },
    { label: "Colorado", factor: 0.05 },
    { label: "Connecticut", factor: 0.05 },
    { label: "Delaware", factor: 0.05 },
    { label: "Florida", factor: 0 },
    { label: "Georgia", factor: 0.05 },
    { label: "Hawaii", factor: 0.05 },
    { label: "Idaho", factor: 0.05 },
    { label: "Illinois", factor: 0.05 },
    { label: "Indiana", factor: 0.05 },
    { label: "Iowa", factor: 0.05 },
    { label: "Kansas", factor: 0.05 },
    { label: "Kentucky", factor: 0.05 },
    { label: "Louisiana", factor: 0.05 },
    { label: "Maine", factor: 0.05 },
    { label: "Maryland", factor: 0.05 },
    { label: "Massachusetts", factor: 0.05 },
    { label: "Michigan", factor: 0.05 },
    { label: "Minnesota", factor: 0.05 },
    { label: "Mississippi", factor: 0.05 },
    { label: "Missouri", factor: 0.05 },
    { label: "Montana", factor: 0.05 },
    { label: "Nebraska", factor: 0.05 },
    { label: "Nevada", factor: 0 },
    { label: "New Hampshire", factor: 0 },
    { label: "New Jersey", factor: 0.05 },
    { label: "New Mexico", factor: 0.05 },
    { label: "New York", factor: 0.05 },
    { label: "North Carolina", factor: 0.05 },
    { label: "North Dakota", factor: 0.05 },
    { label: "Ohio", factor: 0.05 },
    { label: "Oklahoma", factor: 0.05 },
    { label: "Oregon", factor: 0.05 },
    { label: "Pennsylvania", factor: 0.05 },
    { label: "Rhode Island", factor: 0.05 },
    { label: "South Carolina", factor: 0.05 },
    { label: "South Dakota", factor: 0 },
    { label: "Tennessee", factor: 0 },
    { label: "Texas", factor: 0 },
    { label: "Utah", factor: 0.05 },
    { label: "Vermont", factor: 0.05 },
    { label: "Virginia", factor: 0.05 },
    { label: "Washington", factor: 0 },
    { label: "West Virginia", factor: 0.05 },
    { label: "Wisconsin", factor: 0.05 },
    { label: "Wyoming", factor: 0 }
  ]

  const [selectedOption, setSelectedOption] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [yearsInput, setYearsInput] = useState('')
  const [interestInput, setInterestInput] = useState('')

  const handleSelectChange = (e) => {
    const selected = options.find(opt => opt.label === e.target.value)
    setSelectedOption(selected)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleYearsChange = (e) => {
    setYearsInput(e.target.value)
  }

  const handleInterestChange = (e) => {
    setInterestInput(e.target.value)
  }

  const sanitizeCurrencyInput = (value) => {
    if (!value) return '';
    return value.replace(/[\$,]/g, '')
  }

  const isValidNumber = (value) => {
    const num = parseFloat(sanitizeCurrencyInput(value))
    return !isNaN(num) && num >= 0
  }

  const isValidInteger = (value) => {
    const num = parseInt(sanitizeCurrencyInput(value))
    return !isNaN(num) && num >= 0
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const sanitizedIncome = sanitizeCurrencyInput(inputValue)
  const annualSavings = (selectedOption && isValidNumber(sanitizedIncome))
    ? parseFloat(sanitizedIncome) * selectedOption.factor
    : null

  let accumulatedTotal = null
  if (
    annualSavings !== null &&
    isValidInteger(yearsInput) &&
    isValidNumber(interestInput)
  ) {
    let total = 0
    const years = parseInt(sanitizeCurrencyInput(yearsInput))
    const rate = parseFloat(sanitizeCurrencyInput(interestInput)) / 100

    for (let year = 1; year <= years; year++) {
      total += annualSavings
      total *= (1 + rate)
    }

    accumulatedTotal = currencyFormatter.format(total)
  }

  // Custom message for 0 factor states
  const noTaxMessage = "Your state has no income tax"

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Income Tax Calculator</h1>

      <br></br>
      <p>If you live in a state with income tax, you could save by putting your money in a trust in a state without income tax. See the calculator below to find out how much you could save.</p>
      <br></br>

      <label>Select your State:</label><br />
      <select value={selectedOption ? selectedOption.label : ''} onChange={handleSelectChange}>
        <option value="" disabled>Choose state</option>
        {options.map(opt => (
          <option key={opt.label} value={opt.label}>{opt.label}</option>
        ))}
      </select>

      <br /><br />

      <label>Enter annual income:</label><br />
      <input type="text" value={inputValue} onChange={handleInputChange} />

      <br /><br />

      <h2>
        Amount unnecessarily paid in taxes annually: {
          selectedOption === null || !isValidNumber(sanitizedIncome)
            ? '--'
            : selectedOption.factor === 0
              ? noTaxMessage
              : currencyFormatter.format(annualSavings)
        }
      </h2>

      <br />
      <p>Enter a duration and an interest rate to see what you could have after investing the savings over a long period of time.</p>
      <br></br>

      <label>Number of years:</label><br />
      <input type="text" value={yearsInput} onChange={handleYearsChange} />

      <br /><br />

      <label>Interest rate (%):</label><br />
      <input type="text" value={interestInput} onChange={handleInterestChange} />

      <br /><br />

      <h2>Total Savings: {accumulatedTotal !== null ? accumulatedTotal : '--'}</h2>
    </div>
  )
}
