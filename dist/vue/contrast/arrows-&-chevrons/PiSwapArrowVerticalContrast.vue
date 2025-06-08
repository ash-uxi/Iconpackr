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
    <path d="M15.604 20.86A20.2 20.2 0 0 1 12 17.113l2.223.165a24 24 0 0 0 3.554 0L20 17.113a20.2 20.2 0 0 1-3.604 3.747.63.63 0 0 1-.792 0M4 6.887A20.2 20.2 0 0 1 7.604 3.14a.63.63 0 0 1 .792 0A20.2 20.2 0 0 1 12 6.887l-2.223-.165a24 24 0 0 0-3.554 0z"/>
  </g>
  <path d="M16 17.344V7m0 10.344q-.89 0-1.777-.066L12 17.113a20.2 20.2 0 0 0 3.604 3.747.63.63 0 0 0 .792 0A20.2 20.2 0 0 0 20 17.113l-2.223.165q-.888.066-1.777.066M8 6.656V17M8 6.656q-.89 0-1.777.066L4 6.887A20.2 20.2 0 0 1 7.604 3.14a.63.63 0 0 1 .792 0A20.2 20.2 0 0 1 12 6.887l-2.223-.165A24 24 0 0 0 8 6.656"/>
  </svg>
</template>

<script>
/**
 * PiSwapArrowVerticalContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiSwapArrowVerticalContrast',
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
      default: 'swap-arrow-vertical icon'
    }
  }
}
</script>
