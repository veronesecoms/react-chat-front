import { render, fireEvent, wait, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import BannerRightRecoveryPassword from './BannerRightRecoveryPassword';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { SnackbarProvider } from "notistack";

const renderWithHistory = () => {
	const history = createMemoryHistory();
	const wrapper = render(<SnackbarProvider>
    <Router history={history}>
      <BannerRightRecoveryPassword />
    </Router>
  </SnackbarProvider>);
	return { ...wrapper, history };
};

test("should show a success toastr when fill a valid email and click in the 'Receber Instruções' button", async() => {
  const { container, getByText } = renderWithHistory()
  act(() => {
    const inputEmail = container.querySelector("#recovery-user-email")!;
    fireEvent.change(inputEmail, {
      target: { value: "renatop@hotmail.com.br" },
    });
  })
  act(() => {
    const sendEmailButton = container.querySelector("#send-email-button")!;
    fireEvent.click(sendEmailButton);
  });
  await wait(() => {
    expect(getByText("Foi enviado um e-mail com as instruções para recuperação da senha")).toBeInTheDocument();
  });
})

test("should show a error label when try to click in 'Receber Instruções button without fill the email", async () => {
  const { container, getByText } = renderWithHistory();
  const sendEmailButton = container.querySelector("#send-email-button")!;
    fireEvent.click(sendEmailButton);
  await wait(() => {
    expect(getByText("Necessário informar o email")).toBeInTheDocument();
  });
})
