# Direct incomes

Direct incomes include:

* Selling an item directly to a contact, and receiving payment at the point of the sale.
* Refunding an item in cash to a contact.
* Depositing money into a bank account.

From the Direct Incomes endpoints, you can:

* Get a list of all direct incomes for a specific company]
* Get a single direct income for a specific company and connection
* Add a new direct income to a specific company's accounting package

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier of the direct income, unique for the company. |
| **reference** | `string` | User-friendly reference for the direct income. |
| **contact-ref** | [Reference type](/data-model/accounting/reference-types#contact-ref) | A customer or supplier associated with the direct cost. |
| **issue-date** | `string` ([Date](/data-model/shared/date/)) | The date of the direct income as recorded in the accounting platform. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | The currency of the direct income. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | The conversion rate between the currency of the direct incomes and the base currency of the company. |
| **line-items** | `array` | An array of [directIncomelineItems](datamodel-direct-income#direct-income-line-items). |
| **payment-allocations** | `array` | An array of [paymentAllocations](datamodel-direct-income#payment-allocations). |
| **sub-total** | `integer` | The integer amount in pennies representing the the total amount of the direct incomes, excluding any taxes. |
| **tax-amount** | `integer` | The integer amount in pennies representing the the total amount of tax on the direct incomes. |
| **total-amount** | `integer` | The integer amount in pennies representing the the amount of the direct incomes, inclusive of tax. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | The date the record was last changed in the accounting system. |

## Direct income line items

| Field | Type | Description |
| :- | :- | :- |
| **description** | `string` | A user-friendly name of the goods or services. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | Reference to the account to which the line item is linked. |
| **unit-amount** | `integer` | The integer amount in pennies representing the the price of each unit of goods or services.  <br>_Note_: If the platform does not provide this information, the unit amount will be mapped to the total amount. |
| **quantity** | `integer` | The number of units of goods or services received.  <br>  <br>_Note_: If the platform does not provide this information, the quantity will be mapped as 1. |
| **sub-total** | `integer` | The integer amount in pennies representing the the amount of the line, inclusive of discounts, but exclusive of tax. |
| **tax-amount** | `integer` | The integer amount in pennies representing the the amount of tax for the line.  <br>_Note_: If the platform does not provide this information, the quantity will be mapped as 0.00 |
| **total-amount** | `integer` | The integer amount in pennies representing the the total amount of the line, including tax. |
| **item-ref** | [Reference type](/data-model/accounting/reference-types#item-ref) | Reference to the product, service type, or inventory item to which the direct cost is linked. |
| **tracking-category-refs** | `array` | An array of [categories](/data-model/accounting/reference-types#tracking-category-ref) against which this direct cost is tracked. |

## Payment allocations

| Field | Type | Description |
| :- | :- | :- |
| payment |     |     |
| **id** | `string` | The identifier of the allocated payment. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | The account that the allocated payment is made from or to. |
| **currency** | ([Currency](/data-model/shared/currency/)) | The currency the payment has been made in. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | The conversion rate between the currency of the allocated payment and the currency of the company. |
| **paid-on-date** | `string` ([Date](/data-model/shared/date/)) | The date the payment was made. |
| **total-amount** | `integer` | The integer amount in pennies representing the the total amount that was paid. |
| allocation |     |     |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | The currency of the transaction. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | The conversion rate between the currency of the allocated payment and the currency of the transaction. |
| **allocated-on-date** | `string` ([Date](/data-model/shared/date/)) | The date the payment was allocated. |
| **total-amount** | `integer` | The integer amount in pennies representing the the total amount that has been allocated. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```