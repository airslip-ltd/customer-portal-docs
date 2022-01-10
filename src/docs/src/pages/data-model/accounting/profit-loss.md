# Profit and loss

The purpose of a profit and loss report is to present the financial performance of a company over a specified time period.

A profit and loss report shows a company's total income and expenses for a specified period of time and whether a profit or loss has been made.

> 
> Profit and loss or balance sheet?
> 
> Profit and loss reports summarise the total revenue, expenses, and profit or loss over a specified time period. A balance sheet report presents all assets, liability, and equity for a given date.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **reports** |     | An array of [ProfitAndLossReports](#profit-and-loss-report). |
| **report-basis** | `string` | The basis of a report, either:  <br>\+ `Accrual`  <br>\+ `Cash`  <br>\+ `Unknown` |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Base currency of the company in which the profit and loss report is presented. |
| **most-recent-available-month** | `string` | Most recent available monthly report data |
| **earliest-available-month** | `string` | Earliest available monthly report data |

### Profit and loss report

| Field | Type | Description |
| :- | :- | :- |
| **from-date** | `string` ([Date](/data-model/shared/date/)) | Date from which the report data begins. |
| **to-date** | `string` ([Date](/data-model/shared/date/)) | Date on which the report data ends. |
| **income** |     | [ReportLine](#report-lines) items for income in the given date range. |
| **cost-of-sales** |     | [ReportLine](#report-lines) items for cost of sales in the given date range. |
| **gross-profit** | `integer` | The integer amount in pennies representing Gross profit of the company in the given date range. |
| **expenses** |     | [ReportLine](#report-lines) items for expenses in the given date range. |
| **net-operating-profit** | `integer` | The integer amount in pennies representing Net operating profit of the company in the given date range. |
| **other-expenses** |     | [ReportLine](#report-lines) items for other expenses in the given date range. |
| **other-income** |     | [ReportLine](#report-lines) items for other income in the given date range. |
| **net-other-income** | `integer` | The integer amount in pennies representing Net other income of the company in the given date range. |
| **net-profit** | `integer` | The integer amount in pennies representing Net profit of the company in the given date range. |

## Report lines

| Field | Type | Description |
| :- | :- | :- |
| **account-id** | `string` | Identifier for the account, unique for the [business](/data-model/shared/business) in the accounting platform. |
| **name** | `string` | Name of the report line item, for example: `Income` or `Sales`. |
| **value** | `integer` | The integer amount in pennies representing Numerical value of the line item. |
| **items** |     | Report line items for the given date range. |
<!-- 
## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
``` -->