import React from 'react'
import { mount } from 'enzyme' //render instance of component but none of its children(React child), divs, etc will render tho
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped

beforeEach(() => {
  wrapped = mount(<Root><CommentList /></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

describe('', () => {

  it('should produce an li element for every comment in state', () => {

  })
  it('should have visible comment text from each comment', () => {

  })
})