# Purchase orders

Purchase orders represent a business's intent to purchase goods or services from a supplier and normally include information such as expected delivery dates and shipping details.

This information can be used to provide visibility on a business's expected payables and to track a purchase through the full procurement process.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the purchase order, unique for the [business](/data-model/shared/business) in the accounting platform. |
| **purchase-order-number** | `string` | Friendly reference for the purchase order, commonly generated by the accounting platform. |
| **issue-date** | `string` ([Date](/data-model/shared/date/)) | Date of the purchase order as recorded in the accounting platform. |
| **delivery-date** | `string` ([Date](/data-model/shared/date/)) | Actual delivery date for any goods that have been ordered. |
| **expected-delivery-date** | `string` ([Date](/data-model/shared/date/)) | Expected delivery date for any goods that have been ordered. |
| **payment-due-date** | `string` ([Date](/data-model/shared/date/)) | Date the supplier is due to be paid. |
| **note** | `string` | Any additional information associated with the purchase order. |
| **supplier-ref** | [supplier-ref](/data-model/accounting/reference-types#supplierref) | Supplier that the purchase order is recorded against in the accounting system. |
| **ship-to** | [ShipTo](#ship-to) | Delivery details for any goods that have been ordered. |
| **status** | `string` | Current state of the purchase order, either:  <br>`Draft`  <br>`Open`  <br>`Closed`  <br>`Void`  <br>`Unknown` |
| **currency** | `string` | Currency of the purchase order.  <br>([Currency](/data-model/shared/currency/)) |
| **currency-rate** | `decimal` | Rate for converting the total amount of the purchase order into the base currency for the company. ([Currency rate](/data-model/shared/currency-rate)) |
| **line-items** | Array of [PurchaseOrderLineItems](#lines) |     |
| **total-discount** | `integer` | The integer amount in pennies representing the total value of any discounts applied to the purchase order. |
| **sub-total** | `integer` | The integer amount in pennies representing the total amount of the purchase order, including discounts but excluding tax. |
| **total-tax-amount** | `integer` | The integer amount in pennies representing the total amount of tax included in the purchase order. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount of the purchase order, including discounts and tax. |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the purchase order was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the purchase order was last changed in the accounting system. |

## Lines

| Field | Type | Description |
| :- | :- | :- |
| **description** | `string` | Description of the goods / services that have been ordered. |
| **account-ref** | [account-ref](/data-model/accounting/reference-types#account-ref) | Reference to the account to which the line item is linked. |
| **tracking-category-refs** | Array of [tracking-category-refs](/data-model/accounting/reference-types#tracking-category-ref) | Reference to the tracking categories to which the line item is linked. |
| **unit-amount** | `integer` | The integer amount in pennies representing Price of each unit. |
| **quantity** | `integer` | Number of units that have been ordered. |
| **discount-amount** | `integer` | The integer amount in pennies representing Value of any discounts applied. |
| **discount-percentage** | `decimal` | Percentage rate (from 0 to 100) of any discounts applied to the unit amount. |
| **sub-total** | `integer` | The integer amount in pennies representing the amount of the line, inclusive of discounts but exclusive of tax. |
| **tax-amount** | `integer` | The integer amount in pennies representing the amount of tax for the line. |
| **tax-rate-ref** | [tax-rate-ref](/data-model/accounting/reference-types#tax-rate-ref) | Reference to the tax rate to which the line item is linked. |
| **total-amount** | `integer` | The integer amount in pennies representing the total amount of the line, inclusive of discounts and tax. |

## ShipTo

| Field | Type | Description |
| :- | :- | :- |
| **contact** | [PurchaseOrderContact](#purchase-order-contact) | Details of the named contact at the delivery address. |
| **address** | Address | Delivery address for any goods that have been ordered. |

### PurchaseOrderContact

| Field | Type | Description |
| :- | :- | :- |
| **name** | `string` | Name of the contact at the delivery address. |
| **email** | `string` | Email address of the contact at the delivery address. |
| **phone** | `string` | Phone number of the contact at the delivery address. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```