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
    <path d="M19.3733 16.0688L20.8002 18.7042C21.3733 19.7627 20.645 21.0767 19.4851 21.0767H4.51494C3.35501 21.0767 2.62665 19.7628 3.19979 18.7042L4.62669 16.0688M19.3733 16.0688H4.62669M19.3733 16.0688L16.6661 11.0688M4.62669 16.0688L7.33391 11.0688M16.6661 11.0688L13.3151 4.87994C12.7352 3.8089 11.2648 3.8089 10.6848 4.87994L7.33391 11.0688M16.6661 11.0688H7.33391" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphChartPyramidStroke icon from the stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphChartPyramidStroke',
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
      default: 'graph-chart-pyramid icon'
    }
  }
}
</script>
