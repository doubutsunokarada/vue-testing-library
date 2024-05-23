<template>
  <h1>記事一覧</h1>
  <ul v-if="articles.length > 0">
    <li v-for="article in articles" :key="article.id">
      <ListItem :article="article" />
    </li>
  </ul>
  <p v-else>投稿記事がありません。</p>
</template>

<script setup lang="ts">
import ListItem from "./ListItem.vue";
import type { Article } from "./types";

interface Props {
  articles: Article[];
}
defineProps<Props>();
</script>
