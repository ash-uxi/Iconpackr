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
    <g fill="currentColor" opacity=".28">
    <path d="M17 10a3 3 0 0 1 3 3v1a3 3 0 1 1-6 0v-1a3 3 0 0 1 3-3M7 6a3 3 0 0 1 3 3v1a3 3 0 1 1-6 0V9a3 3 0 0 1 3-3"/>
  </g>
  <path d="M17 3v7m0 0a3 3 0 0 0-3 3v1a3 3 0 1 0 6 0v-1a3 3 0 0 0-3-3M7 16v5m10-1v1M7 3v3m0 0a3 3 0 0 0-3 3v1a3 3 0 1 0 6 0V9a3 3 0 0 0-3-3"/>
  </svg>
</template>

<script>
/**
 * PiFilterVerticalContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiFilterVerticalContrast',
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
      default: 'filter-vertical icon'
    }
  }
}
</script>
