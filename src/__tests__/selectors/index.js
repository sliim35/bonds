import { getChartValuesByButton } from '../../store/selectors';
import {store} from '../../__mocks__/store'

describe('selectors', () => {
  const expectedValues = {
    dates: ['April 1', 'April 2', 'April 3', 'April 4', 'April 5', 'April 6', 'April 7'],
    values: [99, 29, 21, 22, 24, 25, 11]
  };

  test('get chart values', () => {
    expect(getChartValuesByButton(store)).toEqual(expectedValues);
  });
});
