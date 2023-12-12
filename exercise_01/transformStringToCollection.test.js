import transformStringToArray from "./transformStringToCollection.js";

// Mock functions for testing
const onErrorMock = jest.fn();
const onSuccessMock = jest.fn();

describe("transformStringToArray function", () => {
  test("should call onError callback if value is an empty string", () => {
    const value = "";
    transformStringToArray(value, onErrorMock, onSuccessMock);

    expect(onErrorMock).toHaveBeenCalled();
    expect(onSuccessMock).not.toHaveBeenCalled();
  });

  test("should call onSuccess callback with the correct value", () => {
    const value = "Hello, cats";
    transformStringToArray(value, onErrorMock, onSuccessMock);

    expect(onSuccessMock).toHaveBeenCalledWith(value);
    expect(onErrorMock).not.toHaveBeenCalled();
  });
  test("should call onError callback if value is not a string", () => {
    const value = 70;
    transformStringToArray(value, onErrorMock, onSuccessMock);

    expect(onErrorMock).toHaveBeenCalled();
    expect(onSuccessMock).not.toHaveBeenCalled();
  });
});
