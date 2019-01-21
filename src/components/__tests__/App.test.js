import React from 'react'
import { shallow } from 'enzyme' //render instance of component but none of its children(React child), divs, etc will render tho
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

//initialize in global scope
let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})
it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
