<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseCard",
});
</script>

<style scoped>
.card {
  @apply border rounded p-2;
}
</style>
