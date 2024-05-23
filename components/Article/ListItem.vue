<template>
  <h3>{{ article.title }}</h3>
  <a :href="`/article/${article.id}`">続きを読む</a>
</template>

<script setup lang="ts">
import type { Article } from "./types";

interface Props {
  article: Article;
}
defineProps<Props>();
</script>
