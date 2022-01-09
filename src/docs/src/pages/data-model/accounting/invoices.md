# Invoices

An invoice is an itemised record of goods sold or services provided to a [customer](/data-model/accounting/customers).

In Airslip, an invoice contains details of:

* The timeline of the invoice - when it was raised, marked as paid, last edited, and so on.
* How much the invoice is for, what portion is tax or discounts, and what currency the amounts are represented in.
* Who the invoice has been raised to - the _customer_.
* The breakdown of what the invoice is for - the _line items_.
* Any [payments](/data-model/accounting/payments) assigned to the invoice - the _payment allocations_.

> 
> Invoices or bills?
> 
> In Airslip, invoices represent accounts receivable only. For accounts payable invoices, see [Bills](/data-model/accounting/bills).

> 
> Invoice PDF downloads
> 
> You can [download a PDF version](https://api.codat.io/swagger/index.html#/Invoices/get_companies__companyId__data_invoices__invoiceId__pdf) of an invoice for supported integrations.
> 
> The filename will be invoice-{number}.pdf.

## Data model

> 
> Referencing an invoice in Sage 50 and ClearBooks
> 
> In Sage 50 and ClearBooks, you may prefer to use the **invoiceNumber** to identify an invoice rather than the invoice **id**. Each time a draft invoice is submitted or printed, the draft **id** becomes void and a submitted invoice with a new **id** exists in its place. In both platforms, the **invoiceNumber** should remain the same.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the invoice, unique to the [business](/data-model/shared/business) in the accounting platform. |
| **invoice-number** | `string` | Friendly reference for the invoice. If available, this appears in the file name of invoice attachments. |
| **customer-ref** | [Reference type](/data-model/accounting/reference-types#customer-ref) | Reference to the [customer](/data-model/accounting/customers) the invoice has been issued to. |
| **issue-date** | `string` ([Date](/data-model/shared/date/)) | Date of the invoice as recorded in the accounting system. |
| **due-date** | `string` ([Date](/data-model/shared/date/)) | Date the customer is due to be paid by. |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |
| **paid-on-date** | `string` ([Date](/data-model/shared/date/)) | Date the invoice was marked as paid in the accounting system. If this field is not available from the accounting software, it is calculated by Airslip using associated payments. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | Currency of the invoice. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Rate between the currency of the invoice and the base currency of the [business](/data-model/shared/business). |
| **line-items** |     | An array of [InvoiceLineItems](#line-items). |
| **payment-allocations** |     | An array of [InvoicePaymentAllocation](#payment-allocations). |
| **total-discount** | `integer` | The integer amount in pennies representing Numerical value of discounts applied to the invoice. |
| **sub-total** | `integer` | The integer amount in pennies representing the total amount of the invoice excluding any taxes. |
| **total-tax-amount** | `integer` | The integer amount in pennies representing the amount of tax on the invoice. |
| **total-amount** | `integer` | The integer amount in pennies representing the amount of the invoice, inclusive of tax. |
| **amount-due** | `integer` | The integer amount in pennies representing the amount outstanding on the invoice. |
| **discount-percentage** | `decimal` | Percentage rate (from 0 to 100) of discounts applied to the invoice. For example: A 5% discount will return a value of `5`, not `0.05`. |
| **status** | `string` | Current state of the invoice:  <br>\+ `Draft` \- Invoice hasn't been submitted to the supplier. It may be in a pending state or is scheduled for future submission, for example by email.  <br>  <br>\+ `Submitted` \- Invoice is no longer a draft. It has been processed and, or, sent to the customer. In this state, it will impact the ledger. It also has no payments made against it (**amount-due** == **totalAmount**).  <br>  <br>\+ `PartiallyPaid` \- The balance paid against the invoice is positive, but less than the total invoice amount (0 < **amount-due** < **totalAmount**).  <br>  <br>\+ `Paid` \- Invoice is paid in full. This includes if the invoice has been credited or overpaid  <br>(**amountDue** == 0).  <br>  <br>\+ `Void` \- An invoice can become `Void` when it's deleted, refunded, written off, or cancelled. A voided invoice may still be `PartiallyPaid`, and so all outstanding amounts on voided invoices are removed from the accounts receivable account. |
| **note** | `string` | Any additional information about the invoice. Where possible, Airslip links to a data field in the accounting platform that is publicly available. This means that the contents of the **note** field are included when an invoice is emailed from the accounting platform to the customer. |

## Line items

| Field | Type | Description |
| :- | :- | :- |
| **description** | `string` | Friendly name of the goods or services provided. |
| **unit-amount** | `integer` | The integer amount in pennies representing Price of each unit of goods or services. |
| **quantity** | `integer` | Number of units of goods or services provided. |
| **discount-amount** | `integer` | The integer amount in pennies representing Numerical value of any discounts applied. |
| **sub-total** | `integer` | The integer amount in pennies representing the amount of the line, inclusive of discounts but exclusive of tax. |
| **tax-amount** | `integer` | The integer amount in pennies representing the amount of tax for the line. |
| **totalAmount** | `integer` | The integer amount in pennies representing the total amount of the line, including tax. When pushing invoices to Xero, the total amount is exclusive of tax to allow automatic calculations if a tax rate or tax amount is not specified. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | Reference to the [account](/data-model/accounting/accounts/) to which the line item is linked. |
| **discount-percentage** | `decimal` | Percentage rate (from 0 to 100) of any discounts applied to the unit amount. |
| **tax-rate-ref** | [Reference type](/data-model/accounting/reference-types#tax-rate-ref) | Reference to the [tax rate](/data-model/accounting/tax-rates) to which the line item is linked. |
| **tracking-category-refs** | [Reference type](/data-model/accounting/reference-types#tracking-category-ref) | Reference to the [tracking categories](/data-model/accounting/tracking-categories) to which the line item is linked. |

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

> 
> Requirements for reference fields
> 
> The reference fields **customerRef**, **account-ref**, and **taxRateRef** are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the customers data type for [customerRef](/data-model/accounting/reference-types#customer-ref).

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```