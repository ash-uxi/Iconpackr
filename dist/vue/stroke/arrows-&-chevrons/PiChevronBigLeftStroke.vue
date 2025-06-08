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
    <path d="M15 18.0005C12.8192 16.4235 10.8636 14.5776 9.18284 12.5106C8.93905 12.2108 8.93905 11.7902 9.18284 11.4904C10.8636 9.42342 12.8192 7.5775 15 6.00049" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiChevronBigLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronBigLeftStroke',
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
      default: 'chevron-big-left icon'
    }
  }
}
</script>
