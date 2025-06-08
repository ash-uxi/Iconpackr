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
    <path d="M14.95 14.95a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9m0 0L21 21M7.001 10h6"/>
  <path fill="currentColor" d="M17 10a6.98 6.98 0 0 1-2.05 4.95A7 7 0 1 1 17 10" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiSearchDefaultZoomOutContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiSearchDefaultZoomOutContrast',
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
      default: 'search-default-zoom-out icon'
    }
  }
}
</script>
