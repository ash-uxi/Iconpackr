<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M17 17V7H7V17L17 17Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M21 17H17V21M17 3V7H21M3 7L7 7V3M7 21V17H3" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiFrameDuoStroke icon from the duo-stroke style in editing category.
 */
export default {
  name: 'PiFrameDuoStroke',
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
      default: 'frame icon'
    }
  }
}
</script>
