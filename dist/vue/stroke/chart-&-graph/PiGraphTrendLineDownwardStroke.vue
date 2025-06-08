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
    <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3M7 9.60389L7.61026 11.4347C8.35529 13.6698 11.5295 13.6328 12.2224 11.3811C12.8649 9.29285 15.7261 9.05606 16.7032 11.0102L19.166 15.9359M19.166 15.9359C19.2863 15.8756 19.3865 15.775 19.4454 15.6449C19.8807 14.6825 20.196 13.6695 20.3837 12.6288M19.166 15.9359C19.0457 15.9963 18.9052 16.0165 18.7657 15.9859C17.734 15.7595 16.7335 15.4067 15.787 14.9351" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphTrendLineDownwardStroke icon from the stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphTrendLineDownwardStroke',
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
      default: 'graph-trend-line-downward icon'
    }
  }
}
</script>
