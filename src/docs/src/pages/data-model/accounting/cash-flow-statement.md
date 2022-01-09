# Cash flow statement

<p class="description">A cash flow statement is a financial report that records all cash that is received or spent by a company during a given period. It gives you a clearer picture of the business's performance, and its ability to pay creditors and finance growth.</p>

> ❗
> 
> Cash flow statement or balance sheet?
> 
> Look at the cash flow statement to understand a company's ability to pay its bills. Although the balance sheet may show healthy earnings at a specific point in time, the cash flow statement allows you to see whether the company is meeting its financial commitments, such as paying creditors or its employees.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **report-basis** | `string` | Accounting method used when aggregating the report data. In this case, `Cash`. |
| **report-input** | `string` | Accounting method used to prepare the cash flow statement:  <br>\+ `Indirect`  <br>  <br>\+ `Direct` \- Only method currently supported.  <br>  <br>\+ `Unknown` |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Currency of all values in the cash flow statement. |
| **reports** |     | Array of [cash flow statements](#cash-flow-statement-model) |

## Cash flow statement

| Field | Type | Description |
| :- | :- | :- |
| **from-date** | `string` ([Date](/data-model/shared/date/)) | Start date for the reporting period. |
| **to-date** | `string` ([Date](/data-model/shared/date/)) | End date for the reporting period. |
| **cash-receipts** |     | [ReportLines](#report-line) for cash receipts from the sale of goods. |
| **cash-payments** |     | [ReportLines](#report-line) for cash payments to suppliers for the purchase of goods or services. |

## Report line


name	string	
value	number	
items		

| Field | Type | Description |
| :- | :- | :- |
| **account-id** | `string` | Reference for an account in the accounting platform. This is unique to the company. |
| **name** | `string` | Name of the account in the accounting platform. |
| **value-number** | `integer` | Balance of the account in the accounting platform. |
| **items** |     | An array of [ReportLines](#report-line) items. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```