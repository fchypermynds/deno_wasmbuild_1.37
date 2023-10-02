import { instantiate } from "./lib/rs_lib.generated.js";

const { custom_function } = await instantiate();

custom_function();
console.log("execution completed");
