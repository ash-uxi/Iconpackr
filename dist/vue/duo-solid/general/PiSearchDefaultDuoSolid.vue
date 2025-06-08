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
    <path :fill="color || 'currentColor'" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" /> <path d="M14.95 14.95 21 21" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiSearchDefaultDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiSearchDefaultDuoSolid',
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
      default: 'search-default icon'
    }
  }
}
</script>
