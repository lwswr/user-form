import React from "react";
import styled from "styled-components";

const UFContainer = styled.div`
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  width: calc(100vw - 2rem);
  max-width: 28rem;
  padding: 2.5rem 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextInput = styled.input`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;
  border: 1px solid rgb(198, 211, 223);
  border-radius: 0.25rem;
  background-color: rgb(255, 255, 255);
  margin-bottom: 1.5rem;
  transition: all 0.2s ease 0s;
  :hover {
    border: 1px solid rgb(114, 142, 168);
  }
`;

// const CheckBox = styled.input`
//   display: inline-flex;
//   vertical-align: top;
//   -webkit-box-align: center;
//   align-items: center;
//   margin-bottom: 1.5rem;
//   align-self: flex-start;
// `;

const HR = styled.hr`
  text-align: center;
  border-top: 1px;
  color: #777;
  margin: 1rem 0 2rem 0;
  width: 100%;
`;

const SubmitButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  vertical-align: middle;
  outline: none;
  height: 3rem;
  min-width: 3rem;
  font-size: 1.125rem;
  padding: 0 1rem;
  background-color: rgb(83, 51, 170);
  border: 0px solid white;
  border-radius: 0.25rem;
  color: rgb(255, 255, 255);
  align-self: flex-end;
  transition: all 0.2s ease 0s;
  :hover {
    background-color: rgb(44, 26, 94);
  }
`;

export const UserForm = ({
  submit,
}: {
  submit: (user: string, password: string) => void;
}) => {
  const [newUser, setNewUser] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  return (
    <UFContainer>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          newUser.length > 5 && newPassword.length > 8
            ? submit(newUser, newPassword)
            : alert(
                "Usermane must be more than 5 characters and Password must be more than 8 characters"
              );
          submit(newUser, newPassword);
        }}
      >
        <TextInput
          type="text"
          placeholder="Username"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {/* <CheckBox type="checkbox" /> */}
        <HR />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </UFContainer>
  );
};
