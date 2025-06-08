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
    <path d="M6 15C7.57701 12.8192 9.42293 10.8636 11.4899 9.18284C11.7897 8.93905 12.2103 8.93905 12.5101 9.18284C14.5771 10.8636 16.423 12.8192 18 15" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiChevronBigUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronBigUpStroke',
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
      default: 'chevron-big-up icon'
    }
  }
}
</script>
