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
    <path d="M5.76864 8.84607C7.28028 7.10266 9.51137 6 12 6C14.4886 6 16.7197 7.10266 18.2314 8.84607M2 12.111L7 17.736L12 12.111L17 17.736L22 12.111" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiWalletconnectStroke icon from the stroke style in apps-&-social category.
 */
export default {
  name: 'PiWalletconnectStroke',
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
      default: 'walletconnect icon'
    }
  }
}
</script>
