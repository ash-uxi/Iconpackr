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
    <path d="M13.445 6.95037L8.86762 14.8786C8.30584 15.8517 8.63923 17.0959 9.61226 17.6576C10.5853 18.2194 11.8295 17.886 12.3913 16.913L17.4773 8.10385C18.6008 6.15778 17.9341 3.66935 15.988 2.54579C14.0419 1.42223 11.5535 2.089 10.4299 4.03507" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M19.4748 12.781L15.9146 18.9474C14.2292 21.8665 10.4966 22.8667 7.57751 21.1813C4.65841 19.496 3.65825 15.7633 5.34359 12.8442L10.4296 4.03507C11.5531 2.089 14.0416 1.42223 15.9876 2.54579C17.9337 3.66935 18.6005 6.15778 17.4769 8.10385L12.3909 16.913C11.8291 17.886 10.5849 18.2194 9.61189 17.6576C8.63886 17.0959 8.30547 15.8517 8.86726 14.8786L13.4446 6.95037" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPaperclipSlantDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiPaperclipSlantDuoStroke',
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
      default: 'paperclip-slant icon'
    }
  }
}
</script>
