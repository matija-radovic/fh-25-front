/**
 * return a value that has been rounded to a set precision
 * @param {Number} value the value to round
 * @param {Number} precision the precision (decimal places), default: 3
 * @returns {Number}
 */
const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));

/**
 * return a value that has been re-mapped according to the from/to
 * - for example, adjust(10, 0, 100, 100, 0) = 90
 * @param {Number} value the value to re-map (or adjust)
 * @param {Number} fromMin min value to re-map from
 * @param {Number} fromMax max value to re-map from
 * @param {Number} toMin min value to re-map to
 * @param {Number} toMax max value to re-map to
 * @returns {Number} 
 */
const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number) => {
    return round(toMin + (toMax - toMin) * (value - fromMin) / (fromMax - fromMin));
};

export { round, adjust }