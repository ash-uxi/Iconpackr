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
    <path d="M11.7988 11.9991L17 16V21L9.21127 13.9901M11.7988 11.9991L9.21198 10.0092M11.7988 11.9991L17 7.99704V3L9.21198 10.0092M9.21198 10.0092L4 6L2 7.5L7 12M7 12L2 16.5L4 18L9.21127 13.9901M7 12L9.21127 13.9901" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M20.2311 19.3845L17 21V3L20.2311 4.61554C20.8732 4.9366 21.1943 5.09714 21.4288 5.33663C21.6363 5.54842 21.794 5.80368 21.8907 6.08393C22 6.40084 22 6.75979 22 7.47771V16.5223C22 17.2402 22 17.5992 21.8907 17.9161C21.794 18.1963 21.6363 18.4516 21.4288 18.6634C21.1943 18.9029 20.8731 19.0634 20.2311 19.3845Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiVscodeDuoStroke icon from the duo-stroke style in development category.
 */
export default {
  name: 'PiVscodeDuoStroke',
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
      default: 'vscode icon'
    }
  }
}
</script>
