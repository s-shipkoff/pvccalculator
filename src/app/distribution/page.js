'use client';
import React, { useState } from 'react';
import styles from './distribution.module.css';

export default function DistributionPage() {
  const [incomeTypes, setIncomeTypes] = useState([{ type: '', amount: '' }]);
  const [totalIncome, setTotalIncome] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newBeneficiary, setNewBeneficiary] = useState({
    state: '',
    amount: '',
    incomeType: '',
    filingStatus: 'single',
  });
  const [results, setResults] = useState(null);

  const handleIncomeTypeChange = (index, field, value) => {
    const updated = [...incomeTypes];
    updated[index][field] = value;
    setIncomeTypes(updated);
  };

  const addIncomeType = () => {
    setIncomeTypes([...incomeTypes, { type: '', amount: '' }]);
  };

  const handleNewBeneficiaryChange = (field, value) => {
    setNewBeneficiary({ ...newBeneficiary, [field]: value });
  };

  const addBeneficiary = () => {
    setBeneficiaries([...beneficiaries, newBeneficiary]);
    setNewBeneficiary({ state: '', amount: '', incomeType: '', filingStatus: 'single' });
    setShowForm(false);
  };

  const calculate = () => {
    // Placeholder for calculation logic
    setResults('Calculation result will go here.');
  };

  return (
    <div className={styles.container}>
      <h1>Trust Distribution Calculator</h1>
      <br></br>

      <div className={styles.section}>
        <label>Total Trust Income:</label>
        <input
          type="number"
          value={totalIncome}
          onChange={(e) => setTotalIncome(e.target.value)}
          placeholder="Enter total income"
        />
      </div>

      <br></br>

      <div className={styles.section}>
        <h2>Income Type</h2>
        {incomeTypes.map((entry, idx) => (
          <div key={idx} className={styles.inlineRow}>
            <input
              type="text"
              placeholder="Income type"
              value={entry.type}
              onChange={(e) => handleIncomeTypeChange(idx, 'type', e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={entry.amount}
              onChange={(e) => handleIncomeTypeChange(idx, 'amount', e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addIncomeType}>Add Income Type</button>
      </div>

      <br></br>

      <div className={styles.section}>
        <h2>Beneficiaries</h2>
        <button type="button" onClick={() => setShowForm(true)}>Add Beneficiary</button>

        {showForm && (
          <div className={styles.beneficiaryForm}>
            <select
              value={newBeneficiary.state}
              onChange={(e) => handleNewBeneficiaryChange('state', e.target.value)}
            >
              <option value="">Select State</option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Amount Received"
              value={newBeneficiary.amount}
              onChange={(e) => handleNewBeneficiaryChange('amount', e.target.value)}
            />

            <input
              type="text"
              placeholder="Income Type"
              value={newBeneficiary.incomeType}
              onChange={(e) => handleNewBeneficiaryChange('incomeType', e.target.value)}
            />

            <select
              value={newBeneficiary.filingStatus}
              onChange={(e) => handleNewBeneficiaryChange('filingStatus', e.target.value)}
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="head">Head of Household</option>
            </select>

            <button type="button" onClick={addBeneficiary}>Save Beneficiary</button>
          </div>
        )}

        {beneficiaries.length > 0 && (
          <ul>
            {beneficiaries.map((b, idx) => (
              <li key={idx}>
                {b.amount} to a {b.filingStatus} filer in {b.state} ({b.incomeType})
              </li>
            ))}
          </ul>
        )}
      </div>

      <br></br>

      <div className={styles.section}>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>

      {results && (
        <div className={styles.section}>
          <h2>Results</h2>
          <p>{results}</p>
        </div>
      )}
    </div>
  );
}
