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
| **company-type** | `string` | The registered type of business, LLP, Soletrader, Corp etc |
| **vat-number** | `string` | The registered VAT number for the business  |
| **created-date** | `string` ([Date](/data-model/shared/date/)) | Time at which the object was created |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```