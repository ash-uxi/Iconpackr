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
    <path d="M8.056 11.889a5 5 0 1 1-2.11-9.776 5 5 0 0 1 2.11 9.776M15.283 21.697a5 5 0 1 1 3.437-9.391 5 5 0 0 1-3.437 9.39"/>
  </g>
  <path d="m12.306 15.283 9.39 3.437m-9.39-3.437a5 5 0 0 0 9.39 3.437m-9.39-3.437a5 5 0 0 1 9.39 3.437M2.115 8.056l9.775-2.11m-9.775 2.11a5 5 0 0 0 9.775-2.11m-9.775 2.11a5 5 0 0 1 9.775-2.11"/>
  </svg>
</template>

<script>
/**
 * PiMedicinePillTabletsContrast icon from the contrast style in medical category.
 */
export default {
  name: 'PiMedicinePillTabletsContrast',
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
      default: 'medicine-pill-tablets icon'
    }
  }
}
</script>
