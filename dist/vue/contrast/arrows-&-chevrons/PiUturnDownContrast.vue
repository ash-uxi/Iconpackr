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
    <path fill="currentColor" d="M7.596 19.855a20.8 20.8 0 0 1-3.68-3.886l2.32.17a24 24 0 0 0 3.528 0l2.32-.17a20.8 20.8 0 0 1-3.68 3.886.64.64 0 0 1-.808 0" opacity=".28"/>
  <path d="M8 16.205V9a5 5 0 0 1 10 0v3M8 16.205a24 24 0 0 1-1.764-.065l-2.32-.17a20.8 20.8 0 0 0 3.68 3.885.64.64 0 0 0 .809 0 20.8 20.8 0 0 0 3.678-3.886l-2.32.171A24 24 0 0 1 8 16.205"/>
  </svg>
</template>

<script>
/**
 * PiUturnDownContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiUturnDownContrast',
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
      default: 'uturn-down icon'
    }
  }
}
</script>
