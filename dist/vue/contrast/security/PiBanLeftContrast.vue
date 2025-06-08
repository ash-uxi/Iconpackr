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
    <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0" opacity=".28"/>
  <path d="M5.53 5.53a9.15 9.15 0 1 1 12.94 12.94M5.53 5.53a9.15 9.15 0 0 0 12.94 12.94M5.53 5.53l12.94 12.94"/>
  </svg>
</template>

<script>
/**
 * PiBanLeftContrast icon from the contrast style in security category.
 */
export default {
  name: 'PiBanLeftContrast',
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
      default: 'ban-left icon'
    }
  }
}
</script>
