import transformStringToArray from "./transformStringToCollection.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

//test with value as number and log result
console.log(transformStringToArray(53, onError, onSuccess));

//test with value as array and log result
console.log(transformStringToArray(["bye", "cats"], onError, onSuccess));

//test with value as boolean and log result
console.log(transformStringToArray(true, onError, onSuccess));

//test with value as empty string and log result
console.log(transformStringToArray("", onError, onSuccess));

//test with value as string and log result
console.log(transformStringToArray("Hello cats!", onError, onSuccess));
