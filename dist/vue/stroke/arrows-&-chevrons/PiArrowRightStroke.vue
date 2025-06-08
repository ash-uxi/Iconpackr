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
    <path d="M15.1696 6C17.273 7.55556 19.1622 9.37278 20.7905 11.4057C20.9302 11.5801 21 11.79 21 12M15.1696 18C17.273 16.4444 19.1622 14.6272 20.7905 12.5943C20.9302 12.4199 21 12.21 21 12M21 12H3" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowRightStroke',
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
      default: 'arrow-right icon'
    }
  }
}
</script>
