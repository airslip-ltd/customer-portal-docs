# Currency rate

Currency rates in Airslip are implemented as the multiple of foreign currency units to each base currency unit.

> baseCurrency = foreignCurrency x currencyRate
>
> foreignCurrency = baseCurrency / currencyRate
>
> currencyRate = baseCurrency / foreignCurrency

Where the currency rate is provided by the underlying accounting platform, it will be available from Airslip with the same precision (up to a maximum of 9 decimal places).

For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.

## Examples with base currency of GBP

| Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
| :- | :- | :- | --- |
| **USD** | $20 | 0.735 | £14.71 |
| **EUR** | €20 | 0.836 | £16.72 |
| **YEN** | ¥20 | 0.006 | £0.12 |

## Examples with base currency of USD

| Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
| :- | :- | :- | --- |
| **GBP** | £20 | 1.358 | $27.17 |
| **EUR** | €20 | 1.136 | $22.72 |
| **YEN** | ¥20 | 0.073 | $0.008 |
