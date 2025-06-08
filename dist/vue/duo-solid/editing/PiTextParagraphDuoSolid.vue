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
    <path d="M18 3v18" opacity=".28" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M9.03 2a7.03 7.03 0 1 0 0 14.058H12V21a1 1 0 0 0 2 0V4h7a1 1 0 1 0 0-2z" clip-rule="evenodd" />
  </svg>
</template>

<script>
/**
 * PiTextParagraphDuoSolid icon from the duo-solid style in editing category.
 */
export default {
  name: 'PiTextParagraphDuoSolid',
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
