# Bank transactions

<p class="description">Transactional banking data for a connected business's specific bank account.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | The transaction id provided by the bank | 
| **account-id** | `string` | The identifier for the bank account | 
| **authorised-date** | `string` ([Date](/data-model/shared/date/)) | The time the transaction was taken place | 
| **captured-date** | `string` ([Date](/data-model/shared/date/)) | The time the transaction was secured by the originating bank | 
| **amount** | `integer` | The total amount of the transaction | 
| **description** | `string` | The description as it appears on the bank statement | 
| **merchant** | [Merchant](#merchant) | An object of [Merchant](#merchant) | 
| **reference** | `string` | The reference marked by the sender | 
| **iso-family-code** | `string` | The standardised [ISO-20022](#https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets) transaction code | 
| **proprietary-code** | `string` | The internal bank transaction code  | 
| **balance** | `integer` | The account balance after  | 

### Merchant

| Field | Type | Description |
| :- | :- | :- |
| **name** | `string` | The merchant name of the transaction | 
| **category** | `string` | The standardised merchant [ISO-18245](#https://www.iso.org/standard/33365.html) code | 

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```