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
    <path d="M16 11.0638V12.5C16 13.8807 17.1193 15 18.5 15C19.8807 15 21 13.8807 21 12.5V6.5C21 5.11929 19.8807 4 18.5 4C17.1193 4 16 5.11929 16 6.5V11.0638ZM16 11.0638C15.998 11.8772 15.9847 12.3486 15.9004 12.8057" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M8.83852 16.8304L8.79074 16.954C8.70737 17.1698 8.66566 17.2777 8.63439 17.3796C8.33094 18.3683 8.55824 19.4437 9.23586 20.2251C9.30569 20.3057 9.38747 20.3874 9.55102 20.551C9.64573 20.6457 9.69309 20.6931 9.73502 20.7268C10.1537 21.0639 10.764 21.0097 11.1167 20.6041C11.1521 20.5634 11.1903 20.5085 11.2669 20.3986L14.2787 16.0725C14.9181 15.154 15.2378 14.6948 15.4645 14.1949C15.6657 13.7513 15.812 13.2848 15.9004 12.8057C15.9848 12.3486 15.9981 11.8772 16 11.0638V8.26803C15.9964 6.93482 15.9635 6.20815 15.673 5.63803C15.3854 5.07354 14.9265 4.6146 14.362 4.32698C13.7203 4 12.8802 4 11.2 4H7.69103C6.22388 4 5.4903 4 4.89864 4.26899C4.3772 4.50605 3.93452 4.88744 3.62294 5.36807C3.26938 5.91343 3.16087 6.63894 2.94384 8.08995L2.4121 11.645C2.27007 12.5946 2.19905 13.0694 2.34113 13.4387C2.46584 13.7628 2.69915 14.0336 3.00125 14.2049C3.34542 14.4 3.82553 14.4 4.7857 14.4H7.17222C7.54357 14.4 7.72925 14.4 7.86615 14.4256C8.67951 14.578 9.21585 15.3603 9.06475 16.1739C9.03932 16.3108 8.97239 16.484 8.83852 16.8304Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiThumbReactionDislikeDuoStroke icon from the duo-stroke style in general category.
 */
export default {
  name: 'PiThumbReactionDislikeDuoStroke',
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
      default: 'thumb-reaction-dislike icon'
    }
  }
}
</script>
