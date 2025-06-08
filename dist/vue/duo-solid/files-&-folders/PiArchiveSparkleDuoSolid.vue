<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    
     :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M12 12.582c.004.101.005.151.008.195a3 3 0 0 0 2.797 2.797l.195.008-.195.008a3 3 0 0 0-2.797 2.797l-.008.195c-.004-.1-.005-.151-.008-.195A3 3 0 0 0 9 15.582l.195-.008a3 3 0 0 0 2.797-2.797z" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" clip-rule="evenodd" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M4 9a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-7a1 1 0 0 0-1-1z" clip-rule="evenodd" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiArchiveSparkleDuoSolid icon from the duo-solid style in files-&-folders category.
 */
export default {
  name: 'PiArchiveSparkleDuoSolid',
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
      default: 'archive-sparkle icon'
    }
  }
}
</script>
