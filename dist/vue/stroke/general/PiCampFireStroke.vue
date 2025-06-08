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
    <path d="M2 21L12 5.16667M12 5.16667L14 2M12 5.16667L22 21M12 5.16667L10 2M10.9999 17.0001C11.5933 17.0001 12.3399 15.4865 12.6161 14.1923C13.5567 14.7619 14.9999 16.2825 14.9999 18.0324C14.9999 19.5158 13.9999 20.9992 12 20.9992C9.99999 20.9992 9 19.5158 9 18.0324C9 17.1477 9.36888 16.3216 9.85521 15.6474C10.3238 16.3136 10.9999 17.0001 10.9999 17.0001Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCampFireStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiCampFireStroke',
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
      default: 'camp-fire icon'
    }
  }
}
</script>
