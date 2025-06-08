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
    <path :fill="color || 'currentColor'" d="M14 7a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0zM4 7a3 3 0 0 1 6 0v8a3 3 0 1 1-6 0z" /> <path d="M9 11h6M5 9H4a2 2 0 1 0 0 4h1m14 0h1a2 2 0 1 0 0-4h-1" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiDumbbellDuoSolid icon from the duo-solid style in sports category.
 */
export default {
  name: 'PiDumbbellDuoSolid',
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
      default: 'dumbbell icon'
    }
  }
}
</script>
