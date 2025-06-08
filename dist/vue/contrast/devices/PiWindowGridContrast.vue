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
    <path d="M10 14v2H7v-2zm7 0v2h-3v-2zm-7-6v2H7V8zm7 0v2h-3V8z"/>
  <path d="M21 17V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3"/>
  <rect width="16" height="18" x="21" y="4" fill="currentColor" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiWindowGridContrast icon from the contrast style in devices category.
 */
export default {
  name: 'PiWindowGridContrast',
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
      default: 'window-grid icon'
    }
  }
}
</script>
