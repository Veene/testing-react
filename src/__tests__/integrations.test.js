import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(() => {
  //before test runs, turn off axios requests 
  moxios.install()
  //and intercept those calls, tricking axios into thinking it got data
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  })

})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
  //Attempt to render entire app
  const wrapped = mount(<Root><App /></Root>)

  //find the fetchComments button and click it
  wrapped.find('.fetch-comments').simulate('click')
  
  //introduce a TINY little pause
  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2)
    //only once done is called, does jest take this setTimeout into consideration
    done()
    wrapped.unmount()
  })
})