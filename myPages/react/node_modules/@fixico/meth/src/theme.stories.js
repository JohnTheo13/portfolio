import { storiesOf } from '@storybook/react'
import { Col, Row } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import React from 'react'
import theme from './theme'
import themeMd from './theme.md'

const colorskeys = () => {
  const keys = Object.keys(theme)
  const sliced = keys.slice(1, 25)
  return sliced
}

const style = color => ({
  backgroundColor: theme[color],
  height: '90px',
  width: '140px',
  margin: theme.whitespaceS,
})

storiesOf('Quarks/Colors', module)
  .add(
    'Color Guide',
    withReadme(themeMd, () => {
      const colors = colorskeys()
      return (
        <Row>
          {
            colors.map(color => (
              <Col key={color} xs={4} style={style(color)} >
                {color}
              </Col>
            ))
          }
        </Row>
      )
    }),
  )
