## Alert Modal Content Component

This component should be placed inside a Modal. It contains an `<Alert />` component, body and a button that should receive a function `onClick` for closing the modal.   
It can have 3 different status, `success, error` and `info`

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| onClick  | function | -            | +          | function to close the modal or redirect |
| alertHeader | string| -            | -          |  |
| alert    | string   | -            | +          |  |
| title    | string   | -            | -          |  |
| body     | string   | -            | -          |  |
| buttonText | string | -            | +          |  |
| status   | string   | -            | +          | 'error', 'success', 'info' |
| children | node     | -            | -          |  |

### Example

``` js
<AlertModalContent
  onClick={onClick}
  alertHeader="This is bold, alertHeader!"
  alert="This contain the alert message!"
  title="This is the bold title"
  body="This is the body, this is the body, this is the body!"
  buttonText="Close"
  status="success"
>
  This extra part is optional, and you can add whatever you here, even pictures.
</AlertModalContent>
```
