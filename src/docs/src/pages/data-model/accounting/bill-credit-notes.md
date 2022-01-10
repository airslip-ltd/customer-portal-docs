# Bill credit notes

<p class="description">A bill credit note is issued by a supplier for the purpose of recording credit. For example, if a supplier was unable to fulfil an order that was placed by a business, or delivered damaged goods, they would issue a bill credit note. A bill credit note reduces the amount a business owes to the supplier. It can be refunded to the business or used to pay off future bills.<p>

In the Airslip API, a bill credit note is an accounts payable record issued by a [supplier](/data-model/accounting/suppliers).

A bill credit note includes details of:

- The original and remaining credit.
- Any allocations of the credit against other records, such as [bills](/data-model/accounting/bills).
- The supplier that issued the bill credit note.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the bill credit note that is unique to a [business](/data-model/shared/business) in the accounting platform. |
| **bill-credit-note-number** | `string` | Friendly reference for the bill credit note. |
| **supplier-ref** | [Reference type](/data-model/accounting/reference-types#supplier-ref) | [Supplier](/data-model/accounting/suppliers) that issued the bill credit note. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount of credit that has been applied to the business' account with the [supplier](/data-model/accounting/suppliers), including discounts and tax. |
| **total-discount** | `integer` | The integer amount in pennies representing the total value of any discounts applied. |
| **sub-total** | `integer` | The integer amount in pennies representing the total amount of the bill credit note, including discounts but excluding tax. |
| **total-tax-amount** | `integer` | The integer amount in pennies representing the amount of tax included in the bill credit note. |
| **discount-percentage** | `decimal` | Percentage rate of any discount applied to the bill credit note. |
| **remaining-credit** | `integer` | The integer amount in pennies representing the amount of the bill credit note that is still outstanding. |
| **status** | `string` | Current state of the bill credit note, either:  <br>\+ `Draft` \- Not yet confirmed in the accounting system  <br>  <br>\+ `Submitted` \- Confirmed and with an outstanding balance  <br>  <br>\+ `Paid` \- Allocated or refunded in full  <br>  <br>\+ `Void` \- Invalid or void |
| **issue-date** | `string` ([Date](/data-model/shared/date/)) | Date the bill credit note was issued by the [supplier](/data-model/accounting/suppliers). |
| **allocated-on-date** | `string` ([Date](/data-model/shared/date/)) | Date the bill credit note was fully refunded or allocated. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Currency of the bill credit note. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Conversion rate between the currency of the bill credit note and the base currency of the [business](/data-model/shared/business). |
| **line-items** |     | An array of [BillCreditNoteLineItems](#line-items). |
| **payment-allocations** |     | An array of [CreditNotePaymentAllocations](#payment-allocations). |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **sourceModified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the accounting system. |
| **note** | `string` | Any additional information about the bill credit note. |

###  Line items

Details of each line of the bill credit note.

| Field | Type | Description |
| :- | :- | :- |
| **description** | `string` | Friendly name of each line item. For example, the goods or service for which credit has been received. |
| **unit-amount** | `integer` | The integer amount in pennies representing the unit price of the goods or service. |
| **quantity** | `integer` | Number of units of the goods or service for which credit has been received. |
| **discount-amount** | `integer` | The integer amount in pennies representing the value of any discounts applied. |
| **sub-total** | `integer` | The integer amount in pennies representing the amount of credit associated with the line item, including discounts but excluding tax. |
| **tax-amount** | `integer` | The integer amount in pennies representing the amount of tax associated with the line item. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount of the line item, including discounts and tax. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | Reference to the [account](/data-model/accounting/accounts/) to which the line item is linked. |
| **discount-percentage** | `decimal` | Percentage rate of any discount applied to the line item. |
| **tax-rate-ref** | [Reference type](/data-model/accounting/reference-types#tax-rate-ref) | Reference to the [tax rate](/data-model/accounting/tax-rates) to which the line item is linked. |
| **tracking-category-refs** | [Reference type](/data-model/accounting/reference-types#tracking-category-ref) | Reference to the [tracking categories](/data-model/accounting/tracking-categories) to which the line item is linked. |

### Payment allocations


| Field | Type | Description |
| :- | :- | :- |
| payment |     |     |
| **id** | `string` |     |
| **note** | `string` |     |
| **reference** | `string` |     |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref)
| **currency** | `string` ([Currency](/data-model/shared/currency/)) |     |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) |     |
| **paid-on-date** | `string` ([Date](/data-model/shared/date/)) |     |
| **total-amount** | `integer` | The integer amount in pennies representing the total payment amount. |
| allocation |     |     |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) |     |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) |     |
| **allocated-on-date** | `string` ([Date](/data-model/shared/date/)) |     |
| **total-amount** | `integer` | The integer amount in pennies representing the total allocated amount. |
<!-- 
## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
``` -->