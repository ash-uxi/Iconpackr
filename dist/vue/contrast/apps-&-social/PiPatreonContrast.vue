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
    <path fill="currentColor" d="M21.13 8.008c-.003-2.553-1.992-4.647-4.325-5.402-2.899-.937-6.72-.801-9.487.504-3.354 1.582-4.407 5.049-4.446 8.506-.033 2.843.251 10.33 4.474 10.384 3.137.039 3.605-4.004 5.056-5.951 1.034-1.385 2.364-1.777 4.001-2.182 2.814-.696 4.732-2.917 4.728-5.859" opacity=".28"/>
  <path d="M21.13 8.008c-.003-2.553-1.992-4.647-4.325-5.402-2.899-.937-6.72-.801-9.487.504-3.354 1.582-4.407 5.049-4.446 8.506-.033 2.843.251 10.33 4.474 10.384 3.137.039 3.605-4.004 5.056-5.951 1.034-1.385 2.364-1.777 4.001-2.182 2.814-.696 4.732-2.917 4.728-5.859"/>
  </svg>
</template>

<script>
/**
 * PiPatreonContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiPatreonContrast',
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
      default: 'patreon icon'
    }
  }
}
</script>
