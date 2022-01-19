# Inventory

<p class="description">The Inventory data type provides the businesses product inventory. Includes the description, amount, quantity and available for sale. This can be used to identify inventory monetary value.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | A generated identifier for the product |
| **name** | `string` | The name of the product |
| **code** | `string` | The product code |
| **description** | `string` | The longer description for the item |
| **total** | `integer` | Total price of product |
| **state** | `string` | Fixed values of State |
| **is-vat-enabled** | `boolean` | Flag if tax is enabled |
| **vat-rate** | `string` | The tax rate from 0-100 |
| **dimensions** | `string` | The height, width and depth for this product |
| **release-date** | `string` ([Date](/data-model/shared/date/)) | Date the product was released |
| **shippable** | `boolean` | Whether this product is shipped (i.e., physical goods) |
| **created-date** | `string` ([Date](/data-model/shared/date/)) | Time at which the object was created |

### State

- Active
- Inactive

## Example data

```json
{
  "id": "ca9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
  "name": "Amazing Toothpaste",
  "code": "T123",
  "description": "A description about a product",
  "total": 1299,
  "state": "Active",
  "is-vat-enabled": false,
  "vat-rate": "20",
  "release-date": "2021-03-31T12:45:01Z",
  "shippable": false,
  "created-date": "2022-01-10T14:57:43Z",
}
```