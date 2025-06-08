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
    <path d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V6C22 6.53043 21.7893 7.03914 21.4142 7.41421C21.0391 7.78929 20.5304 8 20 8H4C3.46957 8 2.96086 7.78929 2.58579 7.41421C2.21071 7.03914 2 6.53043 2 6V5Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M4 8H20V17C20 18.0609 19.5786 19.0783 18.8284 19.8284C18.0783 20.5786 17.0609 21 16 21H8C6.93913 21 5.92172 20.5786 5.17157 19.8284C4.42143 19.0783 4 18.0609 4 17V8Z" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  <path d="M9.73607 11.9268L11.6111 11.2497C11.8411 11.1667 12.0911 11.1667 12.3211 11.2497L14.2231 11.9368C14.6091 12.0768 14.8781 12.4287 14.9101 12.8387L14.9891 13.8658C15.0457 14.6032 14.8875 15.3413 14.5337 15.9908C14.1798 16.6403 13.6454 17.1735 12.9951 17.5257L12.4761 17.8057C12.3201 17.8904 12.1452 17.9339 11.9678 17.9321C11.7904 17.9304 11.6163 17.8834 11.4621 17.7957L10.9321 17.4937C10.3234 17.1468 9.82165 16.6395 9.48135 16.0272C9.14104 15.4148 8.97527 14.7208 9.00207 14.0207L9.04707 12.8688C9.06307 12.4438 9.33607 12.0708 9.73607 11.9268Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiArchiveShieldDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
export default {
  name: 'PiArchiveShieldDuoStroke',
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
      default: 'archive-shield icon'
    }
  }
}
</script>
