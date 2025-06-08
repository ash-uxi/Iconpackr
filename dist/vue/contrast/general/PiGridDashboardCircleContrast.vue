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
    <path d="M3 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
  </g>
  <path d="M14 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M14 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 17.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 6.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
  </svg>
</template>

<script>
/**
 * PiGridDashboardCircleContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiGridDashboardCircleContrast',
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
      default: 'grid-dashboard-circle icon'
    }
  }
}
</script>
