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
| **iso-family-code** | `string` | The standardised [ISO-20022](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets) transaction code |
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
  "id": "ca9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
  "account-id": "aa9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
  "authorised-date": "2022-01-10T14:57:43Z",
  "captured-date": "2022-01-10T14:57:43Z",
  "amount": 1456780,
  "description": "SONAR CLOUD CODE LTD",
  "merchant": {
    "name": "Sonar Cloud",
    "category": "5734",
  },
  "reference": "Code Review Tool",
  "iso-family-code": "RCDT",
  "proprietary-code": "POS",
  "balance": 1456780,
}
```