# Attachments

<p class="description">The Airslip API supports pulling and pushing of file attachments for invoices, bills and costs.</p>

## Data model

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Identifier for the attachment, unique for the [business](/data-model/shared/business) in the accounting platform. |
| **name** | `string` | Name of the attachment file. |
| **content-type** | `string` | File type of the attachment.  <br>  <br>This is represented by appending the file type to the [IETF standard file naming requirements](https://tools.ietf.org/html/rfc6838).  <br>  <br>For example, for a jpeg file the output is image/jpeg. |
| **created-date** | `string`  ([Date](/data-model/shared/date/)) | Date the attachment was uploaded and attached in the accounting platform. |
| **file-size** | `integer` | File size in bytes. For example, if this reads 46153, then the file size is 46kb. |
| **include-when-sent** | `boolean` | If `true` then the attachment is included with the associated invoice, bill or direct costs when it is printed, emailed, or sent to a customer, if the underlying accounting platform allows this. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```