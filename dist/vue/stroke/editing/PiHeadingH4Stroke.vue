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
    <path d="M4 12H12M4 18V6M12 18V6M17 10L16.2392 13.8039C16.1155 14.4227 16.5888 15 17.2198 15H21M21 15V12M21 15V18" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiHeadingH4Stroke icon from the stroke style in editing category.
 */
export default {
  name: 'PiHeadingH4Stroke',
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
