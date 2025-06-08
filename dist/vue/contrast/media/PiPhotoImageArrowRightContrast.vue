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
    <path d="M12.535 21H10c-.756 0-1.41 0-1.983-.01M22 10H21c-1.393 0-2.09 0-2.676.06A11.5 11.5 0 0 0 8.06 20.324c-.02.2-.034.415-.043.665M22 10 22 11v2.242M21.999 10c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534m11.573-4.562a12.9 12.9 0 0 1 2.275 2.191c.09.111.135.246.135.38m-2.41 2.572c.846-.634 1.61-1.37 2.275-2.191a.6.6 0 0 0 .135-.38m0 0h-6M7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
  <path fill="currentColor" d="M2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534C8.59 21 9.244 21 10 21h3.4v-.504A3 3 0 0 1 16 16h.62a3 3 0 0 1 4.761-1.978H22L22 13v-2l-.001-1c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73" opacity=".28"/>
  </svg>
</template>

<script>
/**
 * PiPhotoImageArrowRightContrast icon from the contrast style in media category.
 */
export default {
  name: 'PiPhotoImageArrowRightContrast',
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
      default: 'photo-image-arrow-right icon'
    }
  }
}
</script>
