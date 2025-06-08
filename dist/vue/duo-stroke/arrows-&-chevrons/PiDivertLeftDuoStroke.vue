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
    <path d="M22 9L15.1213 15.8787C13.9497 17.0503 12.0503 17.0503 10.8787 15.8787L3.29492 8.29492" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9 8.28858C7.22143 7.99076 5.42407 7.92321 3.65281 8.08707C3.50086 8.10113 3.36646 8.16659 3.26652 8.26652C3.16659 8.36646 3.10113 8.50086 3.08707 8.65281C2.92321 10.4241 2.99076 12.2214 3.28858 14" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiDivertLeftDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiDivertLeftDuoStroke',
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
      default: 'divert-left icon'
    }
  }
}
</script>
