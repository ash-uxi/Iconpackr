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
    <path fill="currentColor" d="m5.496 4.314 5.388-1.946a3 3 0 0 1 2.038 0l5.465 1.974a3 3 0 0 1 1.972 2.591l.227 2.95A11 11 0 0 1 14.858 20.4l-1.49.806a3 3 0 0 1-2.914-.032l-1.52-.867A11 11 0 0 1 3.39 10.33l.127-3.31a3 3 0 0 1 1.98-2.705" opacity=".28"/>
  <path d="m5.496 4.314 5.388-1.946a3 3 0 0 1 2.038 0l5.465 1.974a3 3 0 0 1 1.972 2.591l.227 2.95A11 11 0 0 1 14.858 20.4l-1.49.806a3 3 0 0 1-2.914-.032l-1.52-.867A11 11 0 0 1 3.39 10.33l.127-3.31a3 3 0 0 1 1.98-2.705"/>
  </svg>
</template>

<script>
/**
 * PiShieldContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiShieldContrast',
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
      default: 'shield icon'
    }
  }
}
</script>
