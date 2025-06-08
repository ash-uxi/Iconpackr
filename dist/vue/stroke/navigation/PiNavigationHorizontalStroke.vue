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
    <path d="M10.4399 17.7315L5.35705 20.9083C4.91098 21.1871 4.35019 20.7885 4.46677 20.2756L4.59372 19.717C5.92371 13.865 8.27244 8.29255 11.5326 3.25412C11.7518 2.91529 12.2476 2.91529 12.4668 3.25412C15.727 8.29255 18.0757 13.865 19.4057 19.717L19.5326 20.2756C19.6492 20.7885 19.0884 21.1871 18.6424 20.9083L13.5595 17.7315C12.6052 17.135 11.3943 17.135 10.4399 17.7315Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiNavigationHorizontalStroke icon from the stroke style in navigation category.
 */
export default {
  name: 'PiNavigationHorizontalStroke',
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
      default: 'navigation-horizontal icon'
    }
  }
}
</script>
