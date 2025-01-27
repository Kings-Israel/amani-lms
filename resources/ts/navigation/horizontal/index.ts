import type { HorizontalNavItems } from '@layouts/types'

export default [
  {
    title: 'Dashboard',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Borrowers',
    icon: { icon: 'tabler-user' },
    children: [
      {
        title: 'View Borrowers',
        to: 'borrowers',
      },
      {
        title: 'Add Borrower',
        to: 'borrowers-add',
      },
      {
        title: 'View Borrower Groups',
        to: 'borrowers-groups',
      },
      {
        title: 'Add Borrower Group',
        to: 'borrowers-add-group',
      },
      {
        title: 'Send SMS to All Borrowers',
        to: 'borrowers-send-sms',
      },
      {
        title: 'Send Email to All Borrowers',
        to: 'borrowers-send-email',
      },
      {
        title: 'Invite Borrowers',
        to: 'borrowers-invite',
      },
    ],
  },
  {
    title: 'Loans',
    icon: { icon: 'tabler-cash-banknote' },
    children: [
      {
        title: 'View Loans',
        to: 'loans',
      },
      {
        title: 'Add Loan',
        to: 'loans-add-loan',
      },
      {
        title: 'Due Loans',
        to: 'loans-due-loans',
      },
      {
        title: 'Missed Repayments',
        to: 'loans-missed-repayments',
      },
      {
        title: 'Loans in Arrears',
        to: 'loans-loans-in-arrears',
      },
      {
        title: 'No Repayments',
        to: 'loans-no-repayments',
      },
      {
        title: 'Past Maturity Date',
        to: 'loans-past-maturity-date',
      },
      {
        title: 'Priciple Outstanding',
        to: 'loans-principle-outstanding',
      },
      {
        title: '1 Month Late Loans',
        to: 'loans-one-month-late',
      },
      {
        title: '3 Months Late Loans',
        to: 'loans-three-months-late',
      },
      {
        title: 'Loan Calculator',
        to: 'loans-loan-calculator',
      },
      {
        title: 'Guarantors',
        to: 'loans-guarantors',
      },
      {
        title: 'Loan Comments',
        to: 'loans-loan-comments',
      },
      {
        title: 'Approve Loans',
        to: 'loans-approve-loans',
      },
    ],
  },
  {
    title: 'Repayments',
    icon: { icon: 'tabler-eye-dollar' },
    children: [
      {
        title: 'View Repayments',
        to: 'repayments',
      },
      {
        title: 'Add Bulk Repayments',
        to: 'repayments-add-bulk',
      },
      {
        title: 'Upload Repayments',
        to: 'repayments-upload',
      },
      {
        title: 'Repayments Chart',
        to: 'repayments-charts',
      },
      {
        title: 'Approve Repayments',
        to: 'repayments-approve',
      },
    ],
  },
  {
    title: 'Collection Sheets',
    icon: { icon: 'tabler-checkup-list' },
    children: [
      {
        title: 'Daily Collection Sheet',
        to: 'collection-sheets-daily',
      },
      {
        title: 'Missed Repayment Sheet',
        to: 'collection-sheets-missed-repayment',
      },
      {
        title: 'Past Maturity Date Loans',
        to: 'collection-sheets-past-maturity-date',
      },
      {
        title: 'Send SMS',
        to: 'collection-sheets-send-sms',
      },
      {
        title: 'Send Email',
        to: 'collection-sheets-send-email',
      },
    ],
  },
  {
    title: 'Investors',
    icon: { icon: 'tabler-user-plus' },
    children: [
      {
        title: 'View Investors',
        to: 'investors',
      },
      {
        title: 'Add Investor',
        to: 'investors-add',
      },
      {
        title: 'Send SMS to Investors',
        to: 'investors-send-sms',
      },
      {
        title: 'Send Email to Investors',
        to: 'investors-send-email',
      },
      {
        title: 'Invite Investors',
        to: 'investors-invite',
      },
    ],
  },
  {
    title: 'Investor Accounts',
    icon: { icon: 'tabler-briefcase' },
    children: [
      {
        title: 'View All Investor Accounts',
        to: 'investors-accounts',
      },
      {
        title: 'Add Investor Account',
        to: 'investors-accounts-add',
      },
      {
        title: 'View All Loan Investments',
        to: 'investors-accounts-loan-investments',
      },
      {
        title: 'View Investor Transactions',
        to: 'investors-accounts-investor-transactions',
      },
      {
        title: 'Approve Loan Investments',
        to: 'investors-accounts-approve-investment',
      },
    ],
  },
  {
    title: 'Expenses',
    icon: { icon: 'tabler-arrow-forward-up-double' },
    children: [
      {
        title: 'View Expenses',
        to: 'expenses',
      },
      {
        title: 'Add Expense',
        to: 'expenses-add',
      },
      {
        title: 'Upload Expenses',
        to: 'expenses-upload',
      },
    ],
  },
  {
    title: 'Other Income',
    icon: { icon: 'tabler-plus' },
    children: [
      {
        title: 'View Other Income',
        to: 'other-income',
      },
      {
        title: 'Add Other Income',
        to: 'other-income-add',
      },
      {
        title: 'Upload Other Income',
        to: 'other-income-upload',
      },
    ],
  },
  {
    title: 'Reports',
    icon: { icon: 'tabler-clipboard-data' },
    children: [
      {
        title: 'Borrowers Report',
        to: 'reports-borrowers',
      },
      {
        title: 'Loan Report',
        to: 'reports-loan-report',
      },
      {
        title: 'Loan Arrears Aging Report',
        to: 'reports-loan-arrears-aging',
      },
      {
        title: 'Collections Report',
        to: 'reports-collection',
      },
      {
        title: 'Collector Report (Staff)',
        to: 'reports-collector',
      },
      {
        title: 'Deferred Income',
        to: 'reports-deferred-income',
      },
      {
        title: 'Deferred Income Monthly',
        to: 'reports-deferred-income-monthly',
      },
      {
        title: 'Pro-Rata Collections Monthly',
        to: 'reports-pro-rata-collections-monthly',
      },
      {
        title: 'Disbursement Report',
        to: 'reports-disbursement',
      },
      {
        title: 'Fees Report',
        to: 'reports-fees',
      },
      {
        title: 'Loan Officer Report',
        to: 'reports-loan-officer', 
      },
      {
        title: 'Loan Products Report',
        to: 'reports-loan-products',
      },
      {
        title: 'MFRS Ratios',
        to: 'reports-mfrs-ratios',
      },
      {
        title: 'Monthly Report',
        to: 'reports-monthly',
      },
      {
        title: 'Outstanding Report',
        to: 'reports-outstanding',
      },
      {
        title: 'Portfolio At Riks (PAR)',
        to: 'reports-portfolio-at-risk',
      },
      {
        title: 'At a Glance Report',
        to: 'reports-at-a-glance',
      },
      {
        title: 'All Entries',
        to: 'reports-all-entries',
      },
    ],
  },
  {
    title: 'Accounting',
    icon: { icon: 'tabler-book-2' },
    children: [
      {
        title: 'Cash Flow Accumulated',
        to: 'accounting-cash-flow-accumulated',
      },
      {
        title: 'Cash Flow Monthly',
        to: 'accounting-cash-flow-monthly',
      },
      {
        title: 'Profit / Loss',
        to: 'accounting-profit-loss',
      },
      {
        title: 'Balance Sheet',
        to: 'accounting-balance-sheet',
      },
      {
        title: 'Trial Balance',
        to: 'accounting-trial-balance',
      },
      {
        title: 'General Ledger Summary',
        to: 'accounting-general-ledger-summary',
      },
      {
        title: 'Branch Equity',
        to: 'accounting-branch-equity',
      },
      {
        title: 'Inter Bank Transfers',
        to: 'accounting-inter-bank-transfers',
      },
      {
        title: 'Reconcile Entries',
        to: 'accounting-reconcile-entries',
      },
      {
        title: 'Chart of Accounts',
        to: 'accounting-chart-of-accounts',
      },
      {
        title: 'Manual Journal',
        to: 'accounting-manual-journal',
      },
    ],
  },
] as HorizontalNavItems
