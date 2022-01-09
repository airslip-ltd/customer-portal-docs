# Balance sheet

<p class="description">A balance sheet is a snapshot of a business account at a single point in time. It provides a statement of the assets, liabilities, and equity of an organisation. You are able to filter by currency, date, item name and report type.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **currency-code** | `string` | Currency of the balance sheet |
| **reports** | [BalanceSheet](#balance-sheet-report) | An array of [BalanceSheet](#balance-sheet-report) reports |

### Balance sheet report

| Field | Type | Description |
| :- | :- | :- |
| **date** | `string` | Point in time when a snapshot of a businesses financial position is taken |
| **assets** |     | [ReportLines](#report-line) for assets. For example, fixed and current assets |
| **liabilities** |     | [ReportLines](#report-line) for liabilities. For example, current liabilities |
| **net-assets** | `integer` | Value of net assets for a business in their base currency |
| **equity** |     | [ReportLines](#report-line) for equities. For example, retained and current year earnings. See below |

### Report line

| Field | Type | Description |
| :- | :- | :- |
| **account-id** | `string` | Reference for an account in the accounting platform. This is unique to the business |
| **name** | `string` | Name of the account in the accounting platform |
| **value** | `integer` | The integer amount in pennies representing the balance of the account in the accounting platform |
| **items** |     | An array of [ReportLine](#report-line) items |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```