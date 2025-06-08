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
    <path fill="currentColor" d="M5.591 17.568a30.2 30.2 0 0 1 .152-7.797l4.03 4.455 4.456 4.03a30.2 30.2 0 0 1-7.797.153.95.95 0 0 1-.84-.84" opacity=".28"/>
  <path d="m9.774 14.226-4.03-4.455a30.2 30.2 0 0 0-.153 7.797.95.95 0 0 0 .84.84c2.59.287 5.21.236 7.798-.151zm0 0L18.59 5.41"/>
  </svg>
</template>

<script>
/**
 * PiArrowLeftDownContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowLeftDownContrast',
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
      default: 'arrow-left-down icon'
    }
  }
}
</script>
