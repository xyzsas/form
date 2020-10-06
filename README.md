# form

## Affair Properties

- `id`
- `title`
- `group`
- `duration`
- `form`: JSON string of form

## Form Format

An Array of items:
```js
{
  key: "key", // a unique key for the item
  field: "field", // type of item
  rules: ["functionString"], // validate rule
  hide: "functionString" // hide rule
}
```

> In function string, use `this.key` can access value of other items

**Default functions**:
```js
const REQUIRED = v => !!v || '必填'
```

### input
```js
{
  key: "key",
  field: "input",
  label: "label",
  rules: ["functionString"],
  hide: "functionString"
}
```
