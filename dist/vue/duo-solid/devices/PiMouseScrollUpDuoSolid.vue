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
    <path :fill="color || 'currentColor'" d="M12 2a8 8 0 0 0-8 8v4a8 8 0 1 0 16 0v-4a8 8 0 0 0-8-8" opacity=".28" /> <path d="M14 10.5a10 10 0 0 0-1.704-1.77.47.47 0 0 0-.592 0A10 10 0 0 0 10 10.5" />
  </svg>
</template>

<script>
/**
 * PiMouseScrollUpDuoSolid icon from the duo-solid style in devices category.
 */
export default {
  name: 'PiMouseScrollUpDuoSolid',
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
      default: 'mouse-scroll-up icon'
    }
  }
}
</script>
