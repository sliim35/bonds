export const randomBetweenTwoNumbers = (min, max) =>
    Math.floor(Math.random() * max + min);

const getDate = (date) =>
    new Date(2019, 3, date).toLocaleDateString('en', {
        day: 'numeric',
        month: 'long'
    });

export const generateDays = (n) =>
    [...new Array(n)].map((el, i) => getDate(i + 1));

const fillByValue = (el) => ({
    date: el,
    price: randomBetweenTwoNumbers(1, 100),
    anotherValue: randomBetweenTwoNumbers(1, 100)
});

export const generateData = () => generateDays(30).map(fillByValue);

export const getValueByObjectKey = (key = '') => (obj = {}) => obj[key];

export const sliceToWeek = (arr) => arr.slice(0, 7);
