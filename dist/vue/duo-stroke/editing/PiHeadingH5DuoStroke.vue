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
    <path d="M20.5 10H17.5C16.6716 10 16 10.6716 16 11.5V14H19C20.1046 14 21 14.8954 21 16C21 17.1046 20.1046 18 19 18H16" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 12H12M4 18V6M12 18V6" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiHeadingH5DuoStroke icon from the duo-stroke style in editing category.
 */
export default {
  name: 'PiHeadingH5DuoStroke',
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
      default: 'heading-h5 icon'
    }
  }
}
</script>
