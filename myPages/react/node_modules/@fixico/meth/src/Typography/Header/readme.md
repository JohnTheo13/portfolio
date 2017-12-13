## Header Component

Header accepts different tags props (H1, H2, H3, H4, H5, H6). 

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| tag      | string   | -            | +          | H1, H2, H3, H4, H5, H6 |
| style    | object   | -            | -          |  |
| children | node     | -            | +          |  |

### Example

``` js
<Header tag="H6" >{props.children}</Header>
```
