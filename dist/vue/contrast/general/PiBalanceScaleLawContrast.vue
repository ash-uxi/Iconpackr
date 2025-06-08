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
    <path d="M1.804 12a1 1 0 0 0-1 .999 4.195 4.195 0 1 0 8.392 0 1 1 0 0 0-1-.999zM15.804 12a1 1 0 0 0-1 .999 4.195 4.195 0 1 0 8.392 0 1 1 0 0 0-1-.999z"/>
  </g>
  <path d="M12 2v1.75M16 21h-4m-4 0h4m9-16a4.82 4.82 0 0 1-4.055.12l-1.583-.68A8.5 8.5 0 0 0 12 3.75M3 5a4.82 4.82 0 0 0 4.055.12l1.583-.68A8.5 8.5 0 0 1 12 3.75M12 21V3.75m7 1.75-2.891 6.145a3.196 3.196 0 1 0 5.783 0zm-14 0L2.11 11.645a3.196 3.196 0 1 0 5.783 0z"/>
  </svg>
</template>

<script>
/**
 * PiBalanceScaleLawContrast icon from the contrast style in general category.
 */
export default {
  name: 'PiBalanceScaleLawContrast',
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
      default: 'balance-scale-law icon'
    }
  }
}
</script>
