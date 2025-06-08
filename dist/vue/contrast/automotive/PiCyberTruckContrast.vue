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
    <path fill="currentColor" d="m22.5 10-.5 5h-2a2 2 0 1 0-4 0H8a2 2 0 1 0-4 0H1v-3l9-5z" opacity=".28"/>
  <path d="M8 15a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h8M4 15H1v-3l9-5 12.5 3-.5 5h-2m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0"/>
  </svg>
</template>

<script>
/**
 * PiCyberTruckContrast icon from the contrast style in automotive category.
 */
export default {
  name: 'PiCyberTruckContrast',
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
      default: 'cyber-truck icon'
    }
  }
}
</script>
