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
    <path d="M17.113 6a20.2 20.2 0 0 1 3.747 3.604c.093.116.14.256.14.396h-3.656q0-.89-.066-1.777zM6.887 18a20.2 20.2 0 0 1-3.747-3.604A.63.63 0 0 1 3 14h3.656q0 .89.066 1.777z"/>
  </g>
  <path d="M17.344 10H21c0-.14-.047-.28-.14-.396A20.2 20.2 0 0 0 17.113 6l.165 2.223q.066.888.066 1.777m0 0H6m.656 4H3c0 .14.047.28.14.396A20.2 20.2 0 0 0 6.887 18l-.165-2.223A24 24 0 0 1 6.656 14m0 0H18"/>
  </svg>
</template>

<script>
/**
 * PiSwapHalfarrowHorizontalContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiSwapHalfarrowHorizontalContrast',
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
      default: 'swap-halfarrow-horizontal icon'
    }
  }
}
</script>
