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
  <path d="M7 7L11 7M7 12L18 12M7 17L15 17" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGraphBarLineHorizontalStroke icon from the stroke style in chart-&-graph category.
 */
export default {
  name: 'PiGraphBarLineHorizontalStroke',
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
      default: 'graph-bar-line-horizontal icon'
    }
  }
}
</script>
