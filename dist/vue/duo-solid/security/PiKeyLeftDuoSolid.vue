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
    <path :fill="color || 'currentColor'" d="M18 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10" /> <path d="M6 12H2v3m4-3h8m-8 0v2" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiKeyLeftDuoSolid icon from the duo-solid style in security category.
 */
export default {
  name: 'PiKeyLeftDuoSolid',
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
      default: 'key-left icon'
    }
  }
}
</script>
