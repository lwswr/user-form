import React from "react";
import { initialState, reducer } from "./state";
import { UserForm } from "./UserForm";
import styled from "styled-components";
import "./index.css";
import { SVGs } from "./SVGs";

// UserForm with username and password
// username must be at least 5 characters
// password must be at least 8 characters
// containing Uppercase letters
// Lower case letters
// Numbers
// terms and conditions box

const Container = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(241, 242, 243);
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 3rem;
  line-height: 1.25;
  width: calc(100vw - 2rem);
  margin-bottom: 2rem;
  color: rgb(0, 0, 0);
  text-align: center;
  position: relative;
`;

function App() {
  const [state, update] = React.useReducer(reducer, initialState());
  return (
    <div>
      <SVGs />
      <Container>
        <Title>Sign Up</Title>
        <UserForm
          submit={(newUsername, newPassword) =>
            update({
              type: "new account set",
              payload: {
                user: newUsername,
                pass: newPassword,
              },
            })
          }
        />
        {console.log(state.newAccount.username, state.newAccount.password)}
      </Container>
    </div>
  );
}

export default App;
