# Tracking categories

<p class="description">Tracking categories are used to monitor cost centres and control budgets that sit outside the standard chart of accounts. Customers may use tracking categories to group together and track the income and costs of specific departments, projects, locations or customers.</p>

From their accounting system, customers can:

- Create and maintain tracking categories and tracking category types.
- View all tracking categories that are available for use.
- View the relationships between the categories.
- Assign invoices, bills, credit notes, or bill credit notes to one or more categories.
- View the categories that a transaction belongs to.
- View all transactions in a tracking category.

From the [TrackingCategories](https://api.codat.io/swagger/index.html#/TrackingCategories) endpoints, you can retrieve:

- A [list of the latest tracking categories](https://api.codat.io/swagger/index.html#/TrackingCategories/TrackingCategories_ListPaged) for a company.
- The details of a [specific tracking category](https://api.codat.io/swagger/index.html#/TrackingCategories/TrackingCategories_Single).

> 
> Example use case
> 
> Monitor the budget for your annual conference using a tracking category called 'AnnualConference2020' with the **type** set to **Costing**.

## Data model

The tracking categories of a company. If a tracking category has a parent category, the ID of that parent category is displayed. There is also a **hasChildren** field that shows whether there are child subcategories nested beneath. See below for an [example tracking category.](#tracking-category)

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the tracking category in the accounting platform. |
| **parent-id** | `string` | Identifier of 'parent' or main category that the tracking category belongs to. |
| **modified-date** | `string` ([Date](/data-model/shared/date/)) | Date when the record was last updated in the Airslip system. |
| **source-modified-date** | `string` ([Date](/data-model/shared/date/)) | Date when the record was last updated in the accounting platform. |
| **name** | `string` | Name of the tracking category in the accounting platform. |
| **has-children** | `boolean` | Indicates whether there are other tracking categories beneath this one in the hierarchy. |
| **status** | `string` | Current state of the tracking category, either:  <br>\+ `Active` \- Available for use.  <br>  <br>\+ `Archived` \- Unavailable. |

### Tracking category tree model

The full structure of a specific tracking category including any child or sub categories.

| Field | Type | Description |
| :- | :- | :- |
| **tracking-category-tree** | TrackingCategory | All fields from the tracking category in a tree structure. |
| **sub-categories** | Array of TrackingCategoryTree | A collection of subcategories that are nested beneath this category. |

### Tracking category reference model

Data types that reference a tracking category, for a example, the [line items of a bill](/data-model/accounting/bills#line-items), use a **tracking-category-ref** that includes the ID and name of the linked category.

| Field | Type | Description |
| :- | :- | :- |
| **id** | `string` | Unique identifier for the tracking category in the accounting platform. |
| **name** | `string` | Name of the tracking category in the accounting platform. |

## Example data

```json
{
  "property-to-go-here": "value-to-go-here"
}
```