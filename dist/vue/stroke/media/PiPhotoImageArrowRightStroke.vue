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
    <path d="M12.5352 21H10C9.24401 21 8.59006 21 8.01712 20.9893M21.9989 10H21C19.607 10 18.9104 10 18.324 10.0603C12.9031 10.6176 8.61758 14.9031 8.06029 20.324C8.03963 20.5249 8.02605 20.7388 8.01712 20.9893M21.9989 10C22 10.3123 22 10.6449 22 11V13C22 13.0819 22 13.1626 22 13.2422M21.9989 10C21.9912 7.84993 21.9309 6.66397 21.455 5.73005C20.9757 4.78924 20.2108 4.02433 19.27 3.54497C18.2004 3 16.8003 3 14 3H10C7.19974 3 5.79961 3 4.73005 3.54497C3.78924 4.02433 3.02433 4.78924 2.54497 5.73005C2 6.79961 2 8.19974 2 11V13C2 15.8003 2 17.2004 2.54497 18.27C3.02433 19.2108 3.78924 19.9757 4.73005 20.455C5.51086 20.8529 6.46784 20.9603 8.01712 20.9893M19.5901 16.4272C20.4361 17.0617 21.2001 17.7978 21.8651 18.6184C21.955 18.7294 22 18.864 22 18.9986M19.5901 21.5701C20.4361 20.9356 21.2001 20.1995 21.8651 19.3788C21.955 19.2679 22 19.1332 22 18.9986M22 18.9986L16 18.9986M7.5 9.5C6.94772 9.5 6.5 9.05228 6.5 8.5C6.5 7.94772 6.94772 7.5 7.5 7.5C8.05228 7.5 8.5 7.94772 8.5 8.5C8.5 9.05228 8.05228 9.5 7.5 9.5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPhotoImageArrowRightStroke icon from the stroke style in media category.
 */
export default {
  name: 'PiPhotoImageArrowRightStroke',
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
      default: 'photo-image-arrow-right icon'
    }
  }
}
</script>
