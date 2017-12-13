## Select Input Component

Select input has 4 different states, default, disabled, success and error.

The props accepted are: **placeholder** (type `string`), **options** (type array of objects, `[{ value: something}]`, **status** (type string, `success, error, warning`), **active** (boolean) and **type** (type string)

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| type     | string   | 'text'       | -          |  |
| options  | array of objects   | -  | +          |  [{ value: 'something' }]|
| placeholder | string   |-           | -         |  |
| disabled  | boolean   |-           | -          |  |
| active  | boolean   |-           | -            |  |
| status  | string   | -           | -            | 'error', 'success', 'warning' |

### Example

``` js
<SelectInput
	options={[{ value: 'option1' }, { value: 'option2' }]}
	disabled={false}
	placeholder="select a value"
	status="success"
/>
```
