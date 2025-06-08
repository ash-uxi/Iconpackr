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
    <path d="M3 10.9997V12.9997C3 15.8 3 17.2001 3.54497 18.2696C4.02433 19.2105 4.78924 19.9754 5.73005 20.4547C6.50797 20.8511 7.46078 20.9592 9 20.9886L9 3.01074C7.46078 3.04021 6.50797 3.14829 5.73005 3.54466C4.78924 4.02403 4.02433 4.78893 3.54497 5.72974C3 6.7993 3 8.19943 3 10.9997Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M9 20.989C9.57703 21 10.2365 21 11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C10.2365 3 9.57703 3 9 3.01105" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSidebarDefaultDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiSidebarDefaultDuoStroke',
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
      default: 'sidebar-default icon'
    }
  }
}
</script>
