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
    <path d="M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7 15a4 4 0 0 0-4 4 2 2 0 0 0 2 2h8.309v-.485A3 3 0 0 1 16 16.188v-1.062A4 4 0 0 0 15 15z"/>
  </g>
  <path d="M15 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7.431M22 19.189a15 15 0 0 1-2.556 2.654A.7.7 0 0 1 19 22m-3-2.811c.74.986 1.599 1.878 2.556 2.654.13.105.287.157.444.157m0 0v-7m-4-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
  </svg>
</template>

<script>
/**
 * PiUserArrowDownContrast icon from the contrast style in users category.
 */
export default {
  name: 'PiUserArrowDownContrast',
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
      default: 'user-arrow-down icon'
    }
  }
}
</script>
