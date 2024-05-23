<template>
  <form :aria-labelledby="tabsId">
    <h2 :id="tabsId">新規登録</h2>
    <Credential />
    <Agreement
      :on-agree="
        (e) => {
          if (!e || !e.currentTarget) return;
          checked = (e.currentTarget as HTMLInputElement).checked;
        }
      "
    />
    <div>
      <button
        type="submit"
        :disabled="!checked"
        @click="(e) => e.preventDefault()"
      >
        サインアップ
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useId } from "../composables/useId";
import Agreement from "./Agreement.vue";
import Credential from "./Credential.vue";
import { ref } from "vue";

const tabsId = useId();
const checked = ref<boolean>(false);
</script>
