# Payment methods

A Payment Method represents the payment method(s) used to pay a Bill. Payment Methods are referenced on [Bill Payments](/data-model/accounting/bill-payments).

## Data model

| Field | Type | Decription |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the payment method. |
| **name** | `string` | Name of the payment method |
| **type** | `string` | Method of payment:  <br>\+ `Cash`  <br>\+ `Check`  <br>\+ `CreditCard`  <br>\+ `DebitCard`  <br>\+ `BankTransfer`  <br>\+ `Unknown`  <br>\+ `Other` |
| **status** | `string` | Status of the Payment Method:  <br>\+ `Active`: Available for use  <br>\+ `Archived`: Unavailable  <br>\+ `Unknown` |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the payment method details were last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the payment method details were last changed in the accounting system. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```