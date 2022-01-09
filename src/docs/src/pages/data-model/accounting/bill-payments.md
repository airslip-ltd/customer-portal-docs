# Bill payments

<p class="description">Bill payments include all accounts payable transaction data. This includes bills and credit notes against bills.</p>

A bill payment in Airslip usually represents an allocation of money within any customer accounts payable account. This includes but is not strictly limited to:

- A payment made against a bill, like a credit card, cheque, or cash payment.
- An allocation of a supplier's credit note, either to a bill or maybe a refund.
- A bill payment made directly to that accounts payable account. This could be an overpayment or a prepayment. It might also be a refund of a payment made directly to an accounts payable account.

Depending on the bill payments allowed by the underlying accounting package, some of these types may be combined. Please see the Example data section for samples of what these cases would look like.

In Airslip, a bill payment contains details of:

- When the bill payment was recorded in the accounting system.
- How much it is for and in the currency.
- Who the payment has been paid to, the supplier.
- The types of bill payments, the line items.

Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's expenses.

Airslip doesn't have a separate data type for these so you'll see the itemised breakdown of the purchase in the Bills dataset and the corresponding payment here.

Bill payments is a child data type of account transactions.

> ## 👍🏼 
> Bill payments or payments?
>
> In Airslip, bill payments represent accounts payable only. For accounts receivable, see payments, which includes invoices and credit notes.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the bill payment, unique for the [business](/data-model/shared/business) in the accounting platform. |
| **supplier-ref** | [Reference types](/data-model/accounting/reference-types#supplier-ref) | [Supplier](#supplier-reference) against which the payment is recorded in the accounting platform. |
| **account-ref** | [Reference types](/data-model/accounting/reference-types#account-ref) | [account](/data-model/accounting/accounts/) the payment is linked to in the accounting platform. |
| **total-amount** | `integer` | The integer amount in pennies representing the amount of the payment in the payment currency. This value never changes and represents the amount of money that is paid into the supplier's account. |
| **currency** | `string` ([Currency](/data-model/shared/currency/)) | ISO currency code in which the bill payment is recorded in the accounting platform. |
| **currency-rate** | `decimal` ([Currency rate](/data-model/shared/currency-rate/)) | Rate to convert the total amount of the bill payment into the base currency for the [business](/data-model/shared/business), at the time of the payment. |
| **date** | `string` ([Date](/data-model/shared/date/)) | Date the bill payment was recorded in the accounting software. |
| **note** | `string` | Any additional information associated with the payment. |
| **payment-method-ref** | [Reference types](/data-model/accounting/reference-types#payment-method-ref) | [PaymentMethod](/data-model/accounting/payment-methods) the payment is linked to in the accounting platform. |
| **lines** |     | An array of [BillPaymentLines](#lines). |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |

### Supplier reference

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the supplier the payment is recorded against in the accounting platform. |
| **supplier-name** | `string` | Name of the supplier the payment is recorded against in the accounting platform. |

### Lines

A bill payment line is an allocation of the portion of the bill payment. The sum of the line amounts should be equal to the total amount.

| Field | Type | Description |
| :- | :- | :- |
| **amount** | `integer` | The integer amount in pennies representing the amount in the bill payment currency. |
| **links** |     | See [BillPaymentLineLink](#links). |


### Links

The allocations of the bill payment. The sum of the amount in links plus the line amount must be equal to zero.

| Field | Type | Description |
| :- | :- | :- |
| **type** | `string` | Types of links to bill payment lines, either:  <br>\+ `Unlinked` \- Not used  <br>  <br>\+ `Bill` \- ID refers to the bill that was paid  <br>  <br>\+ `CreditNote` \- ID refers to the credit note used payment  <br>  <br>\+ `Refund` \- ID refers to the sibling payment  <br>  <br>\+ `BillPayment` \- ID refers to the sibling payment  <br>  <br>\+ `PaymentOnAccount` \- ID refers to the supplier  <br>  <br>\+ `Other` \- Not currently supported by Airslip  <br>  <br>\+ `Discount` \- ID refers to the bill payment |
| **id** | `string` | Unique identifier of the transaction represented by the link. |
| **amount** | `integer` | The integer amount in pennies representing the amount by which the balance of the linked entity is altered, in the currency of the linked entity.  <br>\+ A negative link amount _reduces_ the outstanding amount on the accounts payable account.  <br>  <br>\+ A positive link amount _increases_ the outstanding amount on the accounts payable account. |
| **currency-rate** | `decimal` | Calculated as the amount of the bill payment allocated in the currency of the bill payment divided by the amount of the linked entity in the currency of the entity. When bill payment currencies and linked entity currencies are always the same, the **currencyRate** is `1`. |


> ❗
> 
> Requirements for reference fields
> 
> The [supplier reference](#supplier-reference) fields are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the suppliers data type for [**supplierRef**](#supplier-reference).

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```