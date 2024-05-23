import { expect, test } from "vitest";
import { render, screen } from "@testing-library/vue";
import Agreement from "./Agreement.vue";

/* 
NOTE:
<fieldset>は暗黙のロール名としてgroupを持ちます。
<legend>はfieldsetの最初の子要素である必要があり、groupのAccessible Nameを提供します。
*/
test("fieldsetのAccessible Nameがlegendを引用しているか", () => {
  render(Agreement);
  expect(screen.getByRole("group")).toHaveAccessibleName(/利用規約の同意/i);
});

test("checkboxの初期状態", () => {
  render(Agreement);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});
