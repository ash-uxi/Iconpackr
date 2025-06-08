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
    <path d="M14 13.998a3 3 0 1 1 6 0 3 3 0 0 1-6 0m0 0A9.4 9.4 0 0 1 18 6.3M4 13.998a3 3 0 1 1 6 0 3 3 0 0 1-6 0m0 0A9.4 9.4 0 0 1 8 6.3"/>
  <path fill="currentColor" fill-rule="evenodd" d="M7 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clip-rule="evenodd" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiTextQuotesOpenContrast icon from the contrast style in editing category.
 */
export default {
  name: 'PiTextQuotesOpenContrast',
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
      default: 'text-quotes-open icon'
    }
  }
}
</script>
