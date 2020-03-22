import { TestActionType } from "./TestActionType";
import { ITestState } from "./ITestState";

const initialTestState: ITestState = {
  test: "welcome"
};

export const TestReducer = (state: ITestState = initialTestState, action: any) => {
  switch (action.type) {
    case TestActionType.LOAD_TODO_LIST: {
      return { ...state };
    }
  }
  return state;
};
