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
    <path d="M14.1252 8.13916C12.6634 9.20122 11.354 10.4462 10.231 11.8413C10.09 12.0165 10.09 12.2618 10.231 12.437C11.354 13.8321 12.6634 15.0771 14.1252 16.1392" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiChevronLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiChevronLeftStroke',
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
      default: 'chevron-left icon'
    }
  }
}
</script>
