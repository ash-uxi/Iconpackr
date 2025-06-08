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
    <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M13.897 8.633a1 1 0 0 0-1.861 0c-.293.743-.566 1.19-.896 1.523-.329.332-.78.614-1.54.914a1 1 0 0 0 0 1.86c.76.3 1.211.582 1.54.914.33.332.603.78.896 1.523a1.001 1.001 0 0 0 1.86 0c.293-.743.566-1.19.896-1.523s.781-.614 1.541-.914a1 1 0 0 0 0-1.86c-.76-.3-1.211-.582-1.54-.914-.33-.332-.603-.78-.896-1.523M8.967 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clip-rule="evenodd" /> <path d="M8.466 4.188c-1.657 0-3 1.194-3 2.667V9.52c0 1.473-1.343 2.667-3 2.667 1.657 0 3 1.194 3 2.667v2.666c0 1.473 1.343 2.667 3 2.667m8-16c1.657 0 3 1.194 3 2.667V9.52c0 1.473 1.343 2.667 3 2.667-1.657 0-3 1.194-3 2.667v2.666c0 1.473-1.343 2.667-3 2.667" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiCodeAiDuoSolid icon from the duo-solid style in ai category.
 */
export default {
  name: 'PiCodeAiDuoSolid',
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
      default: 'code-ai icon'
    }
  }
}
</script>
