export default (array) => {
    if (!Array.isArray(array) || array.length === 0) return null;
    const absoluteArray = array.map((number) => Math.abs(number));
    return Math.min(...absoluteArray) * Math.min(...absoluteArray);
};
