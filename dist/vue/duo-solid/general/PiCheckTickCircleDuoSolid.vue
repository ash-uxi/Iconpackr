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
    <path :fill="color || 'currentColor'" d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15 22.15 17.606 22.15 12 17.606 1.85 12 1.85" opacity=".28" /> <path d="m8.5 12.512 2.341 2.339A15 15 0 0 1 15.4 9.915l.101-.069" />
  </svg>
</template>

<script>
/**
 * PiCheckTickCircleDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiCheckTickCircleDuoSolid',
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
      default: 'check-tick-circle icon'
    }
  }
}
</script>
