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
    <path d="M21.5679 18H16V17.1793C17.4481 16.1649 18.932 15.2073 20.1189 13.8779C20.9116 12.9899 20.9993 11.6609 20.145 10.7684C19.451 10.0435 18.251 9.80588 17.3259 10.1656C16.7013 10.4086 16.3457 10.8952 16 11.4341" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 12H12M4 18V6M12 18V6" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiHeadingH2DuoStroke icon from the duo-stroke style in editing category.
 */
export default {
  name: 'PiHeadingH2DuoStroke',
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
      default: 'heading-h2 icon'
    }
  }
}
</script>
