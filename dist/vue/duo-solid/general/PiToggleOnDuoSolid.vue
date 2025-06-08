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
    <path d="M15.9031 7C14.577 7 13.3052 7.52678 12.3675 8.46447C11.4299 9.40215 10.9031 10.6739 10.9031 12C10.9031 13.3261 11.4299 14.5979 12.3675 15.5355C13.3052 16.4732 14.577 17 15.9031 17C17.2292 17 18.5009 16.4732 19.4386 15.5355C20.3763 14.5979 20.9031 13.3261 20.9031 12C20.9031 10.6739 20.3763 9.40215 19.4386 8.46447C18.5009 7.52678 17.2292 7 15.9031 7Z" :fill="color || 'currentColor'" fill-rule="evenodd" clip-rule="evenodd" /> <path d="M9.90308 4C7.78134 4 5.74651 4.84285 4.24622 6.34315C2.74593 7.84344 1.90308 9.87827 1.90308 12C1.90308 14.1217 2.74593 16.1566 4.24622 17.6569C5.74651 19.1571 7.78134 20 9.90308 20H15.9031C18.0248 20 20.0596 19.1571 21.5599 17.6569C23.0602 16.1566 23.9031 14.1217 23.9031 12C23.9031 9.87827 23.0602 7.84344 21.5599 6.34315C20.0596 4.84285 18.0248 4 15.9031 4H9.90308Z" :fill="color || 'currentColor'" opacity="0.28" fill-rule="evenodd" clip-rule="evenodd" />
  </svg>
</template>

<script>
/**
 * PiToggleOnDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiToggleOnDuoSolid',
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
      default: 'toggle-on icon'
    }
  }
}
</script>
