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
    <path d="m18.78 4.012-14 1.556A2 2 0 0 0 3 7.556v8.42a2 2 0 0 0 1.78 1.987l14 1.556A2 2 0 0 0 21 17.53V6.001a2 2 0 0 0-2.22-1.989" opacity=".28" fill="none"/>
  <path  d="M2 12.766v-2h8V3.982l1.993-.222q.007.057.007.117v6.889h10v2H12v6.889q0 .059-.007.116L10 19.55v-6.784z" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMicrosoftWindowsDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
export default {
  name: 'PiMicrosoftWindowsDuoStroke',
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
      default: 'microsoft-windows icon'
    }
  }
}
</script>
