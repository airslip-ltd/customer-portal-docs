# Suppliers

A supplier is a person or organisation that provides a product or service. From the Suppliers endpoints, you can retrieve a list of all the suppliers for a company. Suppliers' data links to accounts payable [bills](/data-model/accounting/bills).

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the supplier, unique to the [business](/data-model/shared/business) in the accounting platform. |
| **supplier-name** | `string` | Name of the supplier as recorded in the accounting system, typically the company name. |
| **contact-name** | `string` | Name of the main contact for the supplier. |
| **email-address** | `string` | Email address that the supplier may be contacted on. |
| **phone** | `string` | Phone number that the supplier may be contacted on. |
| **addresses** |     | An array of Addresses |
| **registration-number** | `string` | Company number of the supplier. In the UK, this is typically the company registration number issued by Companies House. |
| **tax-number** | `string` | Supplier's company tax number. |
| **default-currency** | `string` ([Currency](/data-model/shared/currency/)) | Default currency the supplier's transactional data is recorded in. |
| **status** | `string` | Status of the supplier,either:  <br>\+ `Unknown`  <br>\+ `Active`  <br>\+ `Archived` |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |

## Addresses

| Field | Type | Description |
| :- | :- | :- |
| **type** | `string` | Type of the address, either:  <br>\+ `Unknown`  <br>\+ `Billing`  <br>\+ `Delivery` |
| **line1** | `string` | Line 1 of the supplier address. |
| **line2** | `string` | Line 2 of the supplier address. |
| **city** | `string` | City address of the supplier. |
| **region** | `string` | Regional address of the supplier. |
| **country** | `string` | Country address of the supplier. |
| **postal-code** | `string` | Postal code or zip code. |

## Supplier reference

Data types that reference a supplier, for example bills and bill payments, use a **supplierRef** that includes the ID and name of the linked supplier.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the supplier in the accounting platform. |
| **name** | `string` | Name of the supplier in the accounting platform. |
<!-- 
## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
``` -->