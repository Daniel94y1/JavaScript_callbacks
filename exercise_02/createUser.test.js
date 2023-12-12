import createUser from "./createUser.js";

// Mock functions for testing
const onErrorMock = jest.fn();
const onSuccessMock = jest.fn();

describe("createUser function", () => {
  test("should call onSuccess callback with the correct email", () => {
    const originalMathRandom = Math.random;
    Math.random = jest.fn(() => 0.4);

    const email = "test10@example.com";
    createUser(email, onErrorMock, onSuccessMock);

    expect(onSuccessMock).toHaveBeenCalledWith(email);
    expect(onErrorMock).not.toHaveBeenCalled();

    Math.random = originalMathRandom;
  });

  test("should call onError callback if email is empty", () => {
    const email = "";
    createUser(email, onErrorMock, onSuccessMock);

    expect(onErrorMock).toHaveBeenCalled();
    expect(onSuccessMock).not.toHaveBeenCalled();
  });

  test("should call onError callback if random number is greater than 0.5", () => {
    const originalMathRandom = Math.random;
    Math.random = jest.fn(() => 0.6);

    const email = "test10@example.com";
    createUser(email, onErrorMock, onSuccessMock);

    expect(onErrorMock).toHaveBeenCalled();
    expect(onSuccessMock).not.toHaveBeenCalled();

    Math.random = originalMathRandom;
  });
});
