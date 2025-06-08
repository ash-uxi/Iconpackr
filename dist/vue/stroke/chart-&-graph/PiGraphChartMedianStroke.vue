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
    <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M7 7L7.22319 6.72367C8.61414 5.00154 11.3274 5.32747 12.2709 7.33003L15.7291 14.67C16.6726 16.6725 19.3859 16.9985 20.7768 15.2763L21 15M14 14V14.01M14 17V17.01M14 5V5.01M14 8V8.01" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphChartMedianStroke icon from the stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartMedianStroke',
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
      default: 'graph-chart-median icon'
    }
  }
}
</script>
