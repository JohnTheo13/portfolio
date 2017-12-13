import React from 'react'
import PropTypes from 'prop-types'
import { Button, Alert, P, Header } from '../index'

const AlertModalContent = props => (
  <div>
    <Alert
      status={props.status}
      body={props.alert}
      header={props.alertHeader}
    />
    <Header tag="H5">{props.title}</Header>
    <P>{props.body}</P>
    {props.children && <P>{props.children}</P>}
    <Button
      tag="primary"
      size="medium"
      onClick={() => props.onClick(props)}
    >
      {props.buttonText}
    </Button>
  </div>
)

AlertModalContent.defaultProps = {
  title: undefined,
  body: undefined,
  children: undefined,
  alertHeader: undefined,
}

AlertModalContent.propTypes = {
  alert: PropTypes.string.isRequired,
  alertHeader: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
}

export default AlertModalContent
