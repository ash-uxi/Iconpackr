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
    <path d="M12 13v8m0 0h5.5M12 21H7" opacity=".28" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M3 3a1 1 0 0 0-.707 1.707l9 9a1 1 0 0 0 1.414 0l9-9A1 1 0 0 0 21 3zm3.447 3.033L5.414 5h13.172l-1.033 1.033a71 71 0 0 1-11.106 0" clip-rule="evenodd" />
  </svg>
</template>

<script>
/**
 * PiMartiniGlassDuoSolid icon from the duo-solid style in food category.
 */
export default {
  name: 'PiMartiniGlassDuoSolid',
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
      default: 'martini-glass icon'
    }
  }
}
</script>
