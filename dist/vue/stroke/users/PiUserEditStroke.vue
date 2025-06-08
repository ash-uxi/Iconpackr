<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{color: color || 'currentColor'}"
    role="img"
    :aria-label="ariaLabel"
    v-bind="$attrs"
  >
    <path d="M11.2474 15H8C5.79086 15 4 16.7909 4 19C4 20.1046 4.89543 21 6 21H9M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM12.9219 21L14.1284 20.9922C14.492 20.9898 14.6738 20.9886 14.8448 20.9468C14.9965 20.9096 15.1413 20.8491 15.2743 20.7673C15.4242 20.675 15.5528 20.5464 15.8099 20.2893L21.7276 14.3716C22.0425 14.0568 22.0934 13.5643 21.8498 13.1917L21.8303 13.1618C21.5514 12.7353 21.1851 12.373 20.7556 12.0987C20.3999 11.8716 19.9342 11.9224 19.6358 12.2208L13.6626 18.194C13.4148 18.4418 13.2909 18.5657 13.2006 18.7098C13.1206 18.8376 13.0603 18.9767 13.0217 19.1225C12.9782 19.2869 12.9724 19.462 12.9609 19.8122L12.9219 21Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiUserEditStroke icon from the stroke style in users category.
 */
export default {
  name: 'PiUserEditStroke',
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
      default: 'user-edit icon'
    }
  }
}
</script>
