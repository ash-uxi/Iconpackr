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
    <path d="M17.0003 10L16.2395 13.8039C16.1157 14.4227 16.589 15 17.2201 15H21.0003M21.0003 15V12M21.0003 15V18" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 12H12M4 18V6M12 18V6" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiHeadingH4DuoStroke icon from the duo-stroke style in editing category.
 */
export default {
  name: 'PiHeadingH4DuoStroke',
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
      default: 'heading-h4 icon'
    }
  }
}
</script>
