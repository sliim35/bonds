import { getValueByObjectKey, sliceToWeek } from '../../utils/helpers';
import { WEEK, MONTH, PRICE, DATE, ANOTHER_VALUE } from '../../utils/constants';
import { createSelector } from 'reselect';

export const getActiveFilterButton = (state) =>
    state?.filters?.view?.value ?? WEEK;

export const getActiveFilterSelect = (state) => state?.filters?.value ?? PRICE;

export const getPrices = (state) =>
    state?.chartData?.values.map(getValueByObjectKey(PRICE));

export const getDates = (state) =>
    state?.chartData?.values.map(getValueByObjectKey(DATE));

export const getAnotherValues = (state) =>
    state?.chartData?.values.map(getValueByObjectKey(ANOTHER_VALUE));

export const getChartValuesBySelect = createSelector(
    [getPrices, getAnotherValues, getActiveFilterSelect],
    (prices, anotherValues, getActiveFilterSelect) => {
        switch (getActiveFilterSelect) {
            case PRICE:
                return prices;

            case ANOTHER_VALUE:
                return anotherValues;

            default:
                return prices;
        }
    }
);

export const getChartData = createSelector(
    [getChartValuesBySelect, getDates],
    (values, dates) => ({ values, dates })
);

export const getChartValuesByButton = createSelector(
    [getChartData, getActiveFilterButton],
    (data, filter) => {
        switch (filter) {
            case MONTH:
                return data;

            case WEEK:
                return {
                    dates: sliceToWeek(data.dates),
                    values: sliceToWeek(data.values)
                };

            default:
                return data;
        }
    }
);
