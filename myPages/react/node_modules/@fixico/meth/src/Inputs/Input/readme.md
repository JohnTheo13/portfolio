## Input Component

Input has 5 different states, default, disabled, success, warning and error.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| type     | string   | 'text'       | -          |  |
| placeholder | string   |-           | -         |  |
| autoFocus | boolean | -            | -          |  |
| disabled  | boolean   |-           | -          |  |
| maxLength | number   |-           | -          |  |
| active  | boolean   |-           | -            |  |
| status  | string   | -           | -            | 'error', 'success', 'warning' |

### Example

``` js
<Input
	disabled={false}
	placeholder="select a value"
	status="success"
/>
```
