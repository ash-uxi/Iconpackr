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
    <path fill="currentColor" d="M16 22H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8v8a4 4 0 0 1-4 4" opacity=".28"/>
  <path d="M20 11a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m9 8v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8m-8 1c-.004.1-.005.151-.008.195a3 3 0 0 1-2.797 2.797L9 14c.1.004.151.005.195.008a3 3 0 0 1 2.797 2.797L12 17c.004-.1.005-.151.008-.195a3 3 0 0 1 2.797-2.797L15 14c-.1-.004-.151-.005-.195-.008a3 3 0 0 1-2.797-2.797z"/>
  </svg>
</template>

<script>
/**
 * PiFile02StarContrast icon from the contrast style in files-&-folders category.
 */
export default {
  name: 'PiFile02StarContrast',
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
      default: 'file-02-star icon'
    }
  }
}
</script>
