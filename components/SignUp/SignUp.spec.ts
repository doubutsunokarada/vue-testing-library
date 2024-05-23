import { expect, test } from "vitest";
import SignUp from "./SignUp.vue";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("サインアップボタンは非活性であるか", () => {
  render(SignUp);
  expect(screen.getByRole("button", { name: /サインアップ/i })).toBeDisabled();
});

test("利用規約の同意でサインアップボタンが活性化するか", async () => {
  render(SignUp);
  await user.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: /サインアップ/i })).toBeEnabled();
});

/*
NOTE:
このformのAccessible Nameはaria-labelledbyにh2のIDを指定することで提供されます。
IDはユニークな値でなければならない。
*/
test("formのAccessible Nameがh2を引用しているか", () => {
  render(SignUp);
  expect(screen.getByRole("form")).toHaveAccessibleName(/新規登録/i);
});
