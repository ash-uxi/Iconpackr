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
    <path d="M15.2221 15.2221L21 21M8.7779 8.7779L3 3M8.7779 15.2221L3 21M15.2221 8.7779L21 3" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M20 15.2405C18.5179 14.9923 17.0201 14.936 15.544 15.0726C15.4174 15.0843 15.3054 15.1388 15.2221 15.2221C15.1388 15.3054 15.0843 15.4174 15.0726 15.544C14.936 17.0201 14.9923 18.5179 15.2405 20M4 8.75952C5.48214 9.0077 6.97994 9.06399 8.45599 8.92744C8.58261 8.91573 8.69462 8.86117 8.7779 8.7779C8.86117 8.69462 8.91573 8.58261 8.92744 8.45599C9.06399 6.97994 9.0077 5.48214 8.75952 4M4 15.2405C5.48214 14.9923 6.97994 14.936 8.45599 15.0726C8.58261 15.0843 8.69462 15.1388 8.7779 15.2221C8.86117 15.3054 8.91573 15.4174 8.92744 15.544C9.06399 17.0201 9.0077 18.5179 8.75952 20M20 8.75952C18.5179 9.0077 17.0201 9.06399 15.544 8.92744C15.4174 8.91573 15.3054 8.86117 15.2221 8.7779C15.1388 8.69462 15.0843 8.58261 15.0726 8.45599C14.936 6.97994 14.9923 5.48214 15.2405 4" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMinimizeFourLineArrowDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
export default {
  name: 'PiMinimizeFourLineArrowDuoStroke',
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
      default: 'minimize-four-line-arrow icon'
    }
  }
}
</script>
