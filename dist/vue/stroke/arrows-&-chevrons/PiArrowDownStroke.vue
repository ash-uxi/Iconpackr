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
    <path d="M6 14.1696C7.55556 16.273 9.37278 18.1622 11.4057 19.7905C11.5801 19.9302 11.79 20 12 20M18 14.1696C16.4444 16.273 14.6272 18.1622 12.5943 19.7905C12.4199 19.9302 12.21 20 12 20M12 20L12 4" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowDownStroke',
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
      default: 'arrow-down icon'
    }
  }
}
</script>
