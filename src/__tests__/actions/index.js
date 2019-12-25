import {changeValue, changeView} from '../../store/actions/actionCreators';
import {CHANGE_VALUE, CHANGE_VIEW} from '../../store/actions/actionTypes';

describe('Action creators', () => {
  const data = 'data';

  test('change value', () => {
    const expectedAction = {
      type: CHANGE_VALUE,
      payload: data,
    }
    expect(changeValue(data)).toEqual(expectedAction)
  })

  test('change view', () => {
    const expectedAction = {
      type: CHANGE_VIEW,
      payload: data,
    }
    expect(changeView(data)).toEqual(expectedAction)
  })
})
