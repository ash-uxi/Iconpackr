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
    <path d="M15 12H9M15 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H15M9 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H9" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiLinkHorizontalStroke icon from the stroke style in development category.
 */
export default {
  name: 'PiLinkHorizontalStroke',
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
      default: 'link-horizontal icon'
    }
  }
}
</script>
