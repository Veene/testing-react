import React from 'react'
import { shallow } from 'enzyme' //render instance of component but none of its children(React child), divs, etc will render tho
import App from '../App'
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

it('shows a comment box', () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(CommentBox).length).toEqual(1)
})
it('shows a comment list', () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(CommentList).length).toEqual(1)
})
