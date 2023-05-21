<template>
  <div class="progressbar" :class="`${variant} ${animate ? 'animate' : ''}`">
    <div
      class="progress"
      :style="'--width: ' + (value / (max - min)) * 100 + '%'"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseProgress",
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 100,
    },
    variant: {
      type: String,
      default: "primary",
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.progressbar {
  @apply h-4 rounded text-slate-50 overflow-hidden bg-slate-100;
}

.progressbar .progress {
  @apply h-full;

  width: var(--width);
  background-size: 30px 30px;
  animation: progress-bar-stripes 1.5s linear infinite;

  @keyframes progress-bar-stripes {
    from {
      background-position: 60px 30px;
    }

    to {
      background-position: 0 0;
    }
  }
}

.progressbar.primary .progress {
  @apply bg-red-600;
}

.progressbar.primary.animate .progress {
  background-image: linear-gradient(
    45deg,
    #dc2626 25%,
    #ef4444 25%,
    #ef4444 50%,
    #dc2626 50%,
    #dc2626 75%,
    #ef4444 75%,
    #ef4444
  );
}

.progressbar.secondary .progress {
  @apply bg-slate-600;
}

.progressbar.secondary.animate .progress {
  background-image: linear-gradient(
    45deg,
    #475569 25%,
    #64748b 25%,
    #64748b 50%,
    #475569 50%,
    #475569 75%,
    #64748b 75%,
    #64748b
  );
}

.progressbar.yellow .progress {
  @apply bg-yellow-500;
}

.progressbar.yellow.animate .progress {
  background-image: linear-gradient(
    45deg,
    #eab308 25%,
    #facc15 25%,
    #facc15 50%,
    #eab308 50%,
    #eab308 75%,
    #facc15 75%,
    #facc15
  );
}

.progressbar.green .progress {
  @apply bg-green-600;
}

.progressbar.green.animate .progress {
  background-image: linear-gradient(
    45deg,
    #16a34a 25%,
    #22c55e 25%,
    #22c55e 50%,
    #16a34a 50%,
    #16a34a 75%,
    #22c55e 75%,
    #22c55e
  );
}
</style>
