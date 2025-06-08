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
    <path d="M13 10.5C13 10.5 5 14 5 20.5" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M5.33932 18.2119C0.33921 2.71194 15.5002 7 19.0002 3C22.0816 14.5 17.8393 22.7119 5.33932 18.2119Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiLeafStroke icon from the stroke style in weather category.
 */
export default {
  name: 'PiLeafStroke',
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
      default: 'leaf icon'
    }
  }
}
</script>
