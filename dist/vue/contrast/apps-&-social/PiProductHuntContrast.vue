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
    <path d="M10 13.625V8h2.813a2.813 2.813 0 0 1 0 5.625zm0 0V17m2 4.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiProductHuntContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiProductHuntContrast',
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
      default: 'product-hunt icon'
    }
  }
}
</script>
