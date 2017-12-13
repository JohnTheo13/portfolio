import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Label, Image } from '../index'

const ImageStyled = styled(Image)`
  margin-right: 6px;
`

const Field = props => (
  <div>
    {props.icon &&
      <ImageStyled src={props.icon} tag={props.size} />
    }
    <Label>{props.label}</Label>
    <Input
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
      maxLength={props.maxLength}
      disabled={props.disabled}
      active={props.active}
      status={props.status}
      input={props.input}
      type={props.type}
      {...props}
    />
  </div>
)

Field.defaultProps = {
  type: 'text',
  placeholder: undefined,
  autoFocus: undefined,
  maxLength: undefined,
  disabled: undefined,
  input: undefined,
  active: undefined,
  status: undefined,
  icon: undefined,
  size: undefined,
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  active: PropTypes.bool,
  status: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
}

export default Field
