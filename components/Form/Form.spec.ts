import { render, screen } from "@testing-library/vue";
import { userEvent } from "@testing-library/user-event";
import Form from "./Form.vue";
import { expect, test, vi } from "vitest";

test("名前の表示", () => {
  render(Form, { props: { name: "Taro" } });
  expect(screen.getByText("Taro")).toBeInTheDocument();
});

test("見出しの表示", () => {
  render(Form);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
});

test("buttonの表示", () => {
  render(Form);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("見出しのテキスト", () => {
  render(Form);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "アカウント情報"
  );
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    "アカウント名:"
  );
});

test("onSubmitの呼び出し", async () => {
  const fn = vi.fn();
  const user = userEvent.setup();
  render(Form, { props: { name: "", onSubmit: fn } });
  await user.click(screen.getByRole("button"));
  expect(fn).toHaveBeenCalled();
});

test("Taroの表示", () => {
  // const { container } = render(Form, { props: { name: "Taro" } });
  // Regression
  const { container } = render(Form, { props: { name: "Hoge" } });
  expect(container).toMatchSnapshot();
});
