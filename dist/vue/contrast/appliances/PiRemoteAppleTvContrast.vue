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
    <path d="M14 15v3m0-6v.01M10 12v.01M10 15v.01M10 18v.01M14 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
  <path fill="currentColor" d="M15 2H9a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3" opacity=".28"/>
  <path d="M15 2H9a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"/>
  </svg>
</template>

<script>
/**
 * PiRemoteAppleTvContrast icon from the contrast style in appliances category.
 */
export default {
  name: 'PiRemoteAppleTvContrast',
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
      default: 'remote-apple-tv icon'
    }
  }
}
</script>
