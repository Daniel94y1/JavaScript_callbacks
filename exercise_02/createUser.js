import validateString from "../helpers/validateString";
/**
 * Generate a random number between 0 and 1.
 *
 * @returns {number} - Random number.
 */
function generateRandomNumber() {
  return Math.random();
}

/**
 * Create a user and invoke appropriate callbacks based on conditions.
 *
 * @param {string} email - The email of the user.
 * @param {function} onError - Callback function to be called when an error occurs.
 * @param {function} onSuccess - Callback function to be called on successful user creation.
 *
 * @returns {string} - Result message based on the outcome.
 */
function createUser(email, onError, onSuccess) {
  const randomNumber = generateRandomNumber();

  if (randomNumber < 0.5 || !validateString(email)) {
    return onError();
  }

  return onSuccess(email);
}

export default createUser;
