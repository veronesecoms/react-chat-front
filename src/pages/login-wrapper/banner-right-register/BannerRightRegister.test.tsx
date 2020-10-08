import { render, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import BannerRightRegister from './BannerRightRegister';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { SnackbarProvider } from 'notistack';

const renderWithHistory = () => {
  const history = createMemoryHistory();
  const wrapper = render(
    <SnackbarProvider>
      <Router history={history}>
        <BannerRightRegister />
      </Router>
    </SnackbarProvider>
  );
  return { ...wrapper, history };
};

test('should register user successfully when all fields is correctly filled', async () => {
  const { container, getByText } = renderWithHistory();
  const inputName = container.querySelector('#register-user-first-name')!;
  fireEvent.change(inputName, {
    target: { value: 'Renato' },
  });
  const inputSecondName = container.querySelector(
    '#register-user-second-name'
  )!;
  fireEvent.change(inputSecondName, {
    target: { value: 'Veronese' },
  });
  const inputEmail = container.querySelector('#register-user-email')!;
  fireEvent.change(inputEmail, {
    target: { value: 'renatop@hotmail.com.br' },
  });
  const inputPassword = container.querySelector('#register-user-password')!;
  fireEvent.change(inputPassword, {
    target: { value: 'renatop' },
  });
  const inputConfirmationPassword = container.querySelector(
    '#register-user-confirmation-password'
  )!;
  fireEvent.change(inputConfirmationPassword, {
    target: { value: 'renatop' },
  });
  const registerButton = container.querySelector('#register-button')!;
  fireEvent.click(registerButton);
  await waitFor(() => {
    expect(getByText('Usuário registrado com sucesso!')).toBeInTheDocument();
  });
});

test("should show a error label when click in 'Criar Conta' button and don't fill the user name", async () => {
  const { container, getByText } = renderWithHistory();
  const registerButton = container.querySelector('#register-button')!;
  fireEvent.click(registerButton);
  await waitFor(() => {
    expect(getByText('Necessário informar seu nome')).toBeInTheDocument();
  });
});

test("should show a error label when click in 'Criar Conta' button and don't fill the user second_name", async () => {
  const { container, getByText } = renderWithHistory();
  const registerButton = container.querySelector('#register-button')!;
  fireEvent.click(registerButton);
  await waitFor(() => {
    expect(getByText('Necessário informar seu sobrenome')).toBeInTheDocument();
  });
});

test("should show a error label when click in 'Criar Conta' button and don't fill the user email", async () => {
  const { container, getByText } = renderWithHistory();
  const registerButton = container.querySelector('#register-button')!;
  fireEvent.click(registerButton);
  await waitFor(() => {
    expect(getByText('Necessário informar o email')).toBeInTheDocument();
  });
});

test("should show a error label when click in 'Criar Conta' button and don't fill the password", async () => {
  const { container, getByText } = renderWithHistory();
  const registerButton = container.querySelector('#register-button')!;
  fireEvent.click(registerButton);
  await waitFor(() => {
    expect(getByText('Necessário informar a senha!')).toBeInTheDocument();
  });
});

test("should show a error label when click in 'Criar Conta' button and don't fill the password_confirmation", async () => {
  const { container, getByText } = renderWithHistory();
  const registerButton = container.querySelector('#register-button')!;
  fireEvent.click(registerButton);
  await waitFor(() => {
    expect(
      getByText('Necessário informar a confirmação da senha')
    ).toBeInTheDocument();
  });
});

test("should show a error label when click in 'Criar Conta' button and fill a invalid email", async () => {
  const { container, getByText } = renderWithHistory();
  act(() => {
    const inputEmail = container.querySelector('#register-user-email')!;
    fireEvent.change(inputEmail, {
      target: { value: 'renatop@' },
    });
  });
  const registerButton = container.querySelector('#register-button')!;
  fireEvent.click(registerButton);
  await waitFor(() => {
    expect(getByText('Email não possui formato válido')).toBeInTheDocument();
  });
});

test("should show a error label when click in 'Criar Conta' button and password and confirmation password don't match", async () => {
  const { container, getByText } = renderWithHistory();
  const inputPassword = container.querySelector('#register-user-password')!;
  fireEvent.change(inputPassword, {
    target: { value: 'renatop123' },
  });
  const inputConfirmationPassword = container.querySelector(
    '#register-user-confirmation-password'
  )!;
  fireEvent.change(inputConfirmationPassword, {
    target: { value: 'renatop' },
  });

  const registerButton = container.querySelector('#register-button')!;
  fireEvent.click(registerButton);
  await waitFor(() => {
    expect(
      getByText('Confirmação de senha deve ser igual a senha.')
    ).toBeInTheDocument();
  });
});
