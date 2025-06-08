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
    <path d="M6 15.5V8.5M6 15.5C4.34315 15.5 3 16.8431 3 18.5C3 20.1569 4.34315 21.5 6 21.5C7.65685 21.5 9 20.1569 9 18.5C9 16.9257 7.7873 15.6346 6.24507 15.5099M6 15.5C6.08251 15.5 6.16424 15.5033 6.24507 15.5099M6 8.5C7.65685 8.5 9 7.15685 9 5.5C9 3.84315 7.65685 2.5 6 2.5C4.34315 2.5 3 3.84315 3 5.5C3 7.15685 4.34315 8.5 6 8.5ZM17.8749 8.49744C17.7208 9.10222 17.6168 9.45938 17.466 9.76589C16.9263 10.8628 15.9146 11.6527 14.7196 11.9102C14.303 12 13.8276 12 12.8769 12H11.9554C10.5196 12 9.80167 12 9.16785 12.2186C8.60735 12.4119 8.09684 12.7275 7.67326 13.1423C7.19776 13.608 6.87789 14.2442 6.24507 15.5099M17.8749 8.49744C17.9164 8.49914 17.9581 8.5 18 8.5C19.6569 8.5 21 7.15685 21 5.5C21 3.84315 19.6569 2.5 18 2.5C16.3431 2.5 15 3.84315 15 5.5C15 7.11495 16.2761 8.43186 17.8749 8.49744Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiGitFork02Stroke icon from the stroke style in development category.
 */
export default {
  name: 'PiGitFork02Stroke',
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
      default: 'git-fork-02 icon'
    }
  }
}
</script>
