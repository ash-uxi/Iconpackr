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
    <path d="M11 8C9.53812 9.06206 8.22872 10.3071 7.1058 11.7021C6.96473 11.8774 6.96473 12.1226 7.1058 12.2979C8.22872 13.6929 9.53812 14.9379 11 16M17 8C15.5381 9.06206 14.2287 10.3071 13.1058 11.7021C12.9647 11.8774 12.9647 12.1226 13.1058 12.2979C14.2287 13.6929 15.5381 14.9379 17 16" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiDoubleChevronLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiDoubleChevronLeftStroke',
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
      default: 'double-chevron-left icon'
    }
  }
}
</script>
