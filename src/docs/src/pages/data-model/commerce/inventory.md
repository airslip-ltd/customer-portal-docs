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
  "property-to-go-here": "value-to-go-here"
}
```