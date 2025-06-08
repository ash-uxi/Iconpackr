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
    <path d="M21 9c0 1.146 0 1.72-.167 2.178a2.77 2.77 0 0 1-1.655 1.655C18.719 13 18.146 13 17 13h-1.046c-1.034 0-1.551 0-1.946.201-.347.177-.63.46-.807.807-.201.395-.201.912-.201 1.946V17c0 1.146 0 1.72-.167 2.178a2.77 2.77 0 0 1-1.655 1.655C10.719 21 10.146 21 9 21"/>
  <path fill="currentColor" d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a8 8 0 0 1-8 8H7a4 4 0 0 1-4-4z" opacity=".28"/>
  <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a8 8 0 0 1-8 8H7a4 4 0 0 1-4-4z"/>
  </svg>
</template>

<script>
/**
 * PiStickerCornerFoldedContrast icon from the contrast style in media category.
 */
export default {
  name: 'PiStickerCornerFoldedContrast',
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
      default: 'sticker-corner-folded icon'
    }
  }
}
</script>
