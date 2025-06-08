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
    <path d="M12.3973 2.18293C16.0057 4.79798 19.2019 7.9941 21.817 11.6026C22.0678 10.3561 22.1859 9.13635 22.2302 8.04032C22.3007 6.29511 21.9589 4.77836 20.5902 3.40966C19.2215 2.04095 17.7048 1.69916 15.9596 1.76968C14.8635 1.81397 13.6437 1.93209 12.3973 2.18293Z" fill="currentColor" stroke="none"/>
  <path d="M14.1092 21.116C15.6805 20.5398 17.1903 19.6867 18.4404 18.4367C19.6905 17.1865 20.5436 15.6765 21.1199 14.105C18.1759 9.67285 14.327 5.82393 9.89476 2.88005C8.3233 3.45629 6.81333 4.30937 5.56318 5.55952C4.31317 6.80953 3.46014 8.3193 2.8839 9.89058C5.82784 14.3229 9.67689 18.172 14.1092 21.116ZM9.79289 12.7929C9.40237 13.1834 9.40237 13.8166 9.79289 14.2071C10.1834 14.5976 10.8166 14.5976 11.2071 14.2071L14.2071 11.2071C14.5976 10.8166 14.5976 10.1834 14.2071 9.79289C13.8166 9.40237 13.1834 9.40237 12.7929 9.79289L9.79289 12.7929Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  <path d="M2.18671 12.393C1.93579 13.6396 1.81764 14.8597 1.77334 15.9559C1.70282 17.7011 2.04461 19.2179 3.41332 20.5866C4.78202 21.9553 6.29877 22.2971 8.04399 22.2265C9.14019 22.1822 10.3602 22.0641 11.6068 21.8132C7.99816 19.198 4.80187 16.0017 2.18671 12.393Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiBallFootballSolid icon from the solid style in sports category.
 */
export default {
  name: 'PiBallFootballSolid',
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
      default: 'ball-football icon'
    }
  }
}
</script>
