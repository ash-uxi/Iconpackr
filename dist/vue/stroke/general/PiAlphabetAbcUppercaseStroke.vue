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
    <path d="M2 16.0026V12.2189C2 10.3403 2.84709 8.65095 4.13894 7.95326C4.37072 7.82808 4.62928 7.82808 4.86106 7.95326C6.15291 8.65095 7 10.3403 7 12.2189V16.0026M2 13.0026H7M10 11.9993H12.2M10 11.9993V7.99932H12.2C13.3046 7.99932 14.2 8.89475 14.2 9.99932C14.2 11.1039 13.3046 11.9993 12.2 11.9993M10 11.9993V15.9993H13C14.1046 15.9993 15 15.1039 15 13.9993C15 12.8947 14.1046 11.9993 13 11.9993H12.2M22.7002 15.2354C22.1694 15.7105 21.4685 15.9993 20.7002 15.9993C19.0433 15.9993 17.7002 14.6562 17.7002 12.9993V10.9993C17.7002 9.34246 19.0433 7.99932 20.7002 7.99932C21.4685 7.99932 22.1694 8.28817 22.7002 8.76321" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiAlphabetAbcUppercaseStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiAlphabetAbcUppercaseStroke',
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
      default: 'alphabet-abc-uppercase icon'
    }
  }
}
</script>
