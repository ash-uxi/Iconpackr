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
    <path d="M9.1334 12.0191L11.1401 14.0237C12.1242 12.303 13.499 10.8499 15.1334 9.73381M10.8837 2.36804L5.4961 4.31356C4.34691 4.72854 3.56421 5.799 3.51725 7.01992L3.39 10.3285C3.23232 14.4282 5.36929 18.2749 8.93337 20.3071L10.454 21.1741C11.3549 21.6878 12.4571 21.6998 13.3689 21.2059L14.8575 20.3995C18.6748 18.3318 20.9189 14.2123 20.586 9.88366L20.359 6.93316C20.2685 5.7566 19.4967 4.74238 18.3868 4.34159L12.9216 2.36804C12.2631 2.13025 11.5422 2.13025 10.8837 2.36804Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiShieldCheckStroke icon from the stroke style in security category.
 */
export default {
  name: 'PiShieldCheckStroke',
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
      default: 'shield-check icon'
    }
  }
}
</script>
