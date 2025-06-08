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
    <path d="M10.5 9.00067C9.40359 9.79722 8.42154 10.731 7.57935 11.7773C7.47355 11.9087 7.47355 12.0926 7.57935 12.2241C8.42154 13.2704 9.40359 14.2041 10.5 15.0007M21 13.0007V11.0007C21 8.20041 21 6.80028 20.455 5.73072C19.9757 4.78991 19.2108 4.02501 18.27 3.54564C17.492 3.14926 16.5392 3.04119 15 3.01172L15 20.9896C16.5392 20.9602 17.492 20.8521 18.27 20.4557C19.2108 19.9763 19.9757 19.2114 20.455 18.2706C21 17.2011 21 15.8009 21 13.0007Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M15 20.989C14.423 21 13.7635 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.79961 3 8.19974 3 11 3H13C13.7635 3 14.423 3 15 3.01105" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiSidebarRightOpenDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiSidebarRightOpenDuoStroke',
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
      default: 'sidebar-right-open icon'
    }
  }
}
</script>
