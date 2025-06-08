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
    <path d="M3.91675 15.9691C4.9754 17.4233 6.21211 18.7294 7.59561 19.8551C7.7143 19.9517 7.85719 20 8.00008 20M12.0834 15.9691C11.0248 17.4233 9.78805 18.7294 8.40455 19.8551C8.28587 19.9517 8.14297 20 8.00008 20M8.00008 20L8.00008 9C8.00008 6.23858 10.2387 4 13.0001 4C15.7615 4 18.0001 6.23858 18.0001 9V12" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUturnDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiUturnDownStroke',
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
