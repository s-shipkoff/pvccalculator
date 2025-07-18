'use client'
import { useState } from 'react'
import styles from './calculator.module.css'
import { stateTaxData } from '../data/stateTaxData'
import { getTaxAmount } from '../data/getTaxAmount'

export default function Calculator() {
  const options = Object.keys(stateTaxData).map(label => ({ label }))

  const [selectedOption, setSelectedOption] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [capitalGainsInput, setCapitalGainsInput] = useState('')
  const [nyLocation, setNyLocation] = useState('Neither')
  const [yearsInput, setYearsInput] = useState('')
  const [interestInput, setInterestInput] = useState('')
  const [shortTermGains, setShortTermGains] = useState('')
  const [collectiblesGains, setCollectiblesGains] = useState('')

  const handleSelectChange = (e) => {
    const selected = options.find(opt => opt.label === e.target.value)
    setSelectedOption(selected)
    setCapitalGainsInput('')
    setNyLocation('Neither')
  }

  const handleInputChange = (e) => setInputValue(e.target.value)
  const handleCapitalGainsChange = (e) => setCapitalGainsInput(e.target.value)
  const handleYearsChange = (e) => setYearsInput(e.target.value)
  const handleInterestChange = (e) => setInterestInput(e.target.value)

  const sanitizeCurrencyInput = (value) => value.replace(/[\$,]/g, '')
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
  const sanitizedCapitalGains = sanitizeCurrencyInput(capitalGainsInput)

  const annualSavings = selectedOption && isValidNumber(sanitizedIncome)
    ? getTaxAmount(
        selectedOption.label,
        parseFloat(sanitizedIncome),
        selectedOption.label === 'Montana' && isValidNumber(sanitizedCapitalGains)
          ? parseFloat(sanitizedCapitalGains)
          : 0,
        nyLocation
      )
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

  const noTaxMessage = "Your state has no income tax"

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Income Tax Calculator</h1>

      <br />
      <p>If you live in a state with income tax, you could save by putting your money in a trust in a state without income tax. See the calculator below to find out how much you could save.</p>
      <br />

      <label>Select your State:</label><br />
      <select value={selectedOption ? selectedOption.label : ''} onChange={handleSelectChange}>
        <option value="" disabled>Choose state</option>
        {options.map(opt => (
          <option key={opt.label} value={opt.label}>{opt.label}</option>
        ))}
      </select>

      {selectedOption?.label === 'Massachusetts' && (
        <>
          <br /><br />
          <label>Enter annual income (including long-term capital gains):</label><br />
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </>
      )}

      {selectedOption?.label !== 'Massachusetts' && (
        <>
          <br /><br />
          <label>Enter annual income:</label><br />
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </>
      )}

      {selectedOption?.label === 'Massachusetts' && (
        <>
          <br /><br />
          <label>Short-term capital gains:</label><br />
          <input type="text" value={shortTermGains} onChange={(e) => setShortTermGains(e.target.value)} />

          <br /><br />
          <label>Long-term capital gains from collectibles:</label><br />
          <input type="text" value={collectiblesGains} onChange={(e) => setCollectiblesGains(e.target.value)} />
        </>
      )}

      {selectedOption?.label === 'Montana' && (
        <>
          <br /><br />
          <label>Net long-term capital gains:</label><br />
          <input type="text" value={capitalGainsInput} onChange={handleCapitalGainsChange} />
        </>
      )}

      {selectedOption?.label === 'New York' && (
        <>
          <br /><br />
          <label>Do you reside in New York City or Yonkers?</label><br />
          <select value={nyLocation} onChange={(e) => setNyLocation(e.target.value)}>
            <option value="Neither">Neither</option>
            <option value="NYC">New York City</option>
            <option value="Yonkers">Yonkers</option>
          </select>
        </>
      )}

      <br /><br />

      <h2>
        Amount unnecessarily paid in taxes annually:{' '}
        {selectedOption === null || !isValidNumber(sanitizedIncome)
          ? '--'
          : annualSavings === 0
          ? noTaxMessage
          : currencyFormatter.format(annualSavings)}
      </h2>

      <br />
      <p>Enter a duration and an interest rate to see what you could have after investing the savings over a long period of time.</p>
      <br />

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
