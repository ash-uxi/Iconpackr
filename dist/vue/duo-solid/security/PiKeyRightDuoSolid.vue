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
    <path d="M18 12h4v3m-4-3h-8m8 0v2" opacity=".28" /> <path :fill="color || 'currentColor'" d="M6 7a5 5 0 1 1 0 10A5 5 0 0 1 6 7" />
  </svg>
</template>

<script>
/**
 * PiKeyRightDuoSolid icon from the duo-solid style in security category.
 */
export default {
  name: 'PiKeyRightDuoSolid',
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
      default: 'key-right icon'
    }
  }
}
</script>
