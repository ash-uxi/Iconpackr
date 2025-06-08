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
    <path d="M17.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 20.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6M21.5 17.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </g>
  <path d="m11.5 19.5 1.031-4.123a2 2 0 0 0-1.39-2.409l-1.363-.389c-1.572-.449-1.947-2.51-.66-3.516a3.02 3.02 0 0 1 3.871.124l1.143 1.03a4 4 0 0 0 2.021.975L18 11.5M17.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m1 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-13 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </svg>
</template>

<script>
/**
 * PiCycleCyclingContrast icon from the contrast style in automotive category.
 */
export default {
  name: 'PiCycleCyclingContrast',
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
      default: 'cycle-cycling icon'
    }
  }
}
</script>
