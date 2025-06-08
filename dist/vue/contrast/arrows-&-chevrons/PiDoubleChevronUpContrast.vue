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
    <path d="M11.702 7.106A20.4 20.4 0 0 0 8 11l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0M11.702 13.106A20.4 20.4 0 0 0 8 17l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0"/>
  </g>
  <path d="M11.702 13.106A20.4 20.4 0 0 0 8 17l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0M11.702 7.106A20.4 20.4 0 0 0 8 11l4-.3 4 .3a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0"/>
  </svg>
</template>

<script>
/**
 * PiDoubleChevronUpContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiDoubleChevronUpContrast',
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
      default: 'double-chevron-up icon'
    }
  }
}
</script>
