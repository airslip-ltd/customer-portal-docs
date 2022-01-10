# Business

<p class="description">Information on the business to help validate the legitimacy of the connected business.</p>

## Data model

Information on the business to help validate the legitimacy of the connected business.

| Field | Type | Description |
| :-  | :- | :- |
| **id** | `string` | A generated identifier for the business |
| **name** | `string` | Trading name of the business |
| **legal-name** | `string` | The registered legal name of the business |
| **address** | `string` | The registered legal address of the business |
| **website-url** | `string` | Domain address for the business |
| **contact-email** | `string` | The main email contact source |
| **industry** | `string` | Static values for Industry |
| **company-number** | `string` | The registered legal number for the business |
| **company-type** | `string` | The registered type of business, LLP, Sole-trader, Corp etc |
| **vat-number** | `string` | The registered VAT number for the business  |
| **created-date** | `string` ([Date](/data-model/shared/date/)) | Time at which the object was created |

## Example data

```json
{
  "id": "ca9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
  "name": "Amazing Company",
  "legal-name": "Amazing Company Ltd",
  "address": "123 Cool Avenue, Growth-upon-Thames, Success, TW18 1LP",
  "website-url": "https://www.amazingcompany.com",
  "contact-email": "support@amazingcompany.com",
  "industry": "Information Services",
  "company-number": "13439188",
  "vat-number": "GB12345678",
  "created-date": "2022-01-10T14:57:43Z",
}
```