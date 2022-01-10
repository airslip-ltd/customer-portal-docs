# Reference types

<p class="description">Reference types link between data types in the Airslip accounting data model.</p>

## account-ref

Links to the [Accounts](/data-model/accounting/accounts) data type.

> ### 
> 
> Financial Reports
> 
> Profit & Loss and Balance Sheet reports do not have an `account-ref` object but do have an `account-id` field on each line which can be used to link to the `accounts` data type

Found on:

* [Invoice](/data-model/accounting/invoices) line items
* [Bill](/data-model/accounting/bills) line items
* [Journal entries](/data-model/accounting/journal-entries)

```json
"account-ref": {
    "id": "string",  // 'id' from the Accounts data type
    "name": "string" // 'name' from the Accounts data type
}
```

## bill-ref

Links to the [Bills](/data-model/accounting/bills) data type.

Found on:

* [Purchase orders](/data-model/accounting/purchase-orders)

```json
"billRef": {
    "id": "string",         // 'id' from the Bills data type
    "reference": "string"   // 'reference' from the Bills data type
},
```

## contact-ref

Links to the [Transfers](data-model/accounting/transfers) data type.

```json
"contactRef": {
    "id": "ddcf351f-c931-46fb-b6d9-e53cbf238847",
    "dataType": "customers"
}
```

## customer-ref

Links to the [Customers](/data-model/accounting/customers) data type.

Found on:

* [Invoices](/data-model/accounting/invoices)
* [Credit notes](/data-model/accounting/credit-notes)
* [Payments](/data-model/accounting/payments)

```json
"customerRef": {
    "id": "string",         // 'id' from the 'customers' data type
    "companyName": "string" // 'customerName' from the 'customer' data type
}
```

## journal-ref

Links [journal entries](/data-model/accounting/journal-entries) to the relevant [journal](/data-model/accounting/journals) in accounting integrations that use multi-book accounting (multiple journals).

```json
"journalRef": {        
    "id": "string", // GUID of the underlying journal 
    "name": "string" // Journal name, 256 characters max
}
```

## payment-method-ref

Links to the [Payment Method](/data-model/accounting/payment-methods) data type.

Found on bill payments.

```json
"paymentMethodRef": {
    "id": "string",  // 'id' from the 'paymentMethods' data type
    "name": "string" // 'name' from the 'paymentMethods' data type
}
```    

## record-ref

Links a [journal entry](/data-model/accounting/journal-entries) to the underlying record or data type.

Found on journal entries.

```json
"recordRef": {
    "id": "string",      // 'id' of the underlying record or data type
    "dataType": "string" // Name of the 'dataType'
}
 ```   

## supplier-ref

Links to the [Suppliers](/data-model/accounting/suppliers) data type.

Found on:

* [Bills](/data-model/accounting/bills)
* [Bill payments](/data-model/accounting/bill-payments)

```json
"supplierRef": {
    "id": "string",          // 'id' from the 'suppliers' data type
    "supplierName": "string" // 'supplierName' from the 'suppliers' data type
}
```

## tax-rate-ref

Links to the [Tax Rates](/data-model/accounting/tax-rates) data type.

Found on:

* [Invoice](/data-model/accounting/invoices) line items
* [Bill](/data-model/accounting/bills) line items
* [Credit Note](/data-model/accounting/credit-notes) line items
* [Bill Credit Note](/data-model/accounting/bill-credit-notes) line items

```json
"taxRateRef": {
    "id": "string",  // 'id' from the 'taxRates' data type
    "name": "string", // 'name' from the 'taxRates' data type
    "effectiveTaxRate": "decimal" // applicable tax rate
}
```

## tracking-category-ref

Links to the [tracking categories](/data-model/accounting/tracking-categories) data type.

Found on:

* [Bill credit notes](/data-model/accounting/bill-credit-notes)
* [Bills](/data-model/accounting/bills)
* [Invoices](/data-model/accounting/invoices)
* [Purchase orders](/data-model/accounting/purchase-orders)

```json
"tracking-category-ref": {
    "id": "string",  // 'id' from the 'trackingCategories' data type
    "name": "string" // 'name' from the 'trackingCategories' data type
}
```
* [Bills](/data-model/accounting/bills)
* [Invoices](/data-model/accounting/invoices)
* [Purchase orders](/data-model/accounting/purchase-orders)

```json
"tracking-category-ref": {
    "id": "string",  // 'id' from the 'trackingCategories' data type
    "name": "string" // 'name' from the 'trackingCategories' data type
}
```