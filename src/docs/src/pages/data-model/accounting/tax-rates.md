# Tax rates

Accounting systems typically store a set of taxes and associated rates within the accounting package. This means that users don't have to look up or remember the rates for each type of tax. For example: Applying the tax "UK sales VAT" to line items of an invoice adds the correct rate of 20%.

## Tax components

In some cases, a tax is made up of multiple sub taxes, often called _components_ of the tax. For example: You may have an item that is charged a tax rate called "City import tax (8%)" that has two components:

- A city tax of 5%.
- An import tax of 3%.

> 
> Effective tax rates
> 
> * Where there are multiple components of a tax, each component may be calculated on the original amount and added together. Alternatively, one tax may be calculated on the sub-total of the original amount plus another tax, which is referred to as _compounding_. When there is compounding, the effective tax rate is the rate that, if applied to the original amount, would result in the total amount of tax with compounding.
> 
> **Example:**
> 
> A tax has two components. Both components have a rate of 10%, and one component is compound. In this case, there is a total tax rate of 20% but an effective tax rate of 21%. [Also see _Compound tax example_](#compound-tax-example).
> 
> * For QuickBooks Online, Airslip doesn't use compound rates. Instead, the calculated effective tax rate for each component is shown. This means that the effective and total rates are the same because the total tax rate is a sum of the component rates.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the tax rate, unique for the [business](/data-model/shared/business) in the accounting platform. |
| **name** | `string` | Name of the tax rate in the accounting platform. |
| **code** | `string` | Code for the tax rate from the accounting platform. |
| **effective-tax-rate** | `decimal` | See _Effective tax rates_ description in the [Tax components](#Tax_components). |
| **total-tax-rate** | `decimal` | Total (not compounded) sum of the components of a tax rate. |
| **components** |     | A tax rate can be made up of multiple sub taxes, often called components of the tax. These are shown in the [TaxRateComponents](#components) array. |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |

### Components

A tax rate can be made up of multiple sub taxes, often called components of the tax.

| Field | Type | Description |
| :- | :- | :- |
| **name** | `string` | Name of the tax rate component. |
| **rate** | `decimal` | The rate of the tax rate component, usually a percentage. |
| **is-compound** | `boolean` | For QuickBooks Online the calculated effective tax rate for each component is shown. |

### Tax rate reference

Data types that reference a tax rate, for example invoice and bill line items, use a **tax-rate-ref** that includes the ID and name of the linked tax rate.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the tax rate in the accounting platform. |
| **name** | `string` | Name of the tax rate in the accounting platform. |
<!-- 
## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
``` -->