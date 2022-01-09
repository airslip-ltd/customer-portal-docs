export interface MuiPage {
  pathname: string;
  children?: MuiPage[];
  disableDrawer?: boolean;
  icon?: string;
  /**
   * Pages are considered to be ordered depth-first.
   * If a page should be excluded from this order, set `order: false`.
   * You want to set `ordered: false` if you don't want the page to appear in an ordered list e.g. for previous/next page navigation.
   */
  ordered?: boolean;
  /**
   * Props spread to the Link component
   */
  linkProps?: Record<string, unknown>;
  subheader?: string;
  /**
   * Overrides the default page title.
   */
  title?: string;
}

export interface OrderedMuiPage extends MuiPage {
  ordered?: true;
}

const pages: readonly MuiPage[] = [
  {
    pathname: '/getting-started',
    icon: 'DescriptionIcon',
    children: [
      { pathname: '/getting-started/installation' },
      { pathname: '/getting-started/usage' },
      { pathname: '/getting-started/support' },
    ],
  },
  {
    pathname: '/components',
    icon: 'ToggleOnIcon',
    children: [
      { pathname: '/components/overview' },
      {
        pathname: '/components',
        subheader: '/components/efficiency',
        title: 'Efficiency',
        children: [
          { pathname: '/components/accounts-receivable-turnover', title: 'Accounts receivable turnover' },
          { pathname: '/components/budget-creation-cycle-time', title: 'Budget creation cycle time' },
          { pathname: '/components/current-accounts-payable-ratio', title: 'Current accounts payable ratio' },
          { pathname: '/components/current-accounts-receivable-ratio', title: 'Current accounts receivable ratio' },
          { pathname: '/components/days-inventory-outstanding', title: 'Days inventory outstanding' },
          { pathname: '/components/days-payable-outstanding', title: 'Days payable outstanding' },
          { pathname: '/components/days-sales-outstanding', title: 'Days sales outstanding' },
          { pathname: '/components/fixed-asset-turnover', title: 'Fixed asset turnover' },
          { pathname: '/components/inventory-turnover', title: 'Inventory turnover' },
          { pathname: '/components/labour-cost-percentage', title: 'Labour cost percentage' },
          { pathname: '/components/payroll-headcount-ratio', title: 'Payroll headcount ratio' },
          { pathname: '/components/return-on-assets', title: 'Return on assets' },
          { pathname: '/components/selling-general-administrative-ratio', title: 'Selling, General and Administrative (SG&A) Ratio' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/leverage',
        title: 'Leverage',
        children: [
          { pathname: '/components/debt-to-equity-ratio', title: 'Debt-to-equity ratio' },
          { pathname: '/components/debt-to-equity-ratio', title: 'Debt-to-equity ratio' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/liquidity',
        title: 'Liquidity',
        children: [
          { pathname: '/components/accounts-payable-turnover', title: 'Accounts payable turnover' },
          { pathname: '/components/cash-burn-rate', title: 'Cash burn rate' },
          { pathname: '/components/current-ratio', title: 'Current ratio' },
          { pathname: '/components/interest-coverage', title: 'Interest coverage' },
          { pathname: '/components/operating-cash-flow', title: 'Operating cash flow' },
          { pathname: '/components/quick-ratio', title: 'Quick ratio/acid test' },
          { pathname: '/components/working-capital', title: 'Working capital' }
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/profitability',
        title: 'Profitability',
        children: [
          { pathname: '/components/budget-variance', title: 'Budget variance' },
          { pathname: '/components/gross-profit-margin', title: 'Gross profit margin' },
          { pathname: '/components/net-profit-margin', title: 'Net profit margin' },
          { pathname: '/components/operating-margin', title: 'Operating margin' },
          { pathname: '/components/recurring-revenue', title: 'Recurring revenue' },
          { pathname: '/components/sales-growth-rate', title: 'Sales growth rate' },
        ],
      },
      {
        pathname: '/components',
        subheader: '/components/valuation',
        title: 'Valuation',
        children: [
          { pathname: '/components/earnings-per-share', title: 'Earnings per share' },
          { pathname: '/components/earnings-per-share', title: 'Earnings per share' },
        ],
      },
    ],
  },
  {
    pathname: '/data-model',
    icon: 'BuildIcon',
    children: [
      {
        pathname: '/data-model',
        subheader: '/data-model/shared',
        children: [
          { pathname: '/data-model/shared/business' },
          { pathname: '/data-model/shared/date' },
          { pathname: '/data-model/shared/country' },
          { pathname: '/data-model/shared/currency' },
          { pathname: '/data-model/shared/currency-rate' },
        ],
      },
      {
        pathname: '/data-model',
        subheader: '/data-model/banking',
        children: [
          { pathname: '/data-model/banking/bank-accounts' },
          { pathname: '/data-model/banking/bank-accounts-history' },
          { pathname: '/data-model/banking/bank-transactions' },
        ],
      },
      {
        pathname: '/data-model',
        subheader: '/data-model/commerce',
        children: [
          { pathname: '/data-model/commerce/transactions' },
          { pathname: '/data-model/commerce/inventory' },
          { pathname: '/data-model/commerce/locations' },
        ],
      },
      {
        pathname: '/data-model',
        subheader: '/data-model/accounting',
        children: [
          { pathname: '/data-model/accounting/accounts' },
          { pathname: '/data-model/accounting/attachments' },
          { pathname: '/data-model/accounting/balance-sheet' },
          { pathname: '/data-model/accounting/bills' },
          { pathname: '/data-model/accounting/bill-credit-notes' },
          { pathname: '/data-model/accounting/bill-payments' },
          { pathname: '/data-model/accounting/cash-flow-statement' },
          { pathname: '/data-model/accounting/credit-notes' },
          { pathname: '/data-model/accounting/customers' },
          { pathname: '/data-model/accounting/direct-costs' },
          { pathname: '/data-model/accounting/direct-incomes' },
          { pathname: '/data-model/accounting/invoices' },
          { pathname: '/data-model/accounting/journal-entries' },
          { pathname: '/data-model/accounting/journals' },
          { pathname: '/data-model/accounting/payments' },
          { pathname: '/data-model/accounting/payment-methods' },
          { pathname: '/data-model/accounting/profit-loss' },
          { pathname: '/data-model/accounting/purchase-orders' },
          { pathname: '/data-model/accounting/suppliers' },
          { pathname: '/data-model/accounting/tax-rates' },
          { pathname: '/data-model/accounting/tracking-categories' },
          { pathname: '/data-model/accounting/transfers' },
          { pathname: '/data-model/accounting/reference-types' },
        ],
      }
    ],
  },
  {
    pathname: '/supported-platforms',
    icon: 'AddIcon',
    children: [
      { pathname: '/supported-platforms/banking' },
      { pathname: '/supported-platforms/commerce' },
      { pathname: '/supported-platforms/accounting' },
    ],
  },
  {
    pathname: '/administration',
    icon: 'AddIcon',
    children: [
      { pathname: '/administration/connection-insights' },
      { pathname: '/administration/managing-businesses' },
      { pathname: '/administration/managing-users' },
      { pathname: '/administration/user-roles' },
    ],
  },
  {
    pathname: '/faqs',
    title: 'FAQs',
    icon: 'VisibilityIcon',
    children: [
      { pathname: '/faqs/how-long-does-it-take-for-financial-data-to-be-available-after-a-business-links-one-of-its-platforms' },
      { pathname: '/faqs/how-does-airslip-access-business-data' },
      { pathname: '/faqs/do-i-need-to-know-how-to-code-to-use-airslip' },
    ],
  },
  {
    pathname: '/glossary',
    icon: 'StyleIcon',
    children: [
      { pathname: '/glossary/glossary' },
      { pathname: '/glossary/glossary' },
    ],
  },
];

export default pages;
