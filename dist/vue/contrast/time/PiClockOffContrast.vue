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
    <path d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 2.803 1.137 5.342 2.972 7.177a1 1 0 0 0 1.415 0l12.94-12.94a1 1 0 0 0 0-1.414A10.12 10.12 0 0 0 12 1.85M21.593 8.678a1 1 0 0 0-1.652-.38L8.298 19.942a1 1 0 0 0 .38 1.652c1.042.36 2.16.556 3.322.556 5.605 0 10.15-4.544 10.15-10.15 0-1.162-.196-2.28-.557-3.322"/>
  </g>
  <path d="M12 8v4m0 0 6.47-6.47M12 12l-6.47 6.47M22 2l-3.53 3.53m0 0A9.15 9.15 0 0 0 5.53 18.47m0 0L2 22m7.005-1.351A9.15 9.15 0 0 0 20.648 9.005m-5.86 5.86L15 15"/>
  </svg>
</template>

<script>
/**
 * PiClockOffContrast icon from the contrast style in time category.
 */
export default {
  name: 'PiClockOffContrast',
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
      default: 'clock-off icon'
    }
  }
}
</script>
