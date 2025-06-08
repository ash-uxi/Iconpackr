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
    <path d="M12 10.583V4m0 6.583c-2.005 0-4.01-.138-6-.413a30.2 30.2 0 0 0 5.406 5.62.95.95 0 0 0 1.188 0A30.2 30.2 0 0 0 18 10.17c-1.99.275-3.995.413-6 .413M19 20H5"/>
  <path fill="currentColor" d="M6 10.17a30.2 30.2 0 0 0 5.406 5.62.95.95 0 0 0 1.188 0A30.2 30.2 0 0 0 18 10.17a43.8 43.8 0 0 1-12 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiDownloadBarDownContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiDownloadBarDownContrast',
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
      default: 'download-bar-down icon'
    }
  }
}
</script>
