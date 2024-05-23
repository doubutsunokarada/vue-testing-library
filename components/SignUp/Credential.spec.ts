import { expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Credential from "./Credential.vue";

const user = userEvent.setup();

test("メールアドレスの入力", async () => {
  render(Credential);
  const email = screen.getByRole("textbox", { name: /メールアドレス/i });
  const value = "j_doe@example.com";
  await user.type(email, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

/*
NOTE:
<input type="password" />はロールを持たないため、placeholderのテキストなどを利用してテストを行う
*/
test("パスワード入力欄の表示", async () => {
  render(Credential);
  expect(() => screen.getByRole("textbox", { name: /パスワード/i })).toThrow();
  expect(() =>
    screen.getByPlaceholderText(/8文字以上で入力してください。/i)
  ).not.toThrow();
});

test("パスワードの入力", async () => {
  render(Credential);
  const password =
    screen.getByPlaceholderText(/8文字以上で入力してください。/i);
  const value = "password";
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});
