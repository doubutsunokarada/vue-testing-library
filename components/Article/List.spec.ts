import { render, screen, within } from "@testing-library/vue";
import List from "./List.vue";
import { expect, test } from "vitest";

const articles = [
  { id: 1, title: "1ばんめの記事だよ" },
  { id: 2, title: "WeWorkのエアコンは18:30で切れるよ" },
  { id: 3, title: "夏が近づいてきて暑くなってきたよ" },
];

test("一覧が表示されている", () => {
  render(List, { props: { articles } });
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
});

test("一覧が表示されず代替の文言が表示される", () => {
  render(List, { props: { articles: [] } });
  const list = screen.queryByRole("list");
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull();
  expect(screen.getByText("投稿記事がありません。")).toBeInTheDocument();
});
