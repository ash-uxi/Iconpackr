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
    <path d="M18 8h-2m-4 7v5m5-5v.146A5.43 5.43 0 0 0 20 20M7 15v.146A5.43 5.43 0 0 1 4 20m18-8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6z"/>
  <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v6h20V6a2 2 0 0 0-2-2" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiAcOnFastContrast icon from the contrast style in appliances category.
 */
export default {
  name: 'PiAcOnFastContrast',
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
      default: 'ac-on-fast icon'
    }
  }
}
</script>
