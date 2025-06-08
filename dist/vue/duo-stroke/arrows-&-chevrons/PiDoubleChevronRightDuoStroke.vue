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
    <path d="M13 16C14.4619 14.9379 15.7713 13.6929 16.8942 12.2979C17.0353 12.1226 17.0353 11.8774 16.8942 11.7021C15.7713 10.3071 14.4619 9.06206 13 8" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M7 16C8.46188 14.9379 9.77128 13.6929 10.8942 12.2979C11.0353 12.1226 11.0353 11.8774 10.8942 11.7021C9.77128 10.3071 8.46188 9.06206 7 8" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiDoubleChevronRightDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiDoubleChevronRightDuoStroke',
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
      default: 'double-chevron-right icon'
    }
  }
}
</script>
