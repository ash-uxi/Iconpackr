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
    <path d="M5.51601 9.99855C5.12863 12.5858 5.07776 15.2066 5.36385 17.7955C5.38839 18.0176 5.48747 18.2154 5.63594 18.3639M14.0013 18.4838C11.414 18.8712 8.79321 18.9221 6.20434 18.636C5.98226 18.6115 5.7844 18.5124 5.63594 18.3639M5.63594 18.3639L18.3639 5.63599" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowLeftDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowLeftDownStroke',
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
      default: 'arrow-left-down icon'
    }
  }
}
</script>
