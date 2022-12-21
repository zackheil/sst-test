import { MyStack } from "./MyStack.js";
import { App } from "sst/constructs";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
  });
  app.stack(MyStack);
}
