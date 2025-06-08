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
    <path d="M12 1C12.5523 1 13 1.44772 13 2V3H11V2C11 1.44772 11.4477 1 12 1Z" :fill="color || 'currentColor'" /> <path d="M19.1298 3C20.6793 3.00003 21.843 4.3901 21.5986 5.89648L21.5703 6.04199L20.913 9H3.08686L2.42963 6.04199C2.08288 4.48081 3.27078 3 4.87006 3H19.1298Z" :fill="color || 'currentColor'" opacity="0.28" /> <path d="M20.4111 11.2588C20.1345 12.5036 19.2134 13.4656 18.0469 13.834L18.498 21.9443L18.499 22.0469C18.4759 22.5531 18.0725 22.9692 17.5557 22.998C17.0387 23.0268 16.5918 22.6579 16.5127 22.1572L16.502 22.0557L16.0547 14H7.94531L7.49805 22.0557C7.4673 22.607 6.9957 23.0287 6.44434 22.998C5.89301 22.9673 5.47132 22.4957 5.50195 21.9443L5.95215 13.8359C4.8797 13.4971 4.01507 12.6552 3.66797 11.5537L3.58887 11.2588L2.6416 7H21.3574L20.4111 11.2588ZM5.54102 10.8252L5.5752 10.9521C5.77042 11.5708 6.34621 11.9998 7.00488 12H8.78027L8.18066 9H5.13574L5.54102 10.8252ZM10.8193 12H13.1807L13.7803 9H10.2197L10.8193 12ZM15.2197 12H16.9941C17.6972 12 18.3065 11.5115 18.459 10.8252L18.8643 9H15.8193L15.2197 12Z" :fill="color || 'currentColor'" fill-rule="evenodd" clip-rule="evenodd" />
  </svg>
</template>

<script>
/**
 * PiControlTowerDuoSolid icon from the duo-solid style in building category.
 */
export default {
  name: 'PiControlTowerDuoSolid',
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
      default: 'control-tower icon'
    }
  }
}
</script>
