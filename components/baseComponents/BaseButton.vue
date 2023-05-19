<template>
  <button
    class="btn"
    :class="'btn-' + variant"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
    type: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.btn {
  @apply p-2 rounded border-2 text-slate-50 m-0;
}

.btn.btn-primary {
  @apply border-red-600 bg-red-600
    hover:border-red-700 hover:bg-red-700
    disabled:border-red-400 disabled:bg-red-400;
}

.btn.btn-primary-outline {
  @apply border-red-600 bg-transparent text-slate-900
  hover:bg-red-600 hover:text-slate-50
  disabled:bg-red-400 disabled:border-red-400 disabled:text-slate-50;
}

.btn.btn-secondary {
  @apply border-slate-600 bg-slate-600
  hover:border-slate-700 hover:bg-slate-700
  disabled:border-slate-400 disabled:bg-slate-400;
}

.btn.btn-secondary-outline {
  @apply border-slate-600 bg-transparent text-slate-900
  hover:bg-slate-600 hover:text-slate-50
  disabled:bg-slate-400 disabled:border-slate-400 disabled:text-slate-50;
}
</style>
