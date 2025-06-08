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
    <path d="M11.41 17.0707C10.5646 16.4369 9.80048 15.7014 9.135 14.8807C9.04751 14.773 8.99983 14.6385 9 14.4997M9 14.4997C8.99983 14.361 9.04751 14.2264 9.135 14.1187C9.8 13.2987 10.564 12.5627 11.41 11.9287M9 14.4997H15" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8H4C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V5Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 8H20V17C20 18.0609 19.5786 19.0783 18.8284 19.8284C18.0783 20.5786 17.0609 21 16 21H8C6.93913 21 5.92172 20.5786 5.17157 19.8284C4.42143 19.0783 4 18.0609 4 17V8Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArchiveArrowLeftDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiArchiveArrowLeftDuoStroke',
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
      default: 'archive-arrow-left icon'
    }
  }
}
</script>
