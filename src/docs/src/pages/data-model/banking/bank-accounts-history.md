# Bank accounts history

<p class="description">An hourly snapshot of a bank account so a bank account balance can be visualised.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | The generated unique identifier | 
| **account-id** | `string` | The identifier for the associated account | 
| **date** | `string` ([Date](/data-model/shared/date/)) | The snapshot time of the account | 
| **balance** | `integer` | The integer amount in pennies representing the the total amount of the account |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```