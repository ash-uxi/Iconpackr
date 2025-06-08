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
    <path d="M15.9691 3.91602C17.4233 4.97466 18.7294 6.21138 19.8551 7.59488C19.9517 7.71356 20 7.85646 20 7.99935M15.9691 12.0827C17.4233 11.024 18.7294 9.78732 19.8551 8.40382C19.9517 8.28513 20 8.14224 20 7.99935M20 7.99935H9C6.23858 7.99935 4 10.2379 4 12.9993C4 15.7608 6.23858 17.9993 9 17.9993H12" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUturnRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiUturnRightStroke',
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
      default: 'uturn-right icon'
    }
  }
}
</script>
