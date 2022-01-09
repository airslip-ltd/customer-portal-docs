# Accounts

<p class="description">Accounts are the categories a business uses to record accounting transactions. From the Accounts endpoints, you can retrieve a list of all accounts for a specified company.</p>

The categories for an account include:

- Asset
- Expense
- Income
- Liability
- Equity

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the account, unique for the [business](/data-model/shared/business). |
| **nominal-code** | `string` | Reference given to each nominal account for a business. It ensures money is allocated to the correct account. This code isn't a unique identifier in the Airslip system |
| **name** | `string` | Name of the account |
| **description** | `string` | Description for the account. |
| **fully-qualified-category** | `string` | Full category of the account. For example:  <br>Liability.Current or Income.Revenue. See example data. |
| **fully-qualified-name** | `string` | Full name of the account, for example:  <br><br>  <br>* `Liability.Current.VAT`<br>* `Income.Revenue.Sales` |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Currency of the account. |
| **current-balance** | `integer` | The integer amount in pennies representing the current balance in the account. |
| **type** | `string` | Type of account, either:  <br>\+ `Unknown`  <br>\+ `Asset`  <br>\+ `Expense`  <br>\+ `Income`  <br>\+ `Liability`  <br>\+ `Equity` |
| **status** | `string` | Status of the account, either:  <br>\+ `Unknown`  <br>\+ `Active`  <br>\+ `Archived`  <br>\+ `Pending` |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string`  ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |

### Account reference

Data types that reference an account, for example bill and invoice line items, use an [account-ref](/data-model/accounting/reference-types#account-ref) that includes the ID and name of the linked account.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the account in the accounting platform. |
| **name** | `string` | Name of the account in the accounting platform. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```