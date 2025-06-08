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
    <path d="M2.5 3V5M2.5 10V8V6M20.5 3V10M2.5 5V6M2.5 5H20.5M2.5 6H20.5" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M20.5 17V19M20.5 21V19M2.5 8H4.11484C7.36729 8 10.2921 10.9802 11.5 14C12.7079 17.0198 15.6327 19 18.8852 19H20.5" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphChartSankeyDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartSankeyDuoStroke',
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
      default: 'graph-chart-sankey icon'
    }
  }
}
</script>
