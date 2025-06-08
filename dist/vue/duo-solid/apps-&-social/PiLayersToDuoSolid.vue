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
    <g opacity="0.28"><path d="M11.3786 0.760515C12.9377 0.451384 14.4075 1.14401 15.2319 2.33696C14.6656 2.16583 14.0474 2.12623 13.4144 2.25173L6.17245 3.68738C4.38586 4.0418 3.11019 5.62018 3.09831 7.44181L3.04768 14.9424C3.04257 15.7754 3.29789 16.5428 3.73234 17.1714C2.16865 16.6988 1.00092 15.2232 1.01179 13.4512L1.06242 5.9506C1.07431 4.12897 2.34997 2.55058 4.13656 2.19616L11.3786 0.760515Z" :fill="color || 'currentColor'" /><path d="M14.9144 3.75173C16.4722 3.44288 17.9407 4.13395 18.7655 5.32488C18.2031 5.15736 17.5899 5.11947 16.9623 5.24391L9.7203 6.67956C7.93372 7.03398 6.65805 8.61237 6.64616 10.434L6.59553 17.9346C6.59041 18.769 6.84663 19.5377 7.28246 20.1669C5.71163 19.6989 4.53677 18.2198 4.54768 16.4424L4.59831 8.94181C4.61019 7.12018 5.88586 5.5418 7.67245 5.18738L14.9144 3.75173Z" :fill="color || 'currentColor'" /></g> <path d="M18.4625 6.74391C20.8435 6.27185 23.016 8.1358 23.0001 10.5502L22.9501 18.05C22.9382 19.8712 21.663 21.4506 19.8758 21.8045L12.634 23.2401C10.2531 23.7121 8.08096 21.8484 8.09578 19.4346L8.14641 11.934C8.15829 10.1124 9.43396 8.53398 11.2205 8.17956L18.4625 6.74391Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiLayersToDuoSolid icon from the duo-solid style in apps-&-social category.
 */
export default {
  name: 'PiLayersToDuoSolid',
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
      default: 'layers-to icon'
    }
  }
}
</script>
