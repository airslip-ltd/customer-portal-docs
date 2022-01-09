# Date

The Airslip date format is the [ISO 8601](#https://www.iso.org/iso-8601-date-and-time-format.html) date time represented as a string, for example:
`2020-12-31T14:12:02Z`
`2020-12-31T14:12:02`

When consuming data with `DateTime` fields from Airslip, make sure you are supporting the following cases when reading dates:

Coordinated Universal Time (UTC): `2020-12-31T14:12:02Z`

Unqualified local time: `2020-12-31T14:12:02`

UTC time offsets: `2020-12-31T14:12:02-05:00`