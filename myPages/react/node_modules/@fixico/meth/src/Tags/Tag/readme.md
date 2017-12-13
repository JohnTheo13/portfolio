## Tag Component

Simple tag can receive any text as children and specific colors, on `fontColor` we specify de default font color (the default value is `successMedium`), on `fontActive` we specify the font color for when `active = true` (the default value is `white`).

It contains an `<Icon name="star_icon" />` before the text, for it to be displayed you need to pass the prop `icon` of type boolean to the component.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| active  | boolean | false            | -         |  |
| icon    | boolean | -            | -         |  |
| fontActive | string| white            | -          |  |
| fontColor    | string   | successMedium            | -          |  |
| style   | object   | -            | -          |  |
| children | node     | -            | +          |  |

### Example

``` js
<Tag
  fontColor={theme.successMedium}
  fontActive={theme.white}
  active={false}
  icon
>
  {props.children}
</Tag>
```
