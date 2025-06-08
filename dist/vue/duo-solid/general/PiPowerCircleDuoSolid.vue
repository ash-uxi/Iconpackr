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
    <path d="M12 7v5m4-3A5 5 0 1 1 8 9" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15S22.15 17.605 22.15 12 17.606 1.85 12 1.85" clip-rule="evenodd" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiPowerCircleDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiPowerCircleDuoSolid',
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
      default: 'power-circle icon'
    }
  }
}
</script>
