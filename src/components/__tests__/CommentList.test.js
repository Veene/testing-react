import React from 'react'
import { mount } from 'enzyme' //render instance of component but none of its children(React child), divs, etc will render tho
import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped

beforeEach(() => {
  const initialState = { comments: ['Comment 1', 'Comment 2'] }
  wrapped = mount(<Root initialState={initialState}><CommentList /></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

describe('', () => {

  it('should produce an li element for every comment in state', () => {
    expect(wrapped.find('li').length).toEqual(2)
  })
  it('should have visible comment text from each comment', () => {
    expect(wrapped.find('li').first().text()).toEqual('Comment 1')
  })
})