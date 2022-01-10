# Customers

Customers' data links to accounts receivable [invoices](/data-model/accounting/invoices).

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the customer, unique to the [business](/data-model/shared/business) in the accounting platform. |
| **customer-name** | `string` | Name of the customer as recorded in the accounting system, typically the company name. |
| **contact-name** | `string` | Name of the main contact for the identified customer. |
| **email-address** | `string` | Email address the customer can be contacted by. |
| **default-currency** | `string` ([Currency](/data-model/shared/currency/)) | Default currency the transactional data of the customer is recorded in. |
| **phone** | `string` | Phone number the customer can be contacted by. |
| **addresses** |     | An array of Addresses |
| **contacts** |     | An array of [Contacts](#contacts). |
| **registration-number** | `string` | Company number. In the UK, this is typically the Companies House company registration number. |
| **tax-number** | `string` | Company tax number. |
| **status** | `string` | Current state of the customer, either:  <br>\+ `Unknown`  <br>\+ `Active`  <br>\+ `Archived` |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date the record was last changed in the accounting system. |

## Addresses

| Field | Type | Description |
| :- | :- | :- |
| **type** | `string` | Type of the address, either:  <br>\+ `Unknown`  <br>\+ `Billing`  <br>\+ `Delivery` |
| **line1** | `string` | Line 1 of the customer address. |
| **line2** | `string` | Line 2 of the customer address. |
| **city** | `string` | City of the customer address. |
| **region** | `string` | Region of the customer address. |
| **country** | `string` | Country of the customer address. |
| **postal-code** | `string` | Postal code or zip code. |

## Contacts

| Field | Type | Description |
| :- | :- | :- |
| **name** | `string` | Name of a contact for a customer. |
| **email** | `string` | Email of a contact for a customer. |
| **phone** |     | An array of [Phone](#phone-numbers) numbers. |
| **address** |     | An array of [Addresses](#addresses). |
| **status** | `string` | Status of customer contacts, either:  <br>\+ `Active`  <br>\+ `Archived`  <br>\+ `Unknown`  <br>  <br>Customers can have multiple contacts. |

## Phone numbers

| Field | Type | Description |
| :- | :- | :- |
| **number** | `string` | Phone number for a customer contact. |
| **type** | `string` | Type of phone number, either:  <br>\+ `Primary`  <br>\+ `Landline`  <br>\+ `Mobile`  <br>\+ `Fax`  <br>\+ `Unknown` |

## Customer reference

Data types that reference a customer, for example invoices, credit notes and payments, use a [customer reference](/data-model/accounting/reference-types#customerref) that includes the ID and name of the linked customer.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the customer in the accounting platform. |
| **name** | `string` | Name of the customer in the accounting platform. |
<!-- 
## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
``` -->