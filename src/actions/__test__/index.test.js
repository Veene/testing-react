import { saveComment } from 'actions/index'
import { SAVE_COMMENT } from 'actions/types'

describe('saveComment action creator', () => {
  const action = saveComment('New Comment')

  it('has the correct type', () => {
    expect(action.type).toEqual(SAVE_COMMENT)
  })
  it('has the correct payload', () => {
    expect(action.payload).toEqual('New Comment')
  })
})