# Bills

<p class="description">A bill is an itemized record of goods purchased from or services provided by a supplier.</p>

In Airslip, a bill contains details of:

When the bill was recorded in the accounting system.
How much the bill is for and the currency of the amount.
Who the bill was received from — the supplier.
What the bill is for — the line items.
Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's expenses.

Airslip doesn't have a separate data type for these, so you'll see the itemized breakdown of the purchase here and the corresponding payment in the Bill payments dataset. The payment information will also be populated on the bill's paymentAllocations if you've synchronized bill payments for the company.

> ## 👍🏼 
> 
> Invoices or bills?
> 
> In Airslip, bills are for accounts payable only. For the accounts receivable equivalent of bills, see [Invoices](/data-model/accounting/invoices).

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the bill, unique for the [business](/data-model/shared/business) in the accounting platform. |
| **reference** | `string` | User-friendly reference for the bill. |
| **supplier-ref** | [Reference type](/data-model/accounting/reference-types#supplier-ref) | Reference to the [supplier](/data-model/accounting/suppliers) the bill was received from. |
| **purchase-order-refs** | `array` | List of references to the purchase orders for which the bill was issued. |
| **issue-date** | `string` ([Date](/data-model/shared/date/)) | Date of the bill as recorded in the accounting platform. |
| **due-date** | `string` ([Date](/data-model/shared/date/)) | Date the supplier is due to be paid. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Currency of the bill. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Rate for converting the total amount of the bill into the base currency for the [business](/data-model/shared/business). |
| **line-items** | `array` | Array of [BillLineItems](#line-items). |
| **status** | `string` | Current state of the bill, either:  <br>  <br>\+ `Draft` — Bill is yet to be authorized and sent by the supplier, and will not be used in any reports. It may contain incomplete line items.  <br>  <br>\+ `Open` — Bill is no longer a draft. It has been processed and/or sent to the supplier. In this state, it will impact the ledger. It also has no payments made against it (amountDue == totalAmount).  <br>  <br>\+ `PartiallyPaid` — The balance paid against the bill is positive, but less than the total bill amount (0 < amountDue < totalAmount).  <br>  <br>\+ `Paid` — Bill is paid in full. This includes if the bill has been credited or overpaid. (amountDue == 0).  <br>  <br>\+ `Void` — A Bill can become `Void` by being deleted, refunded, written off, or cancelled. A voided bill may still be partially paid and so all outstanding amounts on voided bills are removed from the accounts payable account.  <br>  <br>\+ `Unknown` |
| **sub-total** | `integer` | The integer amount in pennies representing the total amount of the bill, excluding any taxes. |
| **tax-amount** | `integer` | The integer amount in pennies representing the amount of tax on the bill. |
| **total-amount** | `integer` | The integer amount in pennies representing the amount of the bill, including tax. |
| **amount-due** | `integer` | The integer amount in pennies representing the amount outstanding on the bill. |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |
| **note** | `string`| Any private, company notes about the bill, such as payment information. |
| **payment-allocations** | `array` | An array of [paymentAllocations](datamodel-accounting-bills#payment-allocations). |

### Line items


| Field | Type | Description |
| :- | :- | :- |
| **description** | `string`| Friendly name of the goods or services received. |
| **unit-amount** | `integer` | The integer amount in pennies representing Price of each unit of goods or services. |
| **quantity** | `integer` | Number of units of goods or services received. |
| **discount-amount** | `integer` | The integer amount in pennies representing Numerical value of any discounts applied. |
| **sub-total** | `integer` | The integer amount in pennies representing the amount of the line, inclusive of discounts but exclusive of tax. |
| **tax-amount** | `integer` | The integer amount in pennies representing the amount of tax for the line. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount of the line, including tax. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | Reference to the [account](/data-model/accounting/accounts/) to which the line item is linked. |
| **discount-percentage** | `decimal` | Percentage rate (from 0 to 100) of any discounts applied to the unit amount. |
| **tax-rate-ref** | [Reference type](/data-model/accounting/reference-types#tax-rate-ref) | Reference to the [tax rate](/data-model/accounting/tax-rates) to which the line item is linked. |
| **item-ref** | [Reference type](/data-model/accounting/reference-types#item-ref) | Reference to the product, service type, or inventory item to which the line item is linked. |
| **tracking-category-refs** | `array` | Collection of [categories](/data-model/accounting/tracking-categories) against which this item is tracked. |

### Payment allocations

| Field | Type | Description |
| :- | :- | :- |
| **payment** |     |     |
| **id** | `string` | Identifier of the allocated payment. |
| **note** | `string` | Notes attached to the allocated payment. |
| **reference** | `string` | Reference to the allocated payment. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | The account that the allocated payment is made from or to. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Currency the payment has been made in. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Conversion rate between the currency of the allocated payment and the currency of the company. |
| **paid-on-date** | `string` ([Date](/data-model/shared/date/)) | The date the payment was paid. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount that was paid. |
| **allocation** |     |     |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | The currency of the transaction. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Conversion rate between the currency of the allocated payment and the currency of the transaction. |
| **allocated-on-date** | `string` ([Date](/data-model/shared/date/)) | The date the payment was allocated. |
| **total-amount** | `integer` | The integer amount in pennies representing the the total amount that has been allocated. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```