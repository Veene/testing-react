import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }
  //should return [...state, payload]
  const newState = commentsReducer([], action)
  expect(newState).toEqual(['New Comment'])
})
it('should handle action even with an unknown type and return state', () => {
  const action = {
    type: 'Boogaboo',
    payload: 'Naigar'
  }
  const newState = commentsReducer([], action)
  expect(newState).toEqual([])
})