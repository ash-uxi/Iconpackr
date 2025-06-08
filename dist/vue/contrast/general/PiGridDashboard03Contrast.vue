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
    <path d="M3 6.5a3.5 3.5 0 1 1 7 0V10H6.5A3.5 3.5 0 0 1 3 6.5M3 17.5A3.5 3.5 0 0 1 6.5 14H10v3.5a3.5 3.5 0 1 1-7 0M14 6.5a3.5 3.5 0 1 1 3.5 3.5H14zM14 14h3.5a3.5 3.5 0 1 1-3.5 3.5z"/>
  </g>
  <path d="M14 14h3.5a3.5 3.5 0 1 1-3.5 3.5zM14 6.5a3.5 3.5 0 1 1 3.5 3.5H14zM3 17.5A3.5 3.5 0 0 1 6.5 14H10v3.5a3.5 3.5 0 1 1-7 0M3 6.5a3.5 3.5 0 1 1 7 0V10H6.5A3.5 3.5 0 0 1 3 6.5"/>
  </svg>
</template>

<script>
/**
 * PiGridDashboard03Contrast icon from the contrast style in general category.
 */
export default {
  name: 'PiGridDashboard03Contrast',
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
      default: 'grid-dashboard-03 icon'
    }
  }
}
</script>
