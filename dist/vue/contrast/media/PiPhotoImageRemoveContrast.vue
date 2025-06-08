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
    <path d="M16 19h6m0-4v-4l-.001-1m-9.464 11H10c-.756 0-1.41 0-1.983-.01M22 10H21c-1.393 0-2.09 0-2.676.06A11.5 11.5 0 0 0 8.06 20.324c-.02.2-.034.415-.043.665M22 10c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534M7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
  <path fill="currentColor" d="M2 11c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 3.545C5.8 3 7.2 3 10 3h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.476.934.536 2.12.544 4.27L22 11v2c0 1.246 0 2.214-.048 3H16a3 3 0 0 0-2.596 4.504V21H10c-.756 0-1.41 0-1.983-.01-1.55-.03-2.506-.137-3.287-.535a5 5 0 0 1-2.185-2.185C2 17.2 2 15.8 2 13z" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiPhotoImageRemoveContrast icon from the contrast style in media category.
 */
export default {
  name: 'PiPhotoImageRemoveContrast',
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
      default: 'photo-image-remove icon'
    }
  }
}
</script>
