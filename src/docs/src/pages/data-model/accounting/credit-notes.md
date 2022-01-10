# Credit notes

Think of a credit note as a voucher issued to a customer. It is a reduction that can be applied against one or multiple invoices. A credit note can either reduce the amount owed or cancel out an invoice entirely.

In the Airslip system a credit note is issued to a [customer's](/data-model/accounting/customers) accounts receivable.

It contains details of:

* The amount of credit remaining and its status.
* Payment allocations against the payments type, in this case an invoice.
* Which customers the credit notes have been issued to.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the credit note, unique to the [business](/data-model/shared/business) in the accounting platform. |
| **credit-note-number** | `string` | Friendly reference for the credit note. |
| **customer-ref** | [Reference type](/data-model/accounting/reference-types#customer-ref) | Reference to the [customer](/data-model/accounting/customers) the credit note has been issued to. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount of credit that has been applied to the [customer's](/data-model/accounting/customers) accounts receivable. |
| **total-discount** | `integer` | The integer amount in pennies representing the any discounts applied to the credit note amount. |
| **sub-total** | `integer` | The integer amount in pennies representing Value of the credit note, including discounts and excluding tax. |
| **total-tax-amount** | `integer` | The integer amount in pennies representing the any tax applied to the credit note amount. |
| **discount-percentage** | `decimal` | Percentage rate (from 0 to 100) of discounts applied to the credit note. |
| **remaining-credit** | `integer` | The integer amount in pennies representing Unused balance of totalAmount originally raised. |
| **status** | `string` | Current state of a credit note, either:  <br>\+ `Draft`  <br>\+ `Submitted`  <br>\+ `Paid`  <br>\+ `PartiallyPaid`  <br>\+ `Void` |
| **issue-date** | `string` ([Date](/data-model/shared/date/)) | Date of the credit note as recorded in the accounting system. |
| **allocated-on-date** | `string` ([Date](/data-model/shared/date/)) | Date on which the credit note was fully allocated. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Currency of the credit note. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Rate between the currency of the credit note and the base currency of the [business](/data-model/shared/business). |
| **line-items** |     | An array of [CreditNoteLineItems](#line-items). |
| **payment-allocations** |     | An array of [CreditNotePaymentAllocations](#payment-allocations). |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |
| **note** | `string` | Any additional information about the credit note. Where possible, Airslip links to a data field in the accounting platform that is publicly available. This means that the contents of the **note** field are included when a credit note is emailed from the accounting platform to the customer. |

### 

## Line items

| Field | Type | Description |
| :- | :- | :- |
| **description** | `string` | Friendly name of each line item. For example, the goods or service for which credit has been issued. |
| **unit-amount** | `integer` | The integer amount in pennies representing Unit price of the goods or service. |
| **quantity** | `integer` | Number of units of the goods or service for which credit has been issued. |
| **discount-amount** | `integer` | The integer amount in pennies representing Value of any discounts applied. |
| **sub-total** | `integer` | The integer amount in pennies representing the amount of credit associated with the line item, including discounts but excluding tax. |
| **tax-amount** | `integer` | The integer amount in pennies representing the amount of tax associated with the line item. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount of the line item, including discounts and tax. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | Reference to the [account](/data-model/accounting/accounts/) to which the line item is linked. |
| **discount-percentage** | `decimal` | Percentage rate of any discount applied to the line item. |
| **tax-rate-ref** | [Reference type](/data-model/accounting/reference-types#tax-rate-ref) | Reference to the [tax rate](/data-model/accounting/tax-rates) to which the line item is linked. |
| **tracking-category-ref** | [Reference type](/data-model/accounting/reference-types#tracking-category-ref) | Reference to the [tracking categories](/data-model/accounting/tracking-categories) to which the line item is linked. |

## Payment allocations

| Field | Type | Description |
| :- | :- | :- |
| payment |     |     |
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
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | The conversion rate between the currency of the allocated payment and the currency of the transaction. |
| **allocated-on-date** | `string` ([Date](/data-model/shared/date/)) | The date the payment was allocated. |
| **total-amount** | `integer` | The integer amount in pennies representing the the total amount that has been allocated. |

> 
> Changes to `paymentAllocation` object on Invoices
> 
> The data model presented above for `paymentAllocations` reflects the new object model for `paymentAllocations`, implemented December 13, 2021.  
> Clients onboarded prior to this date will continue to see the legacy `paymentAllocations` until April 11, 2022.  
> See related [Changelog entry](/changelog/21221-change-paymentallocations-object-model) for more information.

> ### 🚧
> 
> Requirements for reference fields
> 
> Reference fields are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the customers data type for **[customerRef](/data-model/accounting/reference-types#customer-ref)**.
<!-- 
## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
``` -->