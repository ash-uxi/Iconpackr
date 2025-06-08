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
    <path d="M14.2286 5.74331C11.6413 5.35593 9.0205 5.30505 6.43163 5.59114C6.20955 5.61568 6.0117 5.71476 5.86323 5.86323M5.74331 14.2286C5.35593 11.6413 5.30505 9.0205 5.59114 6.43163C5.61568 6.20955 5.71476 6.0117 5.86323 5.86323M5.86323 5.86323L18.5912 18.5912" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArrowLeftUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiArrowLeftUpStroke',
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
      default: 'arrow-left-up icon'
    }
  }
}
</script>
