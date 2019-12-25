import { filterReducer } from '../../store/reducers/filterReducer';
import { CHANGE_VIEW, CHANGE_VALUE } from '../../store/actions/actionTypes';

describe('reducers', () => {
  test('filter reducer', () => {
    expect(filterReducer(undefined, {})).toEqual({
      value: 'price',
      view: { id: 1, value: 'week' }
    });

    expect(filterReducer({}, { type: CHANGE_VIEW, payload: 'text' })).toEqual({
      view: 'text'
    });

    expect(filterReducer({}, { type: CHANGE_VALUE, payload: 'text' })).toEqual({
      value: 'text'
    });
  });
});
