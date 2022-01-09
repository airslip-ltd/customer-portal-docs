# Payments

Payments include all accounts receivable transaction data. This includes [invoices](/data-model/accounting/invoices) and [credit notes](/data-model/accounting/credit-notes).

A payment in Airslip usually represents an allocation of money within any customer accounts receivable account. This includes, but is not strictly limited to:

* A payment made against an invoice, like a credit card, cheque, or cash payment.
* An allocation of a customer's credit note, either to an invoice or maybe a refund.
* A payment made directly to that accounts receivable account. This might be an overpayment or a prepayment. It might also be the refund of a payment made directly to an accounts receivable account.

Depending on the payments allowed by the underlying accounting package, some payment types may be combined. Please see the [Example data](#example-data) below for more details.

In Airslip a payment contains details of:

* When the payment was recorded in the accounting system.
* How much it is for and in what currency that amount is in.
* Who the payment has been paid by, the _customer_.
* The breakdown of the types of payments, the _line items_.

> 
> Payments or bill payments?
> 
> In Airslip, payments represent accounts receivable only. For accounts payable, see [bill payments](/data-model/accounting/bill-payments). These include [bills](/data-model/accounting/bills) and credit notes against bills.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the payment, unique to the [business](/data-model/shared/business) in the accounting platform. |
| **customer-ref** | [customer-ref](/data-model/accounting/reference-types#customer-ref) | Customer the payment is recorded against in the accounting platform. |
| **account-ref** | [account-ref](/data-model/accounting/reference-types#customer-ref) | Account the payment is recorded against in the accounting platform. |
| **total-amount** | `integer` | The integer amount in pennies representing the amount of the payment in the payment currency. This value should never change and represents the amount of money paid into the customer's account. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | ISO currency code recorded for the payment in the accounting platform. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Rate to convert the total amount of the payment into the base currency for the [business](/data-model/shared/business) at the time of the payment. |
| **date** | `string` ([Date](/data-model/shared/date/)) | Date the payment was recorded in the accounting software. |
| **note** | `string` | Any additional information associated with the payment. |
| **lines** |     | An array of [PaymentLines](#payment-lines). |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |
| **reference** | `string` | Friendly reference for the payment. |

## Customer reference

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the customer that the payment is recorded against in the accounting platform. |
| **company-name** | `string` | Name of the customer that the payment is recorded against in the accounting platform. |

## Payment lines

A payment line is an allocation of the portion of the payment. The sum of the amount on the lines should be equal to the total Amount.

| Field | Type | Description |
| :- | :- | :- |
| **amount** | `integer` | The integer amount in pennies representing the amount in the payment currency. |
| **links** |     | See [PaymentLineLinks](#payment-links). |

## Payment links

The allocations of the payment. The sum of amount in links plus the line amount must be equal to zero.

| Field | Type | Description |
| :- | :- | :- |
| **type** | `string` | Types of payment line links, either:  <br>\+ `Unknown`  <br>  <br>\+ `Unlinked` \- Not used  <br>  <br>\+ `Invoice` \- ID refers to the invoice  <br>  <br>\+ `CreditNote` \- ID refers to the credit note  <br>  <br>\+ `Refund` \- ID refers to the sibling payment  <br>  <br>\+ `Payment` \- ID refers to the sibling payment  <br>  <br>\+ `PaymentOnAccount` \- ID refers to the customer  <br>  <br>\+ `Other` \- ID refers to the customer  <br>  <br>\+ `Manual Journal`  <br>  <br>\+ `Discount` \- ID refers to the payment |
| **id** | `string` | Unique identifier of the transaction represented by the link. |
| **amount** | `integer` | The integer amount in pennies representing the amount by which the balance of the linked entity is altered, in the currency of the linked entity.  <br>\+ A negative link amount _reduces_ the outstanding amount on the accounts receivable account.  <br>  <br>\+ A positive link amount _increases_ the outstanding amount on the accounts receivable account. |
| **currency-rate** | `decimal` | Calculated as the amount of the payment allocated in the currency of the payment divided by the amount of the linked entity in the currency of the entity. When payment currencies and linked entity currencies are the same, the **currencyRate** is `1`. |

> ### 🚧
> 
> Requirements for reference fields
> 
> The [customer reference](#customer-reference) fields are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the customers data type for [**customerRef**](#customer-reference).

## Payment types

### Payment of an invoice

A payment paying a single invoice has one entry in its `lines` array. This **line** has the following properties:

* An _amount_ that indicates the amount of the invoice that was paid. This is always positive.
* A **links** array containing one element with the following properties:
    * A **type** that indicates the type of **link**, in this case an `Invoice`.
    * An **id** that contains the ID of the invoice that was paid.
    * An amount for the link is `0` **totalAmount** or the amount of the payment allocated to the invoice.

The **amount** field on the **line** equals the **totalAmount** on the payment.

### Payment of multiple invoices

A single payment can pay multiple invoices. This can be represented in one of two formats depending on how the customer keeps their books:

* The payment has multiple entries in its **lines** array, one for each invoice that is paid. Each line follows the example and rules described in [Payment of an invoice](#payment-of-an-invoice).
* The payment has a line with multiple links to each invoice. This occurs when the proportion of the original payment allocated to each invoice is not available.

Each **line** has the same properties as those described in [Payment of an invoice](#payment-of-an-invoice), with the **amount** indicating how much of the payment was allocated to the invoice. The **amount** on lines equals the **totalAmount** on the payment.

### Payments and refunds on account

A payment on account, that is a payment that doesn’t pay a specific invoice, has one entry in its lines array. The **line** has the following properties:

* A **totalAmount** that indicates the amount paid by a customer or refunded to them by a company. A payment to the customer is always negative. A refund is always positive.
* A **links** array containing one element with the following properties:
* A **type** that indicates the type of link. For a payment this is `PaymentOnAccount`. For a refund this is `Refund`.
* The **id** containing the ID of the customer.
* An amount for the link is `0` \- **totalAmount** or the amount of the payment or refund.

It is possible to have a payment that is part on _account_ and part allocated to an invoice. Each line should follow the examples above.

### Using a credit note to pay an invoice

The payment of an invoice using a credit note has one entry in its **lines** array. This **line** has the following properties:

* An **amount** that indicates the amount of money moved, which in this case is `0`, as the credit note and invoice allocation must balance each other.
* A **links** array containing two elements:
    * The first **link** has:
        * A **type** that indicates the type of **link**, in this case an `Invoice`.
        * An **id** that contains the ID of the invoice that was paid.
    * The second **link** has:
        * A **type** that indicates the type of **link**, in this case a `CreditNote`.
        * An **id** that contains the ID of the credit note used by this payment.

The **amount** field on the **line** equals the **totalAmount** on the payment.

### Refunding a credit note

A payment refunding a credit note has one entry in its **lines** array. This **line** has the following properties:

* An **amount** that indicates the amount of the credit note that was refunded. This is always negative for a refund.
* A **links** array that contains one element with the following properties:
    * A **type** that indicates the type of **link**, in this case a `CreditNote`.
    * An **id** that contains the ID of the credit note that was refunded.

The **totalAmount** field on the payment equals the **amount** field of the **line**. These are both negative, as this is money leaving accounts receivable.

### Refunding a payment

If a payment is refunded, for example, if a customer overpaid an invoice and the overpayment is returned to the customer, there are two payment records:

* One for the incoming over payment.
* Another for the outgoing refund.

The payment issuing the refund has a negative **totalAmount**. This payment also has one entry in its lines array with the following properties:

* An **amount** that indicates the amount that was refunded. This is always negative.
* A **links** array that contains one element with the following properties:
    * A **type** that indicates the type of **link**, in this case a `Payment`.
    * An **id** that contains the ID of the payment that was refunded.

The **amount** field on the **line** equals the **totalAmount** on the payment and is negative, as this is money leaving accounts receivable.

The payment that was refunded has a line where the **amount** is positive and the type of the link is `Refund`. This payment may have several entries in its **lines** array if it was used to partly pay an invoice.

For example: A £1,050 payment on a £1,000 invoice with a refund of £50 has two lines:

* One for £1,000 linked to the invoice that was paid.
* Another for £50 linked to the payment that refunded the overpayment with a **type** of `Refund` and an ID that corresponds to the payment.

The **line** linked to the payment has the following properties:

* An **amount** that indicates the amount that was refunded. This is positive as its money that was added to accounts receivable. Its balanced out by the negative amount of the refund.
* A **links** array containing one element with the following properties:
    * A **type** that indicates the type of **link**, in this case a `Refund`.
    * An **id** that contains the ID of the payment that refunded this line.

> 
> Support for linked payments
> 
> Not all accounting packages support linking payments in this way. In some platforms, you may see a payment on account and a refund on account.

## Foreign currencies

There are two types of currency rate that are included in the payments data type:

Payment currency rate:

* Base currency of the accounts receivable account.
* Foreign currency of the payment.

Payment line link currency rate:

* Base currency of the item the link represents.
* Foreign currency of the payment.

These two rates allow the calculation of currency loss or gain for any of the transactions affected by the payment lines. The second rate is used when a payment is applied to an item in a currency that doesn't match either:

* The base currency for the accounts receivable account.
* The currency of the item.
