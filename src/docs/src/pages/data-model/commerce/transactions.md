# Transaction

<p class="description">The transaction data type provides information relating to the sale for e-commerce and in-store.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | transaction id provided by the provider |
| **date** | `string` ([Date](/data-model/shared/date/)) | Time at which the transaction took place |
| **bank-statement-description** | `string` | The exact text that will appear on the transactions bank statement |
| **bank-statement-suffix** | `string` | Provides unique information about the charge that customers see on their statements, such as invoice number |
| **store-location-id** | `string` | The identification number of the store |
| **store-address** | `string` | The complete store address on one line |
| **line-items** |[LineItem](#line-item) | An array of [LineItem](#line-item) |
| **is-e-commerce** | `boolean` | If this transaction was made online it would be true, in-store is false |
| **subtotal** | `integer` | The integer amount in pennies representing the total amount of the transaction, excluding vat and all discount |
| **service-charge** | `integer` | The integer amount in pennies representing the total service charge |
| **discounts** | [Discount](#discount) | An array of  [Discount](#discount). The total reduction on the original priced transaction |
| **vat-rates** | [VatRate](#vat-rate) | An array of [VatRate](#vat-rate). The VAT amount of the transaction along with its rate |
| **total** | `integer` | The integer amount in pennies representing the total amount of the transaction, including vat and all discount |
| **currency&#8209;code** | `string` | The currency code in [ISO-4217](#https://www.iso.org/iso-4217-currency-codes.html) format | 
| **customer-email** | `string` | The email of the customer |
| **operator-name** | `string` | The name of the cashier who has served the customer |
| **transaction-detail** | [TransactionDetail](#transaction-detail) | Further properties about the in-store transaction. Often used to generate a barcode |
| **payment-details** | [PaymentDetail](#payment-detail) | An array of [PaymentDetail](#payment-detail) |
| **metadata** | `dictionary` | Any additional key-value pairs |

### Line Item

| Field | Type | Description |
| :- | :- | :- |
| **name** | `string` | The name of the product |
| **code** | `string` | The item code |
| **product-id** | `string` | The id of the product if available |
| **description** | `string` | The longer description for the item |
| **sub-total** | `string` | Total of all items before discounts or taxes are applied |
| **total** | `string` | Total of all items after discounts and taxes are applied |
| **quantity** | `string` | The total number of items purchased |
| **warranty-expiry-date** | `string` ([Date](/data-model/shared/date/)) | Date the warranty expires |
| **image-url** | `string` | The item image URL |
| **url** | `string` | A URL of a publicly-accessible webpage for this product |
| **sku** | `string` | The internal identification number assigned to each product and their variants |
| **vat-rates** | [VatRate](#vat-rate) | An array of [VatRate](#vat-rate) for the item |
| **metadata** | `dictionary` | Any additional key-value pairs |

### Discount

| Field | Type | Description |
| :- | :- | :- |
| **name** | `string` | The name of the discount |
| **amount** | `integer` | The integer amount in pennies representing the total amount of discount |

### VAT Rate

| Field | Type | Description |
| :- | :- | :- |
| **code** | `string` | The tax code |
| **rate** | `decimal` | The tax rate from 0-100 |
| **amount** | `integer` | The integer amount in pennies representing the total amount of VAT |

### Transaction Detail

| Field | Type | Description |
| :- | :- | :- |
| date | `string` ([Date](/data-model/shared/date/)) | The date at which the transaction was created, in standard [ISO 8601](#https://www.iso.org/iso-8601-date-and-time-format.html) format |
| time | `string` | The time of this transaction, in hh:mm:ss format |
| till | `string` | The number of the till in the store |
| number | `string` | The transaction number. Usually the count of the day's transactions |
| store | `string` | The unique reference of the store |

### Payment Detail

| Field | Type | Description |
| :- | :- | :- |
| method | `string` | The method of payment |
| amount | `integer` | The integer amount in pennies representing the total amount for the payment method |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```