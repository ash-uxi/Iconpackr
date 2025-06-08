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
    <path :fill="color || 'currentColor'" d="M19 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" /> <path d="M2 14a5 5 0 0 1 5 5v-1a9 9 0 0 1 5.237-8.178" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiAnimation02DuoSolid icon from the duo-solid style in media category.
 */
export default {
  name: 'PiAnimation02DuoSolid',
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
      default: 'animation-02 icon'
    }
  }
}
</script>
