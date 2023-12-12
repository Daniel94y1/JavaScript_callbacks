/**
 * Define 'onSuccess' function and signature
 * It receives a string and returns an array with all words contained in it
 *
 * input:
 *  - value: string
 *
 * output:
 *  - array
 */
/**
 * This function has a parameter value that is a string and returns an array.
 * @param {string} value
 * @returns {string[]}
 */

const onSuccess = function (value) {
  const result = value.split(/\s+/);

  return result;
};

export default onSuccess;
