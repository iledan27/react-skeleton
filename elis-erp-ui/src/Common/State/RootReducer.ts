import { Reducer, combineReducers } from "redux";
import { TestReducer } from "../../Test/State/TestReducer";

export function createRootReducer(): Reducer<{}> {
  const combinedReducers: any = combineReducers({
    testReducer: TestReducer
  });
  return combinedReducers;
}
