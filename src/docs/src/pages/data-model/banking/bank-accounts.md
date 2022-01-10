# Bank Accounts

<p class="description">A bank account associated with a connected company. A business can add as many accounts including debit and credit.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | The account id provided by the bank | 
| **bank-name** | `string` | The name of the bank | 
| **nickname** | `string` | The nickname given to the account | 
| **balance** | `integer` | The integer amount in pennies representing the current balance |
| **currency&#8209;code** | `string` | The currency code in [ISO-4217](#https://www.iso.org/iso-4217-currency-codes.html) format |
| **country-code** | `string` | The country code in [ISO-3166](#https://www.iso.org/iso-3166-country-codes.html) format |
| **sort-code** | `string` | Sort code for the account |
| **account-type** | `string` | Static values for [AccountType](#account-type) |
| **iban** | `string` | International bank account number of the account. Often used when making or receiving international payments. |
| **bic** | `string` | Bank identification code of the account. Often used in SWIFT transactions. |
| **created-date** | `string` ([Date](/data-model/shared/date/)) | Time at which the object was created |

### Account Type

- Current
- Credit_Card
- Charge_Card
- Top_Up

## Example data

```json
{
  "id": "ca9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
  "bank-name": "Santander",
  "nickname": "Santander Business Current Account",
  "balance": 1456780,
  "currency-code": "GBP",
  "country-code": "GBR",
  "sort-code": "12-34-56",
  "account-type": "Current",
  "iban": "GB29NWBK60161331926819",
  "bic": "HBUKGB4B ",
  "created-date": "2022-01-10T14:57:43Z",
}
```