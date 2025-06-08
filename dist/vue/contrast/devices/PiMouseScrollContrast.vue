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
    <path d="M14 14.5a10 10 0 0 1-1.704 1.77.47.47 0 0 1-.592 0A10 10 0 0 1 10 14.5m4-5a10 10 0 0 0-1.704-1.77.47.47 0 0 0-.592 0A10 10 0 0 0 10 9.5m9 .5v4a7 7 0 1 1-14 0v-4a7 7 0 0 1 14 0"/>
  <path fill="currentColor" d="M19 14v-4a7 7 0 1 0-14 0v4a7 7 0 1 0 14 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiMouseScrollContrast icon from the contrast style in devices category.
 */
export default {
  name: 'PiMouseScrollContrast',
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
      default: 'mouse-scroll icon'
    }
  }
}
</script>
