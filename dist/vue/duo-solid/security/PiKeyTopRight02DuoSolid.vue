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
    <path d="m10.732 10.94 6.364-6.364h2.828v2.828l-2.12 2.121h-1.622a.5.5 0 0 0-.5.5v1.622l-2.122 2.121" /> <path :fill="color || 'currentColor'" fill-rule="evenodd" d="M11.109 10.563a1 1 0 0 0-.39-.24 5.5 5.5 0 1 0 3.459 3.457 1 1 0 0 0-.241-.388l1.745-1.745v-1.622a.5.5 0 0 1 .5-.5h1.62l2.122-2.12v-2.83h-2.828z" clip-rule="evenodd" opacity=".28" /> <path stroke-width="2.2" d="M8.964 16.95 7.55 15.537a1.25 1.25 0 0 0 1.414 1.415z" />
  </svg>
</template>

<script>
/**
 * PiKeyTopRight02DuoSolid icon from the duo-solid style in security category.
 */
export default {
  name: 'PiKeyTopRight02DuoSolid',
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
      default: 'key-top-right-02 icon'
    }
  }
}
</script>
