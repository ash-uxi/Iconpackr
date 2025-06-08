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
    <path d="M13 10h5m-3 4h3m-8.333 0H7.333C6.597 14 6 14.597 6 15.333c0 .368.298.667.667.667h3.666a.667.667 0 0 0 .667-.667C11 14.597 10.403 14 9.667 14M9.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  <path fill="currentColor" d="M21 17V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3" opacity=".28"/>
  <path d="M21 17V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3"/>
  </svg>
</template>

<script>
/**
 * PiIdCardHorizontalContrast icon from the contrast style in users category.
 */
export default {
  name: 'PiIdCardHorizontalContrast',
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
      default: 'id-card-horizontal icon'
    }
  }
}
</script>
