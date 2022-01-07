import pagesApi from './pagesApi';

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
      { pathname: '/getting-started/example-projects' },
      { pathname: '/getting-started/templates' },
      { pathname: '/getting-started/learn' },
      { pathname: '/getting-started/faq', title: 'FAQs' },
      { pathname: '/getting-started/supported-components' },
      { pathname: '/getting-started/supported-platforms' },
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
    title: 'Component API',
    pathname: '/api-docs',
    icon: 'CodeIcon',
    children: [
      ...pagesApi,
      {
        pathname: '/api-docs/data-grid',
        title: 'Data Grid',
        children: [
          { pathname: '/api-docs/data-grid', title: 'API Reference' },
          { pathname: '/api-docs/data-grid/data-grid', title: 'DataGrid' },
          { pathname: '/api-docs/data-grid/data-grid-pro', title: 'DataGridPro' },
          { pathname: '/api-docs/data-grid/grid-api', title: 'GridApi' },
          { pathname: '/api-docs/data-grid/grid-col-def', title: 'GridColDef' },
          { pathname: '/api-docs/data-grid/grid-cell-params', title: 'GridCellParams' },
          { pathname: '/api-docs/data-grid/grid-row-params', title: 'GridRowParams' },
          {
            pathname: '/api-docs/data-grid/grid-csv-export-options',
            title: 'GridCSVExportOptions',
          },
          {
            pathname: '/api-docs/data-grid/grid-print-export-options',
            title: 'GridPrintExportOptions',
          },
        ].map((page) => {
          return {
            ...page,
            linkProps: { linkAs: `${page.pathname.replace(/^\/api-docs/, '/api')}/` },
          };
        }),
      },
    ]
      .sort((a, b) =>
        a.pathname.replace('/api-docs/', '').localeCompare(b.pathname.replace('/api-docs/', '')),
      )
      .map((page) => {
        return {
          ...page,
          linkProps: { linkAs: `${page.pathname.replace(/^\/api-docs/, '/api')}/` },
        };
      }),
  },
  {
    pathname: '/system',
    icon: 'BuildIcon',
    children: [
      { pathname: '/system/basics' },
      { pathname: '/system/properties' },
      { pathname: '/system/the-sx-prop', title: 'The sx prop' },
      { pathname: '/system/borders' },
      { pathname: '/system/display' },
      { pathname: '/system/flexbox' },
      { pathname: '/system/grid' },
      { pathname: '/system/palette' },
      { pathname: '/system/positions' },
      { pathname: '/system/shadows' },
      { pathname: '/system/sizing' },
      { pathname: '/system/spacing' },
      { pathname: '/system/screen-readers' },
      { pathname: '/system/typography' },
      { pathname: '/system/advanced' },
      { pathname: '/system/box' },
      { pathname: '/system/styled', title: 'styled' },
    ],
  },
  {
    pathname: '/customization',
    icon: 'CreateIcon',
    children: [
      {
        pathname: '/customization',
        subheader: '/customization/theme',
        children: [
          { pathname: '/customization/theming' },
          { pathname: '/customization/palette' },
          { pathname: '/customization/dark-mode', title: 'Dark mode' },
          { pathname: '/customization/typography' },
          { pathname: '/customization/spacing' },
          { pathname: '/customization/breakpoints' },
          { pathname: '/customization/density' },
          { pathname: '/customization/z-index', title: 'z-index' },
          { pathname: '/customization/transitions' },
          { pathname: '/customization/theme-components', title: 'Components' },
          { pathname: '/customization/default-theme', title: 'Default Theme' },
        ],
      },
      { pathname: '/customization/how-to-customize' },
      { pathname: '/customization/color' },
      { pathname: '/customization/unstyled-components' },
    ],
  },
  {
    pathname: '/guides',
    title: 'How To Guides',
    icon: 'VisibilityIcon',
    children: [
      { pathname: '/guides/api', title: 'API Design Approach' },
      { pathname: '/guides/classname-generator', title: 'ClassName Generator' },
      { pathname: '/guides/understand-mui-packages', title: 'Understand MUI packages' },
      { pathname: '/guides/typescript', title: 'TypeScript' },
      { pathname: '/guides/interoperability', title: 'Style Library Interoperability' },
      { pathname: '/guides/styled-engine' },
      { pathname: '/guides/minimizing-bundle-size' },
      { pathname: '/guides/composition' },
      { pathname: '/guides/routing' },
      { pathname: '/guides/server-rendering' },
      { pathname: '/guides/responsive-ui', title: 'Responsive UI' },
      { pathname: '/guides/pickers-migration', title: 'Migration from @material-ui/pickers' },
      { pathname: '/guides/migration-v4', title: 'Migration From v4' },
      { pathname: '/guides/migration-v3', title: 'Migration From v3' },
      { pathname: '/guides/migration-v0x', title: 'Migration From v0.x' },
      { pathname: '/guides/testing' },
      { pathname: '/guides/localization' },
      { pathname: '/guides/content-security-policy', title: 'Content Security Policy' },
      { pathname: '/guides/right-to-left', title: 'Right-to-left' },
      { pathname: '/guides/flow' },
    ],
  },
  {
    pathname: '/styles',
    title: 'Styles (legacy)',
    icon: 'StyleIcon',
    children: [
      { pathname: '/styles/basics' },
      { pathname: '/styles/advanced' },
      { pathname: '/styles/api', title: 'API' },
    ],
  },
  {
    pathname: '/discover-more',
    icon: 'AddIcon',
    children: [
      { pathname: '/discover-more/showcase' },
      { pathname: '/discover-more/related-projects' },
      { pathname: '/discover-more/roadmap' },
      { pathname: '/discover-more/backers', title: 'Sponsors & Backers' },
      { pathname: '/discover-more/vision' },
      { pathname: '/discover-more/changelog' },
      { pathname: '/discover-more/languages' },
      { pathname: '/about', title: 'About us' },
    ],
  },
  {
    pathname: 'https://mui.com/store/',
    title: 'Templates',
    icon: 'ReaderIcon',
    linkProps: {
      'data-ga-event-category': 'store',
      'data-ga-event-action': 'click',
      'data-ga-event-label': 'sidenav',
    },
  },
  { pathname: '/versions', ordered: false },
  { pathname: '/', ordered: false, disableDrawer: true },
  { pathname: 'https://medium.com/material-ui', title: 'Blog', icon: 'BookIcon' },
];

export default pages;
