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
    <path d="M10 8.13916C11.4619 9.20122 12.7713 10.4462 13.8942 11.8413C14.0353 12.0165 14.0353 12.2618 13.8942 12.437C12.7713 13.8321 11.4619 15.0771 10 16.1392" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiChevronRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronRightStroke',
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
      default: 'chevron-right icon'
    }
  }
}
</script>
