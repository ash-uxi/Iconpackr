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
    <path d="M10.722 12.465c-2.107 2.4-4.574 4.43-7.293 6.145-1.93 1.216 3.249 1.903 3.71 1.972m3.583-8.117 8.277 2.145m-8.277-2.145c1.588-1.81 2.254-2.798 4.904-2.128M19 14.61a11 11 0 0 0-.198-1.894c-.3-1.562-1.9-2.057-3.175-2.38M19 14.61c.028 1.769-.382 3.482-1.168 5.13-.657 1.379-3.696 1.263-5.336 1.254m-5.356-.412c1.773.263 3.563.401 5.356.412m-5.356-.412c1.14-.588 3.145-2.27 4.599-4.308m.757 4.72c.635-.687 1.976-2.296 2.72-3.7m.411-6.957L18.65 3"/>
  <path fill="currentColor" d="M18.999 14.61a11 11 0 0 0-.198-1.894c-.3-1.562-1.9-2.057-3.175-2.38-2.65-.669-3.316.319-4.904 2.129z" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiCleanBroomContrast icon from the contrast style in editing category.
 */
export default {
  name: 'PiCleanBroomContrast',
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
      default: 'clean-broom icon'
    }
  }
}
</script>
