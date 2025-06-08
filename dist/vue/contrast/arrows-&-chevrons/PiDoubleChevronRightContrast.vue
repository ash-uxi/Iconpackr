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
    <g fill="currentColor" opacity=".28">
    <path d="M16.894 11.702A20.4 20.4 0 0 0 13 8l.165 2.205c.09 1.195.09 2.395 0 3.59L13 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596M10.894 11.702A20.4 20.4 0 0 0 7 8l.165 2.205c.09 1.195.09 2.395 0 3.59L7 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596"/>
  </g>
  <path d="M10.894 11.702A20.4 20.4 0 0 0 7 8l.165 2.205c.09 1.195.09 2.395 0 3.59L7 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596M16.894 11.702A20.4 20.4 0 0 0 13 8l.165 2.205c.09 1.195.09 2.395 0 3.59L13 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596"/>
  </svg>
</template>

<script>
/**
 * PiDoubleChevronRightContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiDoubleChevronRightContrast',
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
