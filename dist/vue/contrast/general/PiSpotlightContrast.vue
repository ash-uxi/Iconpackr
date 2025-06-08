<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path fill="currentColor" d="M23 20.5c0 .828-3.134 2-7 2s-7-1.172-7-2 3.134-2 7-2c2.663 0 4.979.556 6.162 1.173.535.278.838.57.838.827" opacity=".28"/>
  <path d="M9 20.5c0 .828 3.134 2 7 2s7-1.172 7-2c0-.258-.304-.549-.838-.828M9 20.5c0-.829 3.134-2 7-2 2.663 0 4.979.556 6.162 1.172M9 20.5 4.718 10m4.61-3 12.834 12.673M5.467 2.68 6.614 4.32 3.337 6.614 2.19 4.975a2 2 0 0 1 3.277-2.294"/>
  <rect width="24" height="24" fill="currentColor"/>
  </svg>
</template>

<script>
/**
 * PiSpotlightContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiSpotlightContrast',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: undefined
    },
    className: {
      type: String,
      default: undefined
    },
    ariaLabel: {
      type: String,
      default: 'spotlight icon'
    }
  }
}
</script>
