import React from "react";
import produce from "immer";

export type UserInfoProps = {
  username?: string;
  password?: string;
};

// State
export type State = {
  newAccount: UserInfoProps;
  isComplete?: boolean;
};

// Events
export type Events =
  | {
      type: "new account set";
      payload: { user: string; pass: string };
    }
  | {
      type: "form completed state changed";
      formState: boolean;
    };

// Initial State
export const initialState = (): State => ({
  newAccount: {
    username: undefined,
    password: undefined,
  },
  isComplete: false,
});

// reducer
export const reducer: React.Reducer<State, Events> = (state, event) => {
  return produce(state, (draft) => {
    switch (event.type) {
      case "new account set": {
        draft.newAccount.username = event.payload.user;
        draft.newAccount.password = event.payload.pass;
        break;
      }
      case "form completed state changed": {
        draft.isComplete = event.formState;
      }
    }
  });
};
