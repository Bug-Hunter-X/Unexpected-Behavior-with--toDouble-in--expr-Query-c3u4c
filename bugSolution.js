```javascript
db.collection.aggregate([
  {
    $addFields: {
      parsedPrice: {
        $toDouble: '$price'
      }
    }
  },
  {
    $match: {
      parsedPrice: { $gt: 100 },
      parsedPrice: { $exists: true }
    }
  },
  {
    $project: {
      _id: 1,
      price: 1,
      parsedPrice: 0
    }
  }
]);
```