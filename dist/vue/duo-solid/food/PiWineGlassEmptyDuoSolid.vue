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
    <path d="M12 13v9m0 0h4m-4 0H8" opacity=".28" /> <path :fill="color || 'currentColor'" d="M7.302 1a1 1 0 0 0-.868.502A11 11 0 0 0 5 6.89C5 10.767 7.8 14 12 14s7-3.233 7-7.111c0-1.914-.535-3.82-1.434-5.387A1 1 0 0 0 16.698 1z" />
  </svg>
</template>

<script>
/**
 * PiWineGlassEmptyDuoSolid icon from the duo-solid style in food category.
 */
export default {
  name: 'PiWineGlassEmptyDuoSolid',
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
      default: 'wine-glass-empty icon'
    }
  }
}
</script>
