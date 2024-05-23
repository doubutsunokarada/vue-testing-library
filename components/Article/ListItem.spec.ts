import { expect, test } from "vitest";
import type { Article } from "./types";
import { render, screen } from "@testing-library/vue";
import ListItem from "./ListItem.vue";

const article: Article = { id: 1, title: "テスト用記事タイトル" };

test("IDを用いたリンクの表示", () => {
  render(ListItem, { props: { article } });
  expect(screen.getByRole("link", { name: /続きを読む/i })).toHaveAttribute(
    "href",
    `/article/${article.id}`
  );
});
