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
    <path d="M15 14.496v-1m-6 1v-1m6.57-3.5a4.99 4.99 0 0 0-3.57-1.5 4.99 4.99 0 0 0-3.57 1.5M12 21.346a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
  <path fill="currentColor" d="M2.85 12.196a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiFaceSmileUpsideDownContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiFaceSmileUpsideDownContrast',
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
      default: 'face-smile-upside-down icon'
    }
  }
}
</script>
