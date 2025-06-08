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
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 15H7a3 3 0 1 0 0 6h10a3 3 0 1 0 0-6"/>
  </g>
  <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 15H7a3 3 0 1 0 0 6h10a3 3 0 1 0 0-6"/>
  </svg>
</template>

<script>
/**
 * PiUserUser01Contrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserUser01Contrast',
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
      default: 'user-user-01 icon'
    }
  }
}
</script>
