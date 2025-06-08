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
    <path d="M19 5.01V5M11 10.01V10M10 16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15C9.55228 15 10 15.4477 10 16ZM19 11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11C17 10.4477 17.4477 10 18 10C18.5523 10 19 10.4477 19 11Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M21 21H7C4.79086 21 3 19.2091 3 17V3" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphBubblechartDuoStroke icon from the duo-stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphBubblechartDuoStroke',
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
      default: 'graph-bubblechart icon'
    }
  }
}
</script>
