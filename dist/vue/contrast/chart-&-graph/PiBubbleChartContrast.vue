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
    <path d="M20 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M9 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0M15.5 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  </g>
  <path d="M15.5 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M9 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </svg>
</template>

<script>
/**
 * PiBubbleChartContrast icon from the contrast style in chart-&-graph category.
 */
export default {
  name: 'PiBubbleChartContrast',
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
      default: 'bubble-chart icon'
    }
  }
}
</script>
