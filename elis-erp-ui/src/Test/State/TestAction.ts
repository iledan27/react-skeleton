import { TestActionType } from "./TestActionType";

export const TestActions = {
  loadToDoList: (payload: any) => {
    return {
      type: TestActionType.LOAD_TODO_LIST,
      payload: payload
    };
  }
};
