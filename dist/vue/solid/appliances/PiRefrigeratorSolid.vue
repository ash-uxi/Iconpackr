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
    <path d="M4 11V18.8385C3.99998 19.3657 3.99997 19.8205 4.03057 20.195C4.06287 20.5904 4.13419 20.9836 4.32698 21.362C4.6146 21.9265 5.07355 22.3854 5.63803 22.673C6.01641 22.8658 6.40963 22.9371 6.80498 22.9694C7.17954 23 7.6343 23 8.16144 23H15.8386C16.3657 23 16.8205 23 17.195 22.9694C17.5904 22.9371 17.9836 22.8658 18.362 22.673C18.9265 22.3854 19.3854 21.9265 19.673 21.362C19.8658 20.9836 19.9371 20.5904 19.9694 20.195C20 19.8205 20 19.3658 20 18.8387V11H4ZM8 12.5C8.55229 12.5 9 12.9477 9 13.5V15.5C9 16.0523 8.55229 16.5 8 16.5C7.44772 16.5 7 16.0523 7 15.5V13.5C7 12.9477 7.44772 12.5 8 12.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  <path d="M8.16146 1H15.8385C16.3657 0.999984 16.8205 0.99997 17.195 1.03057C17.5904 1.06287 17.9836 1.13419 18.362 1.32698C18.9265 1.6146 19.3854 2.07355 19.673 2.63803C19.8658 3.01641 19.9371 3.40963 19.9694 3.80498C20 4.17952 20 4.63424 20 5.16134V9H4V5.16146C3.99998 4.63434 3.99997 4.17953 4.03057 3.80498C4.06287 3.40963 4.13419 3.01641 4.32698 2.63803C4.6146 2.07355 5.07355 1.6146 5.63803 1.32698C6.01641 1.13419 6.40963 1.06287 6.80498 1.03057C7.17953 0.99997 7.63434 0.999984 8.16146 1ZM8 4.5C8.55229 4.5 9 4.94772 9 5.5V6.5C9 7.05229 8.55229 7.5 8 7.5C7.44772 7.5 7 7.05229 7 6.5V5.5C7 4.94772 7.44772 4.5 8 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiRefrigeratorSolid icon from the solid style in appliances category.
 */
export default {
  name: 'PiRefrigeratorSolid',
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
      default: 'refrigerator icon'
    }
  }
}
</script>
