## Generic Popover Component

Renders popovers depending on placement prop

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| children  | any   |          | +        | |
| placement  | string   | -          | +           | 'right','left', 'top', 'bottom' |
| heading  | string   | -          | +          | |
| tag  | string   | -          | +          | 'success', 'info','error', 'warning' |
| headingStyle  | object   | -          | -         | |

### Example

``` js
<PopoverDefault
  placement="bottom"
  heading="bottom"
  tag="info"
>
  Carla
</PopoverDefault>
```
