## Paragraph Component

Possible props: noMargin, bold, grey, greyMedium, small, extraSmall, style.   
The props can be combined.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| small    | bool     | -            | -          |  |
| extraSmall   | bool | -            | -          |  |
| bold     | bool     | -            | -          |  |
| grey     | bool     | -            | -          |  |
| greyMedium   | bool | -            | -          |  |
| noMargin | bool     | -            | -          |  |
| style    | object   | -            | -          |  |
| children | node     | -            | +          |  |

### Example

``` js
<P extraSmall bold grey noMargin>
  {props.children}
</P>
```
