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
    <path d="M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7"/>
  <path fill="currentColor" d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z" opacity=".28"/>
  <path d="M18 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0zM7.572 10.019c-.634.846-1.37 1.61-2.19 2.275a.6.6 0 0 1-.381.135m-2.572-2.41c.635.846 1.371 1.61 2.192 2.275.11.09.245.135.38.135m0 0V6"/>
  </svg>
</template>

<script>
/**
 * PiThermometerDownContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiThermometerDownContrast',
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
      default: 'thermometer-down icon'
    }
  }
}
</script>
