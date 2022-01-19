# Locations

<p class="description">The locations data type stores all geographical locations for the business.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | A unique identifier for the location |
| **name** | `string` | The name of the location |
| **address** | `string` | The address of the location. E.g. Store location, warehouse location |
| **created-date** | `string` ([Date](/data-model/shared/date/)) | Time at which the object was created |

## Example data

```json
{
  "id": "ca9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
  "name": "Staines High Street",
  "address": "123 Cool Avenue, Growth-upon-Thames, Success, TW18 1LP",
  "created-date": "2022-01-10T14:57:43Z",
}
```