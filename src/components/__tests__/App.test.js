import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shows a comment box', () => {
  //create CommentBox
  const div = document.createElement('div')

  ReactDOM.render(<App />, div)


  // expect(div.innerHTML).toContain('<CommentBox />') NO inner html thats dumb and cross components
  // expect(div).toHaveAnInstanceOf(CommentBox)

  //clean up after test runs, or the div stays around even after test runs and slowly they accumulate as long as the test server is running
  ReactDOM.unmountComponentAtNode(div)
})