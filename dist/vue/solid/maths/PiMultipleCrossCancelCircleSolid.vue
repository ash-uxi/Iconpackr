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
    <path d="M1.84961 11.9999C1.84961 6.39416 6.39392 1.84985 11.9996 1.84985C17.6053 1.84985 22.1496 6.39416 22.1496 11.9999C22.1496 17.6055 17.6053 22.1499 11.9996 22.1499C6.39392 22.1499 1.84961 17.6055 1.84961 11.9999ZM9.60676 8.1928C9.21624 7.80227 8.58308 7.80227 8.19255 8.1928C7.80203 8.58332 7.80203 9.21649 8.19255 9.60701L10.5854 11.9999L8.19255 14.3928C7.80203 14.7833 7.80203 15.4165 8.19255 15.807C8.58308 16.1975 9.21624 16.1975 9.60676 15.807L11.9997 13.4141L14.3926 15.807C14.7831 16.1975 15.4162 16.1975 15.8068 15.807C16.1973 15.4165 16.1973 14.7833 15.8068 14.3928L13.4139 11.9999L15.8068 9.60701C16.1973 9.21649 16.1973 8.58332 15.8068 8.1928C15.4162 7.80227 14.7831 7.80227 14.3926 8.1928L11.9997 10.5857L9.60676 8.1928Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiMultipleCrossCancelCircleSolid icon from the solid style in maths category.
 */
export default {
  name: 'PiMultipleCrossCancelCircleSolid',
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
      default: 'multiple-cross-cancel-circle icon'
    }
  }
}
</script>
