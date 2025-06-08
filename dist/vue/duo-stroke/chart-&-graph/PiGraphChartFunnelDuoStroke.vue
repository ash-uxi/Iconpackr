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
    <rect x="1.5" y="4" width="20" height="1" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <rect x="10.5" y="19" width="2" height="1" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <rect x="4.5" y="9" width="14" height="1" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <rect x="7.5" y="14" width="8" height="1" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphChartFunnelDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartFunnelDuoStroke',
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
      default: 'graph-chart-funnel icon'
    }
  }
}
</script>
