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
    <g fill="currentColor" opacity=".28">
    <path d="M4.647 4.086a20.6 20.6 0 0 1 5.296.2 53 53 0 0 0-5.657 5.657 20.6 20.6 0 0 1-.2-5.296.62.62 0 0 1 .56-.56M14.057 4.286a20.6 20.6 0 0 1 5.296-.2.62.62 0 0 1 .56.56 20.6 20.6 0 0 1-.199 5.297 53 53 0 0 0-5.657-5.657"/>
  </g>
  <path d="M7.007 7.007 12 12v8M7.007 7.007a53 53 0 0 1 2.936-2.721 20.6 20.6 0 0 0-5.296-.2.62.62 0 0 0-.56.56 20.6 20.6 0 0 0 .199 5.297 53 53 0 0 1 2.721-2.936m9.986 0L15 9m1.993-1.993a53 53 0 0 0-2.936-2.721 20.6 20.6 0 0 1 5.296-.2.62.62 0 0 1 .56.56 20.6 20.6 0 0 1-.199 5.297 53 53 0 0 0-2.721-2.936"/>
  </svg>
</template>

<script>
/**
 * PiDemergeContrast icon from the contrast style in arrows-&-chevrons category.
 */
export default {
  name: 'PiDemergeContrast',
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
      default: 'demerge icon'
    }
  }
}
</script>
