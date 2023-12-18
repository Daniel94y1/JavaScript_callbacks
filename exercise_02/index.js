import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

console.log(createUser("", onError, onSuccess));

console.log(
  createUser("daniel.escobar@mataro.epiaedu.cat", onError, onSuccess)
);
