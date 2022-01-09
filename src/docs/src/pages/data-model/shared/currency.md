# Currency

The currency datatype in Airslip is the [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) currency code. e.g. GBP.

## Unknown currencies

In line with the [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) specification, the code XXX is used when the data source does not return a currency for a transaction.

There are only a very small number of edge cases where this currency code is returned by the Airslip system.