import { render, fireEvent, wait, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BannerRightLogin from "./BannerRightLogin";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { SnackbarProvider } from "notistack";

const renderWithHistory = () => {
	const history = createMemoryHistory();
	const wrapper = render(<SnackbarProvider>
    <Router history={history}>
      <BannerRightLogin />
    </Router>
  </SnackbarProvider>);
	return { ...wrapper, history };
};

test("should login user when all fields are filled succesfully", async () => {
  const {container} = renderWithHistory()
  act(() => {
    const inputEmail = container.querySelector("#login-user-email")!;
    fireEvent.change(inputEmail, {
      target: { value: "renatop@hotmail.com.br" },
    });
    const inputPassword = container.querySelector("#login-user-password")!;
    fireEvent.change(inputPassword, {
      target: { value: "123" },
    });
  });
  act(() => {
    const loginButton = container.querySelector("#login-button")!;
    fireEvent.click(loginButton);
  });
  await wait(() => {
    expect(localStorage.getItem("token")).toBe("token");
  });
});

test("should show a label error when click in 'Entrar' button without fill the email", async () => {
  const {container, getByText} = renderWithHistory()
  const loginButton = container.querySelector("#login-button")!;
  fireEvent.click(loginButton);
  await wait(() => {
    expect(getByText("Necessário informar o email")).toBeInTheDocument();
  });
});

test("should show a label error when click in 'Entrar' button without fill the password", async () => {
  const {container, getByText} = renderWithHistory()
  const loginButton = container.querySelector("#login-button")!;
  fireEvent.click(loginButton);
  await wait(() => {
    expect(getByText("Necessário informar a senha!")).toBeInTheDocument();
  });
});

test("should show a label error when click in 'Entrar' button without fill a valid email", async () => {
  const {container, getByText} = renderWithHistory()
  act(() => {
    const inputEmail = container.querySelector("#login-user-email")!;
    fireEvent.change(inputEmail, {
      target: { value: "renatop@" },
    });
  });
  const loginButton = container.querySelector("#login-button")!;
  fireEvent.click(loginButton);
  await wait(() => {
    expect(getByText("Email não possui formato válido")).toBeInTheDocument();
  });
});
