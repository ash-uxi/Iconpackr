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
    <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3" stroke="currentColor" stroke-width="2" fill="none"/>
  <circle cx="14" cy="12" r="1" stroke="currentColor" stroke-width="2" fill="none"/>
  <circle cx="18" cy="5" r="1" stroke="currentColor" stroke-width="2" fill="none"/>
  <circle cx="19" cy="16" r="1" stroke="currentColor" stroke-width="2" fill="none"/>
  <circle cx="8" cy="16" r="1" stroke="currentColor" stroke-width="2" fill="none"/>
  <circle cx="9" cy="8" r="1" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphChartScatterStroke icon from the stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartScatterStroke',
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
      default: 'graph-chart-scatter icon'
    }
  }
}
</script>
