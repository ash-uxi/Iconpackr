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
    <path fill="currentColor" d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3" opacity=".28"/>
  <path d="M12 8.246a3.754 3.754 0 1 1 0 7.508 3.754 3.754 0 0 1 0-7.508m0 0h8.347M8.753 13.877 4.576 6.651m10.671 7.226-4.169 7.227m0 0q.456.046.922.046A9.15 9.15 0 1 0 4.576 6.651m6.502 14.453A9.15 9.15 0 0 1 4.576 6.651"/>
  </svg>
</template>

<script>
/**
 * PiGoogleChromeContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiGoogleChromeContrast',
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
      default: 'google-chrome icon'
    }
  }
}
</script>
