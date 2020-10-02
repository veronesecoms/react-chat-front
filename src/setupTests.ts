import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom/extend-expect";

const server = setupServer(
  rest.put(
    "http://localhost:3100/users/emailRecoveryPassword/renatop@hotmail.com.br",
    (req, res, ctx) => {
      return res(
        ctx.json({
          message:
            "Foi enviado um e-mail com as instruções para recuperação da senha",
        }),
        ctx.status(200)
      );
    }
  ),
  rest.post("http://localhost:3100/users", (req, res, ctx) => {
    return res(
      ctx.json({ message: "Usuário registrado com sucesso!" }),
      ctx.status(200)
    );
  }),
  rest.post("http://localhost:3100/auth/login", (req, res, ctx) => {
    return res(
      ctx.json({
        token: "token",
        data: {
          email: "renatop@hotmail.com.br",
          first_name: "renatop",
          picture: "somedatabase64",
        },
      }),
      ctx.status(200)
    );
  })
);

beforeAll(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
