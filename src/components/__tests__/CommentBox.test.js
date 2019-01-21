import React from 'react'
import { mount } from 'enzyme' //render instance of component but none of its children(React child), divs, etc will render tho
import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapped

beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

it('had a text area and two button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', { target: { value : "test" }})
    //need to update aka re-render the commenbox so the change comes into effect with this.setstate
    wrapped.update()
  })
  it('can take user input into the text area', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('test')
    // expect(wrapped.find('textarea').text()).toEqual('test')
  })

  it('should empty textarea when input is submitted', () => {
    //this one is already done above so its redundant, the one above will fail first and show same thing
    // expect(wrapped.find('textarea').prop('value')).toEqual('test')
    wrapped.find('form').simulate('submit')
    //updating because of async setState inside component
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
    // expect(wrapped.find('textarea').text()).toEqual('')
  })
})

