<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M18.6687 3.0187C20.4458 2.82125 22 4.21232 22 6.00036V17.5313C22 19.3193 20.4458 20.7104 18.6687 20.5129L4.6687 18.9574C3.1494 18.7886 2 17.5044 2 15.9757V7.55591C2 6.02726 3.14941 4.74307 4.66871 4.57426L18.6687 3.0187Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M2 12.7657V10.7657H10V3.98173L11.9933 3.76025C11.9977 3.79848 12 3.83737 12 3.87679V10.7657L22 10.7657V12.7657H12V19.6546C12 19.694 11.9977 19.7329 11.9933 19.7711L10 19.5496V12.7657H2Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiMicrosoftWindowsDuoSolid icon from the duo-solid style in apps-&-social category.
 */
export default {
  name: 'PiMicrosoftWindowsDuoSolid',
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
