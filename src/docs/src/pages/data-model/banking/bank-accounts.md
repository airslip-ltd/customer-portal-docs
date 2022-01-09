# Bank Accounts

<p class="description">A bank account associated with a connected company. A business can add as many accounts including debit and credit.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | The account id provided by the bank | 
| **bank-name** | `string` | The name of the bank | 
| **nickname** | `string` | The nickname given to the account | 
| **balance** | `string` | The current balance |
| **currency&#8209;code** | `string` | The currency code in [ISO-4217](#https://www.iso.org/iso-4217-currency-codes.html) format |
| **country-code** | `string` | The country code in [ISO-3166](#https://www.iso.org/iso-3166-country-codes.html) format |
| **sort-code** | `string` | Sort code for the account |
| **account-type** | `string` | Static values for [AccountType](#account-type) |
| **iban** | `string` | International bank account number of the account. Often used when making or receiving international payments. |
| **bic** | `string` | Bank identification code of the account. Often used in SWIFT transactions. |

### Account Type

- Current
- Credit_Card
- Charge_Card
- Top_Up

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```