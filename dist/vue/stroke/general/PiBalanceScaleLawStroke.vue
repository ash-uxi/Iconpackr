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
    <path d="M12.0002 2V3.75074M16.0002 21H12.0002M8.0002 21L12.0002 21M21.0002 5C19.7318 5.63422 18.2484 5.67781 16.9449 5.11917L15.362 4.44079C14.2886 3.98076 13.1444 3.75074 12.0002 3.75074M3.0002 5C4.26864 5.63422 5.75197 5.67781 7.05547 5.11917L8.63836 4.44079C9.71176 3.98076 10.856 3.75074 12.0002 3.75074M12.0002 21V3.75074M19.0002 5.5L16.1086 11.6446C15.4632 13.0161 15.8701 14.6524 17.0827 15.5619C18.219 16.4141 19.7814 16.4141 20.9176 15.5619C22.1303 14.6524 22.5372 13.0161 21.8918 11.6446L19.0002 5.5ZM5.0002 5.5L2.10863 11.6446C1.46319 13.0161 1.87009 14.6524 3.08275 15.5619C4.21901 16.4141 5.78138 16.4141 6.91764 15.5619C8.13031 14.6524 8.5372 13.0161 7.89176 11.6446L5.0002 5.5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiBalanceScaleLawStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiBalanceScaleLawStroke',
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
      default: 'balance-scale-law icon'
    }
  }
}
</script>
