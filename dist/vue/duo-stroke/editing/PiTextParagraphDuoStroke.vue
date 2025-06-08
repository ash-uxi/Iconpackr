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
    <path d="M13 3H9.02914C5.69934 3 3 5.69934 3 9.02914C3 12.3589 5.69934 15.0583 9.02914 15.0583H13M13 3V15.0583M13 3H21M13 21V15.0583" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M18 3V21" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTextParagraphDuoStroke icon from the duo-stroke style in editing category.
 */
export default {
  name: 'PiTextParagraphDuoStroke',
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
      default: 'text-paragraph icon'
    }
  }
}
</script>
