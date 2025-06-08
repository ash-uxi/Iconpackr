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
    <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M11.063 10.61a1 1 0 0 1-.24-.39 5.5 5.5 0 1 1 3.457 3.458 1 1 0 0 1-.389-.24l-1.745 1.744h-1.62a.5.5 0 0 0-.5.5v1.621l-2.122 2.122H5.075v-2.829z" clip-rule="evenodd" opacity=".28" /> <path d="m11.44 10.232-6.365 6.364v2.829h2.83l2.12-2.122v-1.621a.5.5 0 0 1 .5-.5h1.621l2.122-2.121" /> <path stroke-width="2.2" d="M17.45 8.464 16.036 7.05a1.25 1.25 0 0 1 1.414 1.414" />
  </svg>
</template>

<script>
/**
 * PiKeyBottomLeft02DuoSolid icon from the duo-solid style in security category.
 */
export default {
  name: 'PiKeyBottomLeft02DuoSolid',
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
      default: 'key-bottom-left-02 icon'
    }
  }
}
</script>
