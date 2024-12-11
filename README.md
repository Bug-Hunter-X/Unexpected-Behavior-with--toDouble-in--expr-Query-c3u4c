# MongoDB $toDouble in $expr Unexpected Behavior

This repository demonstrates an uncommon issue encountered when using the `$toDouble` operator within the `$expr` operator in MongoDB queries.  The problem arises when the field being converted to a double contains non-numeric values.

The `bug.js` file contains a query that attempts to filter documents where the 'price' field is greater than 100.  However, if the 'price' field contains non-numeric data (e.g., strings), the query will not work as expected.

The solution in `bugSolution.js` addresses the issue by explicitly handling non-numeric values and providing a robust solution. This approach uses an aggregation pipeline to first filter out documents with non-numeric prices and then perform the comparison.