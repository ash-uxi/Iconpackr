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
    <path :fill="color || 'currentColor'" d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15 5.605 0 10.15-4.544 10.15-10.15S17.605 1.85 12 1.85" opacity=".28" /> <path d="M8.9 15.1 12 12m0 0 3.1-3.1M12 12 8.9 8.9M12 12l3.1 3.1" />
  </svg>
</template>

<script>
/**
 * PiMultipleCrossCancelCircleDuoSolid icon from the duo-solid style in maths category.
 */
export default {
  name: 'PiMultipleCrossCancelCircleDuoSolid',
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
      default: 'multiple-cross-cancel-circle icon'
    }
  }
}
</script>
