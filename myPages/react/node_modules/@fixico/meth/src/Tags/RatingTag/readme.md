## Rating Tag Component

This component accepts two props, the `rating` prop is the rating number, the `text` prop is the translation in words for the number like `9.0 Excellent`

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| rating   | number or string | -    | +          | '9.0' |
| text     | string   | -            | +          | 'Good' |

### Example

``` js
<RatingTag rating="9.0" text="Excellent" />
```
