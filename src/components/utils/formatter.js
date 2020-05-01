export const cutOffAfterTwoDecimal = (number) => {
    return Math.trunc(number * 100) / 100;
};

export const convertToPercentage = (number) => {
    return `${Math.trunc(number * 100)}%`;
};
