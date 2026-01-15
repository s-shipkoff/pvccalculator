import { federalTaxData } from './federalTaxData';
import getTaxAmount from './getTaxAmount';

// Calculates total income tax based on income, state, and filing status
function calculateTax(income, state, filingStatus, incomeType = '') {
  const stateTax = getTaxAmount({
    income: Number(income),
    state,
    filingStatus,
    type: 'state',
  });

  const federalTax = getTaxAmount({
    income: Number(income),
    state,
    filingStatus,
    type: 'federal',
  });

  return {
    federalTax,
    stateTax,
    totalTax: federalTax + stateTax,
  };
}

// Main function to compare scenarios
export default function calculateDistributionTax({
  totalIncome,
  beneficiaries,
  trustState = 'default',
}) {
  // Step 1: Tax if kept in trust (use 'single' as default for trust)
  const trustTaxes = calculateTax(totalIncome, trustState, 'single');

  // Step 2: Tax if distributed to each beneficiary
  let totalDistributedTax = 0;
  const beneficiaryResults = [];

  for (const b of beneficiaries) {
    const income = Number(b.amount || 0);
    const filingStatus = b.filingStatus || 'single';
    const state = b.state || 'default';

    const taxes = calculateTax(income, state, filingStatus, b.incomeType);
    totalDistributedTax += taxes.totalTax;

    beneficiaryResults.push({
      ...b,
      ...taxes,
    });
  }

  // Step 3: Summarize
  return {
    keptInTrust: trustTaxes,
    distributed: {
      totalTax: totalDistributedTax,
      breakdown: beneficiaryResults,
    },
    taxDifference: trustTaxes.totalTax - totalDistributedTax,
  };
}
