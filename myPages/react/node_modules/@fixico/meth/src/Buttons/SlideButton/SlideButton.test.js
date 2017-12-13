import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { describe, it, beforeEach } from 'storybook-addon-specifications'
import SlideButton from './index'

const test = () => (
  describe('SlideButton', () => {
    let wrapper
    let onClick
    beforeEach(() => {
      onClick = sinon.spy()
      wrapper = shallow(<SlideButton on textOn="on" textOff="off" onClick={onClick}>Secondary</SlideButton>)
    })
    it('should render the component', () => {
      expect(wrapper).to.exist
    })
    it('should contain the props on click', () => {
      expect(wrapper.find('input').prop('onClick')).to.exist
    })
    it('should call onClick when clicked', () => {
      wrapper.find('input').simulate('click')
      expect(onClick.callCount).to.equal(1)
    })
  })
)

export default test
