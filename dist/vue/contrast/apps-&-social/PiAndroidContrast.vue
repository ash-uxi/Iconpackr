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
    <path fill="currentColor" d="M22 17.982V16a9.98 9.98 0 0 0-3.814-7.858A9.96 9.96 0 0 0 12 6c-2.335 0-4.484.8-6.186 2.142A9.98 9.98 0 0 0 2 16v1.982q.002.017.018.018h19.964q.017-.002.018-.018" opacity=".28"/>
  <path d="m4 5 1.814 3.142M20 5l-1.814 3.142m-12.372 0A9.96 9.96 0 0 1 12 6c2.335 0 4.484.8 6.186 2.142m-12.372 0A9.98 9.98 0 0 0 2 16v1.982q.002.017.018.018h19.964q.017-.002.018-.018V16a9.98 9.98 0 0 0-3.814-7.858M9 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  </svg>
</template>

<script>
/**
 * PiAndroidContrast icon from the contrast style in apps-&-social category.
 */
export default {
  name: 'PiAndroidContrast',
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
      default: 'android icon'
    }
  }
}
</script>
