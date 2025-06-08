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
    <path d="M10 7L10 16C10 17.1046 10.8954 18 12 18C13.1046 18 14 17.1046 14 16L14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M18 9L18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6L14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16L10 7" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPaperclipVerticalDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiPaperclipVerticalDuoStroke',
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
      default: 'paperclip-vertical icon'
    }
  }
}
</script>
