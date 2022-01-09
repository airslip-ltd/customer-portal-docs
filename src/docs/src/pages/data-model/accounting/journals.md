# Journals

In accounting software, journals are used to record all the financial transactions of a company. Each transaction is represented by a separate [journal entry](/data-model/accounting/journal-entries). The entries in an accounting journal are used to create the general ledger, which is then used to create the financial statements of a business.

When a company records all their transactions in a single journal, it can become large and difficult to maintain and track. This is why large companies often use multiple journals (also known as subjournals) to categorize and manage journal entries.

Such journals can be divided into two categories:

* Special journals: journals used to record specific types of transactions, for example, a purchases journal, a sales journal, or a cash management journal
* General journals: journals used to record transactions that fall outside the scope of the special journals

At present, multiple journals or subjournals are used in these Airslip integrations:

* [Sage Intacct](/docs/accounting-sage-intacct) (mandatory)
* [Exact Online](/docs/accounting-exact) (mandatory)
* [Oracle NetSuite](/docs/accounting-netsuite) (optional)

> 
> When pushing journal entries to an accounting platform that doesn’t support multiple journals (multi-book accounting), the entries will be linked to the platform generic journal. The journals data type will only include one object.

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Journal ID. |
| **journal-code** | `string` | Native journal number or code. |
| **name** | `string` | Journal name.  <br>The maximum length for a journal name is 256 characters. All characters above that number will be truncated. |
| **parent-id** | `string` | Parent journal ID.  <br>If the journal is a parent journal, this value is not present. |
| **has-children** | `boolean` | If the journal has child journals, this value is `true`. If it doesn’t, it is `false`. |
| **created-date** | `string` ([Date](/data-model/shared/date/)) | Journal creation date. |
| **status** | `string` | Possible statuses:  <br><br>  <br>* `Unknown`<br>  <br>* `Active`<br>  <br>* `Archived` |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | The last time Airslip modified the record. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | The last time the journal was modified on the source platform. |
| **journal-ref** | [Reference type](/data-model/accounting/reference-types#journal-ref) | See [journalRef](/data-model/accounting/reference-types#journal-ref). |

## Journal reference

Airslip uses the journalRef object (link!) to link journal entries to the relevant journal in accounting integrations.

This reference enables Airslip to push journal entries to the integrations that require the journal to be specified.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Journal ID. |
| **name** | `string` | Journal name. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```