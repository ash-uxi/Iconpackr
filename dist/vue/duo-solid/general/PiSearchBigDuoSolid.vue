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
    <path :fill="color || 'currentColor'" d="M11.5 2a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19" /> <path d="M17.51 17.51 21 21" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiSearchBigDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiSearchBigDuoSolid',
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
      default: 'search-big icon'
    }
  }
}
</script>
