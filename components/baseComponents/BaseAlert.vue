<template>
  <div class="alert" :class="variant">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseAlert",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
  },
});
</script>

<style scoped>
.alert {
  @apply border-2 rounded p-2 bg-opacity-50;
}

.alert.primary {
  @apply border-red-600 bg-red-400 text-red-600 bg-opacity-50;
}

.alert.secondary {
  @apply border-slate-600 bg-slate-400 text-slate-600 bg-opacity-50;
}

.alert.warning {
  @apply border-yellow-600 bg-yellow-400 text-yellow-600 bg-opacity-50;
}

.alert.success {
  @apply border-green-600 bg-green-400 text-green-600 bg-opacity-50;
}
</style>
