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
    <path fill="currentColor" fill-rule="evenodd" d="M8.827 9.663c3.627-1.25 4.244-4.507 3.781-7.502 0-.108.093-.185.186-.154 3.473 1.698 7.378 5.402 7.378 10.959 0 4.26-3.304 8.026-8.104 8.026A7.717 7.717 0 0 1 7.715 6.684c.093-.062.217 0 .217.108.046.57.2 2.006.833 2.87z" clip-rule="evenodd" opacity=".28"/>
  <path d="M8.827 9.663c3.627-1.25 4.244-4.507 3.781-7.502 0-.108.093-.185.186-.154 3.473 1.698 7.378 5.402 7.378 10.959 0 4.26-3.304 8.026-8.104 8.026A7.717 7.717 0 0 1 7.715 6.684c.093-.062.217 0 .217.108.046.57.2 2.006.833 2.87z" clip-rule="evenodd"/>
  </svg>
</template>

<script>
/**
 * PiTinderContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiTinderContrast',
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
      default: 'tinder icon'
    }
  }
}
</script>
