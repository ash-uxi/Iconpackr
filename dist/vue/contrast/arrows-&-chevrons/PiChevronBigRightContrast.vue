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
    <path fill="currentColor" d="M14.817 12.51A30.6 30.6 0 0 1 9 18 72 72 0 0 0 9 6a30.6 30.6 0 0 1 5.817 5.49c.244.3.244.72 0 1.02" opacity=".28"/>
  <path d="M14.817 12.51A30.6 30.6 0 0 1 9 18 72 72 0 0 0 9 6a30.6 30.6 0 0 1 5.817 5.49c.244.3.244.72 0 1.02"/>
  </svg>
</template>

<script>
/**
 * PiChevronBigRightContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronBigRightContrast',
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
      default: 'chevron-big-right icon'
    }
  }
}
</script>
