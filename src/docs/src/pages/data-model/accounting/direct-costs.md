# Direct costs

Direct costs include:

- Purchasing an item and paying it off at the point of the purchase
- Receiving cash from a refunded item if the refund is made by the supplier
- Withdrawing money from a bank account
- Writing a cheque

From the Direct Costs endpoints, you can:

- Get a list of all direct costs for a specific company
- Get a single direct cost for a specific company
- Add a new direct cost to a specific company's accounting package


## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier of the direct cost, unique for the company. |
| **reference** | `string` | User-friendly reference for the direct cost. |
| **note** | `string` | A note attached to the direct cost. |
| **contact-ref** | [Reference type](/data-model/accounting/reference-types#contact-ref) | A customer or supplier associated with the direct cost. |
| **issue-date** | `string` ([Date](/data-model/shared/date/)) | Date of the direct cost as recorded in the accounting platform. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Currency of the direct cost. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Conversion rate between the currency of the direct costs and the base currency of the company. |
| **line-items** | `array` | An array of [directCostslineItems](datamodel-accounting-directcosts#direct-costs-line-items). |
| **payment-allocations** | `array` | An array of [paymentAllocations](datamodel-accounting-directcosts#payment-allocations). |
| **sub-total** | `integer` | The integer amount in pennies representing the the total amount of the direct costs, excluding any taxes. |
| **tax-amount** | `integer` | The integer amount in pennies representing the the total amount of tax on the direct costs. |
| **total-amount** | `integer` | The integer amount in pennies representing the the amount of the direct costs, inclusive of tax. |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |

## Direct costs line items

| Field | Type | Description |
| :- | :- | :- |
| **description** | `string` | Friendly name of the goods or services. |
| **unit-amount** | `integer` | The integer amount in pennies representing Price of each unit of goods or services.  <br>_Note_: If the platform does not provide this information, the unit amount will be mapped to the total amount. |
| **quantity** | `integer` | Number of units of goods or services received.  <br>  <br>_Note_: If the platform does not provide this information, the quantity will be mapped as 1. |
| **sub-total** | `integer` | The integer amount in pennies representing the amount of the line, inclusive of discounts but exclusive of tax. |
| **tax-amount** | `integer` | The integer amount in pennies representing the amount of tax for the line. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount of the line, including tax. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | Reference to the account to which the line item is linked. |
| **tax-rate-ref** | [Reference type](/data-model/accounting/reference-types#tax-rate-ref) | Reference to the tax rate to which the the line item is linked. |
| **item-ref** | [Reference type](/data-model/accounting/reference-types#item-ref) | Reference to the product, service type, or inventory item to which the direct cost is linked. |
| **tracking-category-refs** | `array` | Collection of [categories](/data-model/accounting/reference-types#tracking-category-ref) against which this direct cost is tracked. |

## Payment allocations

| Field | Type | Description |
| :- | :- | :- |
| payment |     |     |
| **id** | `string` | Identifier of the allocated payment. |
| **note** | `string` | Notes attached to the allocated payment. |
| **reference** | `string` | Reference to the allocated payment. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | The account that the allocated payment is made from or to. |
| **currency** | ([Currency](/data-model/shared/currency/)) | Currency the payment has been made in. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Conversion rate between the currency of the allocated payment and the currency of the company. |
| **paid-on-date** | `string` ([Date](/data-model/shared/date/)) | The date the payment was paid. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount that was paid. |
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