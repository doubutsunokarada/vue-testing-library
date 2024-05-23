<template>
  <h1>アカウント情報</h1>
  <form @submit.prevent="onSubmit">
    <h2>アカウント名:</h2>
    <p>{{ name }}</p>
    <div><button type="submit">編集</button></div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  name?: string;
  onSubmit?: () => void;
}

const props = defineProps<Props>();

const name = ref(props.name ?? "Bob");
const onSubmit = props.onSubmit ?? (() => {});
</script>
