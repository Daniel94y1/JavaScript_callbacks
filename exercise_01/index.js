import transformStringToArray from "./transformStringToCollection.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

console.log(transformStringToArray(53, onError, onSuccess));

console.log(transformStringToArray(["bye", "cats"], onError, onSuccess));

console.log(transformStringToArray(true, onError, onSuccess));

console.log(transformStringToArray("", onError, onSuccess));

console.log(transformStringToArray("Hello cats!", onError, onSuccess));
