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
    <path d="M11.402 15c-1.22.94-2.64 1.758-3.888 1.758a4.514 4.514 0 0 1 0-9.028c2.931 0 6.814 4.514 6.814 4.514s2.338 2.719 4.103 2.719a2.718 2.718 0 0 0 0-5.437c-.311 0-.64.085-.971.224"/>
  <circle cx="12" cy="12" r="9.15" fill="currentColor" opacity=".28"/>
  <circle cx="12" cy="12" r="9.15"/>
  </svg>
</template>

<script>
/**
 * PiAppleNewSiriContrast icon from the contrast style in ai category.
 */
export default {
  name: 'PiAppleNewSiriContrast',
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
      default: 'apple-new-siri icon'
    }
  }
}
</script>
