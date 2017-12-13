## OverlayTag Component

This component was originally called scarcity but had its name changed to be applied to different scenarios.

It can have pre-selected **theme**s (red, blue, green, yellow, premium) passed as strings to the component like `theme="green"`.

It also accepts custom colors, it should be passed as a color to **fontColor** (the default font color and border) and **fontHover** (the color of the font when hover).

It can be passed an **icon**. The icon should be present at the Icon.js list of svg icons, and should be passed as its name on Icon component like `icon="stopwatch"` or `icon="star"`.

It accepts a **placement** prop (bottom, left, top, right). And a different **trigger**, the default is `trigger=['focus', 'hover', 'click']`, but for mobile is better to react only on `click`.

It's mandatory to pass the **name** (text on the tag) and the **description** (name on the tooltip) props.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| name     | string   | -            | +          |  |
| description| string | -            | +          |  |
| trigger  | string or array of strings   | -     | -          |  |
| placement| string   | 'bottom'     | -          |  |
| icon     | string   | -            | -          | 'stopwatch', 'star' and others listed on Icon.js |
| viewBox  | string   | '0 0 11 11'  | -          | If using icon you might need another viewBox |
| theme    | string   | 'green'      | -          | 'red', 'green', 'blue', 'yellow', 'premium' |
| fontColor | string  | -            | -          | Applied to the font and border (not hovered) |
| fontHover | string  | -            | -          | Applied to the font and border when hover |
| style    | object   | -            | -          | Applied to the tag container |

### Example

``` js
<OverlayTag
  name="This is a tag with overlay tooltip"
  placement="bottom"
  viewBox="0 0 11 11"
  icon="stopwatch"
  theme="green"
  description="The prop description holds the tooltip content, it can be very long, also can contain images"
/>
```
