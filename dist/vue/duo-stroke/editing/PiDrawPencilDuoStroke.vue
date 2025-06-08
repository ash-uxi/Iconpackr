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
    <path d="M2.84998 11.9996C2.85011 9.57287 3.81425 7.24558 5.5303 5.52972C7.24635 3.81385 9.57374 2.84997 12.0005 2.8501C14.4272 2.85023 16.7545 3.81437 18.4704 5.53042C20.1862 7.24648 21.1501 9.57387 21.15 12.0006C21.1498 14.4273 20.1857 16.7546 18.4696 18.4705C16.7536 20.1863 14.4262 21.1502 11.9995 21.1501C9.57274 21.15 7.24546 20.1858 5.52959 18.4698C3.81373 16.7537 2.84984 14.4263 2.84998 11.9996Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9.012 12.9995L8 14.6925V17.9245M9.012 12.9995L12 7.99951L14.988 12.9995M9.012 12.9995H14.988M14.988 12.9995L16 14.6925V17.9245" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiDrawPencilDuoStroke icon from the duo-stroke style in editing category.
 */
export default {
  name: 'PiDrawPencilDuoStroke',
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
      default: 'draw-pencil icon'
    }
  }
}
</script>
