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
    <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M7 17C7.82746 11.8168 10.6479 8 14 8C17.3521 8 20.1725 11.8168 21 17M8 5H8.01M11 5H11.01M17 5H17.01M20 5H20.01M13.99 5H14" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphChartMaximumDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartMaximumDuoStroke',
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
      default: 'graph-chart-maximum icon'
    }
  }
}
</script>
