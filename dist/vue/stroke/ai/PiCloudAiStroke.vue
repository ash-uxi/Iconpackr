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
    <path d="M9 17H9.001M12.5 5C15.3713 5 17.8077 6.86169 18.6681 9.44382C20.6276 10.2852 22 12.2323 22 14.5C22 17.5376 19.5376 20 16.5 20H6.5C4.01472 20 2 17.9853 2 15.5C2 13.1779 3.75887 11.2666 6.01705 11.0256C6.26 7.65724 9.06969 5 12.5 5ZM13 10C12.3625 11.6165 11.6609 12.345 10 13C11.6609 13.655 12.3625 14.3835 13 16C13.6375 14.3835 14.3391 13.655 16 13C14.3391 12.345 13.6375 11.6165 13 10Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiCloudAiStroke icon from the stroke style in ai category.
 */
export default {
  name: 'PiCloudAiStroke',
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
      default: 'cloud-ai icon'
    }
  }
}
</script>
