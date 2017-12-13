## TextArea Component

TextArea has 5 different states, default, disabled, success, error and warning.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| type     | string   | 'text'       | -          |  |
| placeholder | string   |-           | -         |  |
| disabled  | boolean   |-           | -          |  |
| status  | string   | -           | -            | 'error', 'success', 'warning' |

### Example

``` js
<TextArea
	disabled={false}
	placeholder="select a value"
	status="success"
/>
```
