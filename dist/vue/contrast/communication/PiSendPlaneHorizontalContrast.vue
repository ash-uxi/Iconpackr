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
    <path fill="currentColor" d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.9 53.9 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12s-1.474 2.207-2.605 2.933a53.9 53.9 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628z" opacity=".28"/>
  <path d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.9 53.9 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12s-1.474 2.207-2.605 2.933a53.9 53.9 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628zm0 0h4.9"/>
  </svg>
</template>

<script>
/**
 * PiSendPlaneHorizontalContrast icon from the contrast style in communication category.
 */
export default {
  name: 'PiSendPlaneHorizontalContrast',
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
      default: 'send-plane-horizontal icon'
    }
  }
}
</script>
