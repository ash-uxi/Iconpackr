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
    <path d="M15 3L15 21L5.16144 21C4.6343 21 4.17954 21 3.80498 20.9694C3.40963 20.9371 3.01641 20.8658 2.63803 20.673C2.07355 20.3854 1.6146 19.9265 1.32698 19.362C1.13419 18.9836 1.06287 18.5904 1.03057 18.195C0.999972 17.8205 0.999985 17.3658 1 16.8387V7.16146C0.999986 6.63437 0.999973 6.17952 1.03057 5.80498C1.06287 5.40963 1.13419 5.01641 1.32699 4.63803C1.61461 4.07355 2.07355 3.6146 2.63803 3.32698C3.01641 3.13419 3.40963 3.06287 3.80498 3.03057C4.17952 2.99997 4.63425 2.99999 5.16135 3H15Z" fill="currentColor" stroke="none"/>
  <path d="M17 21V16L23 16L23 16.8386C23 17.3657 23 17.8205 22.9694 18.195C22.9371 18.5904 22.8658 18.9836 22.673 19.362C22.3854 19.9265 21.9265 20.3854 21.362 20.673C20.9836 20.8658 20.5904 20.9371 20.195 20.9694C19.8205 21 19.3657 21 18.8386 21L17 21Z" fill="currentColor" stroke="none"/>
  <path d="M23 14L17 14V3H18.8385C19.3656 2.99999 19.8205 2.99997 20.195 3.03057C20.5904 3.06288 20.9836 3.13419 21.362 3.32699C21.9265 3.61461 22.3854 4.07355 22.673 4.63803C22.8658 5.01641 22.9371 5.40963 22.9694 5.80498C23 6.17954 23 6.6343 23 7.16144L23 14ZM20 6C19.4477 6 19 6.44772 19 7C19 7.55229 19.4477 8 20 8H20.01C20.5623 8 21.01 7.55229 21.01 7C21.01 6.44772 20.5623 6 20.01 6H20ZM20 9C19.4477 9 19 9.44772 19 10C19 10.5523 19.4477 11 20 11H20.01C20.5623 11 21.01 10.5523 21.01 10C21.01 9.44772 20.5623 9 20.01 9H20Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiMicrowaveSolid icon from the solid style in appliances category.
 */
export default {
  name: 'PiMicrowaveSolid',
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
      default: 'microwave icon'
    }
  }
}
</script>
