import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Col } from 'react-bootstrap'
import withReadme from 'storybook-readme/with-readme'
import { specs } from 'storybook-addon-specifications'
import SlideButton from './index'
import test from './SlideButton.test'
import readme from './readme.md'

const onClick = () => { /* no-op */ }

storiesOf('Atoms/Buttons', module).addDecorator(withKnobs)
  .add(
    'Slide Button',
    withReadme(readme, () => {
      const story = (
        <Col xs={4}>
          <SlideButton
            onClick={onClick}
            textOn="yes"
            textOff="no"
            on={boolean('on', true)}
          />
        </Col>
      )
      specs(test)
      return story
    }),
  )
