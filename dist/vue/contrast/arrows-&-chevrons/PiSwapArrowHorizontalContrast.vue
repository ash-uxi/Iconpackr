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
    <g fill="currentColor" opacity=".28">
    <path d="M3.14 15.604A20.2 20.2 0 0 1 6.887 12l-.165 2.223a24 24 0 0 0 0 3.554L6.887 20a20.2 20.2 0 0 1-3.747-3.604.63.63 0 0 1 0-.792M17.113 4a20.2 20.2 0 0 1 3.747 3.604.63.63 0 0 1 0 .792A20.2 20.2 0 0 1 17.113 12l.165-2.223a24 24 0 0 0 0-3.554z"/>
  </g>
  <path d="M6.656 16H17M6.656 16q0-.89.066-1.777L6.887 12a20.2 20.2 0 0 0-3.747 3.604.63.63 0 0 0 0 .792A20.2 20.2 0 0 0 6.887 20l-.165-2.223A24 24 0 0 1 6.656 16m10.688-8H7m10.344 0q0-.89-.066-1.777L17.113 4a20.2 20.2 0 0 1 3.747 3.604.63.63 0 0 1 0 .792A20.2 20.2 0 0 1 17.113 12l.165-2.223q.066-.888.066-1.777"/>
  </svg>
</template>

<script>
/**
 * PiSwapArrowHorizontalContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiSwapArrowHorizontalContrast',
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
      default: 'swap-arrow-horizontal icon'
    }
  }
}
</script>
