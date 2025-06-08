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
    <path d="M15.5 18C15.8188 18.8082 16.1696 19.1725 17 19.5C16.1696 19.8275 15.8188 20.1918 15.5 21C15.1812 20.1918 14.8304 19.8275 14 19.5C14.8304 19.1725 15.1812 18.8082 15.5 18Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M16.1293 10.0954L19.9157 6.30893C20.3062 5.91841 20.3062 5.28524 19.9157 4.89472L18.8551 3.83406C18.4645 3.44354 17.8314 3.44354 17.4408 3.83406L13.6544 7.62052M16.1293 10.0954L6.05901 20.1656C5.66849 20.5562 5.03532 20.5562 4.6448 20.1656L3.58414 19.105C3.19361 18.7145 3.19361 18.0813 3.58414 17.6908L13.6544 7.62052M16.1293 10.0954L13.6544 7.62052" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M20.5 12C20.8188 12.8082 21.1696 13.1725 22 13.5C21.1696 13.8275 20.8188 14.1918 20.5 15C20.1812 14.1918 19.8304 13.8275 19 13.5C19.8304 13.1725 20.1812 12.8082 20.5 12Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M7.4751 2C8.00637 3.34705 8.59104 3.95413 9.9751 4.5C8.59104 5.04587 8.00637 5.65295 7.4751 7C6.94382 5.65295 6.35916 5.04587 4.9751 4.5C6.35915 3.95413 6.94383 3.34705 7.4751 2Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMagicWandDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiMagicWandDuoStroke',
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
      default: 'magic-wand icon'
    }
  }
}
</script>
