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
    <path fill="currentColor" d="M17 4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4" opacity=".28"/>
  <path d="M6.754 8.75v3.5m0 0h3.5m-3.5 0v3m3.5-3v-3.5m0 3.5v3m5.168-.923v1.531M7 4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4m6.754 6.298a1.75 1.75 0 1 1 3.5 0v2.28a1.75 1.75 0 0 1-3.5 0z"/>
  </svg>
</template>

<script>
/**
 * PiResolutionQualityHqContrast icon from the contrast style in media category.
 */
export default {
  name: 'PiResolutionQualityHqContrast',
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
      default: 'resolution-quality-hq icon'
    }
  }
}
</script>
