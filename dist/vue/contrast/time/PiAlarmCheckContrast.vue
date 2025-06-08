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
    <path fill="currentColor" d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity=".28"/>
  <path d="M5 3 2 6m17-3 3 3M9 13.285l2.007 2.005A13.06 13.06 0 0 1 15 11m5 2a8 8 0 1 1-16 0 8 8 0 0 1 16 0"/>
  </svg>
</template>

<script>
/**
 * PiAlarmCheckContrast icon from the contrast style in time category.
 */
export default {
  name: 'PiAlarmCheckContrast',
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
      default: 'alarm-check icon'
    }
  }
}
</script>
