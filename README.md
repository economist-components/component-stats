# component-stats
> Display and group stats

### `Country` as parseable by a `component-articletemplate/body`

```json
{
  "component": "Country",
  "props": {
    "title": "United Kingdom",
    "stats": [
      {
        "key": "stat A",
        "value": "value for stat A"
      }
    ]
  },
  "content": [
    "The first line.",
    "The second line."
  ]
}
```

#### TODO

- [ ] Style based on the styling provided by Alex.
- [ ] Move the `stats-list` and the `country` container into different repositories:
  - `component-stats`
  - `component-win-country`
