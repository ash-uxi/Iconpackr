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
    <path d="M1.48664 11.4469C1.79406 5.67474 6.76388 1.20754 12.536 1.51496C18.1584 1.81441 22.7689 6.21929 22.5193 11.4573L22.519 11.4628C22.3353 14.9106 19.3609 17.5829 15.9136 17.3993C15.6864 17.3872 15.4603 17.361 15.2342 17.3349C14.9477 17.3017 14.6611 17.2685 14.3725 17.264C13.9088 17.2568 13.6984 17.3407 13.5888 17.4392C13.3498 17.654 13.3541 18.0506 13.506 18.219C14.184 18.9706 14.2686 20.1427 13.845 21.0353C13.4429 21.8826 12.5674 22.5574 11.4186 22.4962C5.64642 22.1888 1.17922 17.219 1.48664 11.4469ZM10.2488 7.2627C10.2488 6.15813 11.1442 5.2627 12.2488 5.2627C13.3533 5.2627 14.2488 6.15813 14.2488 7.2627C14.2488 8.36726 13.3533 9.2627 12.2488 9.2627C11.1442 9.2627 10.2488 8.36726 10.2488 7.2627ZM5.47852 11C5.47852 9.89543 6.37395 9 7.47852 9C8.58308 9 9.47852 9.89543 9.47852 11C9.47852 12.1046 8.58308 13 7.47852 13C6.37395 13 5.47852 12.1046 5.47852 11ZM14.7234 11C14.7234 9.89543 15.6188 9 16.7234 9C17.828 9 18.7234 9.89543 18.7234 11C18.7234 12.1046 17.828 13 16.7234 13C15.6188 13 14.7234 12.1046 14.7234 11Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiColorPaletteSolid icon from the solid style in general category.
 */
export default {
  name: 'PiColorPaletteSolid',
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
      default: 'color-palette icon'
    }
  }
}
</script>
