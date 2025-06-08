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
    <path fill="currentColor" d="m8.118 8.087-1.764-5.16a.62.62 0 0 0-1.18.002l-2.392 7.088c-.709 2.101-.053 4.43 1.642 5.83l6.27 5.18a2.05 2.05 0 0 0 2.615.003l6.257-5.14c1.7-1.398 2.361-3.73 1.653-5.835l-2.395-7.122a.62.62 0 0 0-1.179-.003l-1.763 5.157c-.145.425-.54.71-.982.71H9.1c-.443 0-.837-.285-.982-.71" opacity=".28"/>
  <path d="m8.118 8.087-1.764-5.16a.62.62 0 0 0-1.18.002l-2.392 7.088c-.709 2.101-.053 4.43 1.642 5.83l6.27 5.18a2.05 2.05 0 0 0 2.615.003l6.257-5.14c1.7-1.398 2.361-3.73 1.653-5.835l-2.395-7.122a.62.62 0 0 0-1.179-.003l-1.763 5.157c-.145.425-.54.71-.982.71H9.1c-.443 0-.837-.285-.982-.71"/>
  </svg>
</template>

<script>
/**
 * PiGitlabContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiGitlabContrast',
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
      default: 'gitlab icon'
    }
  }
}
</script>
