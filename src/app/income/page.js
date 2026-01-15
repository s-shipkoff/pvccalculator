'use client'
import { useState } from 'react'
import styles from './income.module.css'
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
  })

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

  const noTaxMessage = "State has no income tax"

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Trust Income Tax Calculator</h1>
        <p className={styles.description}>
          Depending on which state a trust is in, income it generates may be subject to state income tax.
          Use the calculator below to find out how much could be saved in a state without income tax.
        </p>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.stateSelector}>
          <label>Select trust location:</label><br />
          <select
            value={selectedOption ? selectedOption.label : ''}
            onChange={handleSelectChange}
            className={styles.select}
          >
            <option value="" disabled>Choose state</option>
            {options.map(opt => (
              <option key={opt.label} value={opt.label}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className={styles.incomeInputs}>
          {selectedOption?.label === 'Massachusetts' ? (
            <>
              <label>Enter annual income (including long-term capital gains):</label><br />
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={styles.input}
              />
            </>
          ) : (
            <>
              <label>Enter annual income:</label><br />
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={styles.input}
              />
            </>
          )}

          {selectedOption?.label === 'Massachusetts' && (
            <div className={styles.massachusettsInputs}>
              <label>Short-term capital gains:</label><br />
              <input
                type="text"
                value={shortTermGains}
                onChange={(e) => setShortTermGains(e.target.value)}
                className={styles.input}
              />

              <label>Long-term capital gains from collectibles:</label><br />
              <input
                type="text"
                value={collectiblesGains}
                onChange={(e) => setCollectiblesGains(e.target.value)}
                className={styles.input}
              />
            </div>
          )}

          {selectedOption?.label === 'Montana' && (
            <div className={styles.montanaInputs}>
              <label>Net long-term capital gains:</label><br />
              <input
                type="text"
                value={capitalGainsInput}
                onChange={handleCapitalGainsChange}
                className={styles.input}
              />
            </div>
          )}

          {selectedOption?.label === 'New York' && (
            <div className={styles.newYorkInputs}>
              <label>Is the trust located in New York City or Yonkers?</label><br />
              <select
                value={nyLocation}
                onChange={(e) => setNyLocation(e.target.value)}
                className={styles.select}
              >
                <option value="Neither">Neither</option>
                <option value="NYC">New York City</option>
                <option value="Yonkers">Yonkers</option>
              </select>
            </div>
          )}
        </div>
        <div className={styles.resultsSection}>
        <h2 className={styles.annualSavings}>
          Annual tax:{' '}
          {selectedOption === null || !isValidNumber(sanitizedIncome)
            ? '--'
            : annualSavings === 0
            ? noTaxMessage
            : currencyFormatter.format(annualSavings)}
        </h2>
      </div>
      </div>

      <div className={styles.growthSection}>
        <p className={styles.growthDescription}>
          Enter a duration and an estimated annual rate of return to see how this amount could multiply over a long period of time.
        </p>

        <div className={styles.growthInputs}>
          <label>Number of years:</label><br />
          <input
            type="text"
            value={yearsInput}
            onChange={handleYearsChange}
            className={styles.input}
          />
          <br />
          <label>Annual Rate of Return (%):</label><br />
          <input
            type="text"
            value={interestInput}
            onChange={handleInterestChange}
            className={styles.input}
          />
        </div>

        <h2 className={styles.totalSavings}>
          Total: {accumulatedTotal !== null ? accumulatedTotal : '--'}
        </h2>
      </div>
    </div>
  )
}
