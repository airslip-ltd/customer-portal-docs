# Journal entries

A journal entry report shows the entries made in a company's general ledger, or chart of accounts, when transactions are approved. The journal line items for each journal entry should balance.

A journal entry line item is a single transaction line on the journal entry. For example:

* When a journal entry is recording a receipt of cash, the credit to accounts receivable and the debit to cash are separate line items.
* When a company needs to recognise revenue from an annual contract on a monthly basis, on receipt of cash for month one, they make a debit to deferred income and a credit to revenue.

In Airslip a journal entry contains details of:

* The date on which the entry was created and posted.
* Itemised lines, including amounts and currency.
* A reference to the associated accounts.
* A reference to the underlying record. For example, the invoice, bill, or other data type that triggered the posting of the journal entry to the general ledger.

> 
> Pushing journal entries
> 
> Airslip only supports journal entries in the base currency of the company that are pushed into accounts denominated in the same base currency.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier of the journal entry for the [business](/data-model/shared/business) in the accounting platform. |
| **postedOn** | `string` ([Date](/data-model/shared/date/)) | Date on which the journal entry was posted to the accounting platform, and had an impact on the general ledger. This may be different from the creation date.  <br>  <br>For example, a user creates a journal entry on Monday and saves it as draft, which has no impact on the general ledger. On Thursday, they return to the entry and post it.  <br><br>  <br>* The **createdOn** date shows as Monday.<br>  <br>* The **posted-on** date shows as Thursday.<br>  <br><br>  <br>  <br>Journal entries can also be backdated, so the **postedOn** date may be earlier than the **createdOn** date. |
| **created-on** | `string` ([Date](/data-model/shared/date/)) | Date on which the journal was created in the accounting platform. |
| **updated-on** | `string` ([Date](/data-model/shared/date/)) | Date on which the journal was last updated in the accounting platform. |
| **journal-lines** |     | An array of [JournalLines](#journal-lines). |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date on which the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date on which the record was last changed in the accounting platform. |
| **record-ref** | [Reference type](/data-model/accounting/reference-types#record-ref) | See [Record reference](#record-reference). |
| **journal-ref** | [Reference type](/data-model/accounting/reference-types#journal-ref) | Links journal entries to the relevant journal in accounting integrations that use multi-book accounting (multiple journals). |

## Journal lines

| Field | Type | Description |
| :- | :- | :- |
| **description** | `string` | Description of the journal line item. |
| **net-amount** | `integer` | The integer amount in pennies representing the amount for the journal line. |
| **currency** | `string` | Currency for the journal line item. |
| **account-ref** | [Reference type](/data-model/accounting/reference-types#account-ref) | See [Account reference](#account-reference). |

## Account reference

Links a journal entry to any associated accounts.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | The ID of the [account](/data-model/accounting/accounts/) the line is linked to. |
| **name** | `string` | The name of the [Account](/data-model/accounting/accounts) the line is linked to.  <br>_Note: this will only be populated if you've synchronised Accounts for the company._ |

## Record reference

Links a journal entry to the underlying record that created it.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier of the underlying record in the Airslip system. |
| **data-type** | `string` | Data type of the underlying record that created the journal entry. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```