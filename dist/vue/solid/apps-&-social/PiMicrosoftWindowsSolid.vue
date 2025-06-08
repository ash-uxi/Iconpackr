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
    <path d="M10 3.98189L4.66871 4.57426C3.14941 4.74307 2 6.02726 2 7.55591V10.7658H10V3.98189Z" fill="currentColor" stroke="none"/>
  <path d="M11.9933 19.7712L18.6687 20.5129C20.4458 20.7104 22 19.3193 22 17.5313V12.7658H12V19.6547C12 19.6941 11.9977 19.733 11.9933 19.7712Z" fill="currentColor" stroke="none"/>
  <path d="M2 12.7658V15.9757C2 17.5044 3.1494 18.7886 4.6687 18.9574L10 19.5498V12.7658H2Z" fill="currentColor" stroke="none"/>
  <path d="M22 10.7658V6.00036C22 4.21232 20.4458 2.82125 18.6687 3.0187L11.9933 3.76042C11.9977 3.79865 12 3.83753 12 3.87695V10.7658L22 10.7658Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiMicrosoftWindowsSolid icon from the solid style in apps-&-social category.
 */
export default {
  name: 'PiMicrosoftWindowsSolid',
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
