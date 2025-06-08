<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M17 3v7m0 10v1M7 3v3m0 10v5" opacity=".28" /> <path :fill="color || 'currentColor'" d="M17 9a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0v-1a4 4 0 0 0-4-4M7 5a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V9a4 4 0 0 0-4-4" />
  </svg>
</template>

<script>
/**
 * PiFilterVerticalDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiFilterVerticalDuoSolid',
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
      default: 'filter-vertical icon'
    }
  }
}
</script>
