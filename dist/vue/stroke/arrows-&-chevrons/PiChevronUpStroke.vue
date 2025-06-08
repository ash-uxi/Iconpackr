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
    <path d="M8 14C9.06206 12.5381 10.3071 11.2287 11.7021 10.1058C11.8774 9.96473 12.1226 9.96473 12.2979 10.1058C13.6929 11.2287 14.9379 12.5381 16 14" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiChevronUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronUpStroke',
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
      default: 'chevron-up icon'
    }
  }
}
</script>
