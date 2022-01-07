# Shared (Banking, Commerce, Accounting)

<p class="description">Something about banking.</p>

## Business

Information on the business to help validate the legitimacy of the connected business.

| Field | Description | Type |
| :-  | :- | :- |
| id| string | A generated identifier for the business |
| name | string | Trading name of the business |
| legal-name | string | The registered legal name of the business |
| address | string | The registered legal address of the business |
| website-url | string | Domain address for the business |
| contact-email | string | The main email contact source |
| industry | string | Static values for Industry |
| company-number | string | The registered legal number for the business |
| company-type | string | The registered type of business, LLP, Soletrader, Corp etc |
| vat-number | string | The registered VAT number for the business  |
| created-date | string ([Date](https://github.com/airslip-ltd/customer-portal-docs/wiki/Glossary#date)) | Time at which the object was created |

# Banking

## Bank Accounts

A bank account associated with a connected company. A business can add as many different types of accounts as desired.

| Field | Description | Type |
| :- | :- | :- |
| id | string | The account id provided by the bank | 
| bank-name | string | The name of the bank | 
| nickname | string | The nickname given to the account | 
| balance | string | The current balance |
| currency&#8209;code | string | The currency code in [ISO-4217](#https://www.iso.org/iso-4217-currency-codes.html) format |
| country-code | string | The country code in [ISO-3166](#https://www.iso.org/iso-3166-country-codes.html) format |
| sort-code | string | Sort code for the account |
| account-type | string | Static values for [AccountType](#account-type) |
| iban | string | International bank account number of the account. Often used when making or receiving international payments. |
| bic | string | Bank identification code of the account. Often used in SWIFT transactions. |

### Account Type

- Current
- Credit_Card
- Charge_Card
- Top_Up

## Bank Accounts History

An hourly snapshot of a bank account so a bank account balance can be visualised.

| Field | Description | Type |
| :- | :- | :- |
| account-id | string | The identifier for the account | 
| created-date | string ([Date](https://github.com/airslip-ltd/customer-portal-docs/wiki/Glossary#date)) | The snapshot time of the account | 
| balance | decimal | The total amount of the account |

## Bank Transactions
Transactional banking data for a connected business's specific bank account.

| Field | Description | Type |
| :- | :- | :- |
| id | string | The transaction id provided by the bank | 
| account-id | string | The identifier for the bank account | 
| authorised-date | string ([Date](https://github.com/airslip-ltd/customer-portal-docs/wiki/Glossary#date)) | The time the transaction was taken place | 
| captured-date | string ([Date](https://github.com/airslip-ltd/customer-portal-docs/wiki/Glossary#date)) | The time the transaction was secured by the originating bank | 
| amount | integer | The total amount of the transaction | 
| description | string | The description as it appears on the bank statement | 
| merchant | Merchant | An object of [Merchant](#merchant) | 
| reference | string | The reference marked by the sender | 
| iso-family-code | string | The standardised [ISO 20022](#https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets) transaction code | 
| proprietary-code | string | The internal bank transaction code  | 
| balance | integer | The account balance after  | 

### Merchant

| Field | Description | Type |
| :- | :- | :- |
| name | string | The merchant name of the transaction | 
| category | string | The standardised merchant [ISO-18245](#https://www.iso.org/standard/33365.html) code | 