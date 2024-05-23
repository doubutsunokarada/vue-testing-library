<template>
  <fieldset>
    <legend>利用規約の同意</legend>
    <label>
      <input type="checkbox" @change="onAgree" />
      当サービスの<a href="/tos">利用規約</a>を確認し、これに同意します。
    </label>
  </fieldset>
</template>

<script setup lang="ts">
interface Props {
  onAgree?: (event: Event) => void;
}
defineProps<Props>();
</script>
