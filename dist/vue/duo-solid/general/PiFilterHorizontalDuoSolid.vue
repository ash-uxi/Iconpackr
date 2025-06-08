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
    <path :fill="color || 'currentColor'" d="M13 3a4 4 0 0 0 0 8h1a4 4 0 0 0 0-8z" /> <path d="M3 7h7m6 10h5M20 7h1M3 17h3" opacity=".28" /> <path :fill="color || 'currentColor'" d="M9 13a4 4 0 0 0 0 8h1a4 4 0 0 0 0-8z" />
  </svg>
</template>

<script>
/**
 * PiFilterHorizontalDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiFilterHorizontalDuoSolid',
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
      default: 'filter-horizontal icon'
    }
  }
}
</script>
