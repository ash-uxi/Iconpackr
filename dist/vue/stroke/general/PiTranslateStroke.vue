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
    <path d="M3 5H7M7 5H11C11 7.96113 9.39121 10.5465 7 11.9297M7 5L7 3M7 11.9297C5.82331 12.6104 4.45715 13 3 13M7 11.9297C5.78549 11.2272 4.77281 10.2145 4.07026 9M7 11.9297C8.17669 12.6104 9.54285 13 11 13M21 21V20.937C21 19.9437 20.8949 18.9596 20.6902 18M13 21V20.937C13 19.9437 13.1051 18.9596 13.3098 18M13.3098 18C13.7639 15.8721 14.7082 13.8648 16.0841 12.1448C16.5537 11.5579 17.4463 11.5579 17.9159 12.1448C19.2918 13.8648 20.2361 15.8721 20.6902 18M13.3098 18H20.6902" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiTranslateStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiTranslateStroke',
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
      default: 'translate icon'
    }
  }
}
</script>
