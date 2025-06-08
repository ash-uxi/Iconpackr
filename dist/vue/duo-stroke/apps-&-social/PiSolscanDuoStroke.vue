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
    <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M19.8917 16.6358C21.8113 13.3687 21.5609 9.1121 18.9649 6.06543C15.6874 2.21898 9.91237 1.75771 6.06592 5.03517C2.21947 8.31262 1.7582 14.0877 5.03566 17.9341C7.63159 20.9808 11.7944 21.9037 15.3247 20.5272" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSolscanDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
export default {
  name: 'PiSolscanDuoStroke',
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
      default: 'solscan icon'
    }
  }
}
</script>
