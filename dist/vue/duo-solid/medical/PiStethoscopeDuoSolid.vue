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
    <path d="M10.5 3.012a2.5 2.5 0 0 1 2.5 2.5v1.684c0 1.82-.638 3.581-1.803 4.979l-.245.295A3.82 3.82 0 0 1 8 13.852M5.5 3.012a2.5 2.5 0 0 0-2.5 2.5v1.684c0 1.82.638 3.581 1.803 4.979l.245.295A3.82 3.82 0 0 0 8 13.852m0 0v1.66a5.5 5.5 0 1 0 11 0v-1.5" opacity=".28" /> <path :fill="color || 'currentColor'" d="M10.5 2.012a1 1 0 1 0 0 2c.49 0 .925.234 1.2.6a1 1 0 1 0 1.6-1.201 3.5 3.5 0 0 0-2.8-1.4M19 8.012a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M4.3 4.612c.275-.366.71-.6 1.2-.6a1 1 0 0 0 0-2A3.5 3.5 0 0 0 2.7 3.41a1 1 0 0 0 1.6 1.201" />
  </svg>
</template>

<script>
/**
 * PiStethoscopeDuoSolid icon from the duo-solid style in medical category.
 */
export default {
  name: 'PiStethoscopeDuoSolid',
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
      default: 'stethoscope icon'
    }
  }
}
</script>
