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
    <path d="M14.1211 9.87849L9.87849 14.1211M10.5856 6.34296L11.2927 5.63585C13.2453 3.68323 16.4112 3.68323 18.3638 5.63585C20.3164 7.58847 20.3164 10.7543 18.3638 12.7069L17.6567 13.414M6.34296 10.5856L5.63585 11.2927C3.68323 13.2453 3.68323 16.4112 5.63585 18.3638C7.58847 20.3164 10.7543 20.3164 12.7069 18.3638L13.414 17.6567" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiLinkSlantStroke icon from the stroke style in development category.
 */
export default {
  name: 'PiLinkSlantStroke',
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
      default: 'link-slant icon'
    }
  }
}
</script>
