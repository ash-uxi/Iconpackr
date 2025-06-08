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
    <path d="M9 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </g>
  <path d="M13 7h8M6 7h.01M13 17h8M9 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </svg>
</template>

<script>
/**
 * PiPollContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiPollContrast',
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
      default: 'poll icon'
    }
  }
}
</script>
