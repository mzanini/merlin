# DeeMemory

DeeMemory reads the information about your World from tables. These tables are JSON files and need to respect a certain structure to be read correctly.

## Races table

The races table contains all the character races that exist in your world. It is an array or races, with every race defined by a name and a probability. The probability is expressed as an interval between 1 and 1000. For example:

```
[
  {
    "name": "Human",
    "probability": "1-500"
  },
  {
    "name": "Troll",
    "probability": "501-1000"
  }
]
```

## Social Classes table

The Social Classes table matches a certain race with the corresponding possible social classes, including the probability. The probability is an interval in 1-100. The file contains an array of objects like this:

```
{
    "race": "Human",
    "probabilities": [
      {
        "name": "Peasant",
        "probability": "1-90"
      },
      {
        "name": "Nobility",
        "probability": "90-100"
      }
    ]
  }
  ```

## Minor Abilities table

The Minor Abilities table contains all the minor abilities that exist in your World. Minor abilities in DeeMemory are rolled with two consecutive percentile rolls. The first roll selects the _chart_ while the second one selects the ability itself. The JSON file contains an array of abilities, like this:

```
[
{
  "chart" : "1",
  "probability": "1-45",
  "abilities" : [
    {
      "name": "Artist",
      "number": "1"
    },
    {
      "name": "Smith",
      "number": "2"
    }
  ]
}
]
```
