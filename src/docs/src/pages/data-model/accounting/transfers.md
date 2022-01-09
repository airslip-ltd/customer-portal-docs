# Transfers

Explore the [Transfers](https://api.codat.io/swagger/index.html#/Transfers) endpoints in Swagger.

Transfers are used to record the movement of money between two bank accounts  
or between a bank account and a nominal account.

From the Transfers endpoints, you can:

* [Retrieve a list of all transfers for a specified company](https://api.codat.io/swagger/index.html#/Transfers/get_companies__companyId__connections__connectionId__data_transfers)
* [Retrieve a single transfer for a specified company](https://api.codat.io/swagger/index.html#/Transfers/get_companies__companyId__connections__connectionId__data_transfers__transferId_)
* [Add a new transfer for a specified company](https://api.codat.io/swagger/index.html#/Transfers/post_companies__companyId__connections__connectionId__push_transfers)

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the transfer. |
| **description** | `string` | Description of the transfer. |
| **contact-ref** | [Reference type](/data-model/accounting/reference-types#contact-ref) | The customer or supplier for the transfer, if available. |
| **date** | `string` ([Date](/data-model/shared/date/)) | The day on which the transfer was made. |
| **from** / **to** |     | The details of the [accounts](data-model/accounting/transfers#transfer-account-details) the transfer is moving from or to. |
| **tracking-category-refs** | [Reference type](/data-model/accounting/reference-types#tracking-category-ref) | Reference to the tracking categories this transfer is being tracked against. |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |

## Transfer account details

| Field | Type | Description |
| :- | :- | :- |
| account-ref | [Reference type](/data-model/accounting/reference-types#account-ref) | The account that the transfer is moving from or to. |
| currency | `string` ([Currency](/data-model/shared/currency/)) | ISO currency code recorded for the transfer in the accounting platform. |
| amount | `integer` | The integer amount in pennies representing the the amount transferred between accounts. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```