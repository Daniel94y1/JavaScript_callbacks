import onSuccess from "./callbacks/onSuccess.js";
import transformStringToArray from "./transformStringToCollection.js";

describe("Given transformStringToArray function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockOnError = jest.fn().mockImplementation(() => "[]");
  const mockOnSuccess = jest.fn().mockImplementation((email) => onSuccess);

  test(" When value is empty Then expected error string should be returned", () => {
    //Arrange
    const value = "";

    //Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toBe("[]");
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test(" When value is a string Then expected success string should be returned", () => {
    //Arrange
    const value = "Hello, cats!";

    //Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toBe(onSuccess);
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
  });

  test(" When value is a number Then expected error string should be returned", () => {
    //Arrange
    const value = 60;

    //Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toBe("[]");
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });
});
