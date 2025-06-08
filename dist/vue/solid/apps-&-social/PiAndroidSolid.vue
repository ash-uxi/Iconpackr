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
    <path d="M3.5 4.13414C3.97829 3.858 4.58988 4.02187 4.86603 4.50017L6.13269 6.6941C7.83098 5.62135 9.84393 5.00017 12 5.00017C14.1561 5.00017 16.169 5.62135 17.8673 6.6941L19.134 4.50017C19.4101 4.02187 20.0217 3.858 20.5 4.13414C20.9783 4.41028 21.1422 5.02187 20.866 5.50017L19.4672 7.92297C21.6384 9.93128 23 12.807 23 16.0002V17.9822C23 18.5443 22.5443 19.0002 21.982 19.0002H2.01799C1.45568 19.0002 1 18.5443 1 17.9822V16.0002C1 12.807 2.36156 9.93128 4.53278 7.92297L3.13397 5.50017C2.85783 5.02187 3.02171 4.41028 3.5 4.13414ZM8 11C6.89543 11 6 11.8954 6 13C6 14.1046 6.89543 15 8 15C9.10457 15 10 14.1046 10 13C10 11.8954 9.10457 11 8 11ZM16 11C14.8954 11 14 11.8954 14 13C14 14.1046 14.8954 15 16 15C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiAndroidSolid icon from the solid style in apps-&-social category.
 */
export default {
  name: 'PiAndroidSolid',
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
      default: 'android icon'
    }
  }
}
</script>
