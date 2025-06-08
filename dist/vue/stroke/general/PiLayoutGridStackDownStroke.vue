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
    <path d="M15.2 10C14.0799 10 13.5198 10 13.092 9.78201C12.7157 9.59027 12.4097 9.28431 12.218 8.90798C12 8.48016 12 7.92011 12 6.8V6.2C12 5.0799 12 4.51984 12.218 4.09202C12.4097 3.7157 12.7157 3.40973 13.092 3.21799C13.5198 3 14.0799 3 15.2 3L17.8 3C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.07989 21 6.2V6.8C21 7.9201 21 8.48016 20.782 8.90798C20.5903 9.28431 20.2843 9.59027 19.908 9.78201C19.4802 10 18.9201 10 17.8 10H15.2Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M5.5 10C5.03535 10 4.80302 10 4.60982 9.96157C3.81644 9.80376 3.19624 9.18356 3.03843 8.39018C3 8.19698 3 7.96466 3 7.5L3 5.5C3 5.03534 3 4.80302 3.03843 4.60982C3.19624 3.81644 3.81644 3.19624 4.60982 3.03843C4.80302 3 5.03534 3 5.5 3C5.96466 3 6.19698 3 6.39018 3.03843C7.18356 3.19624 7.80376 3.81644 7.96157 4.60982C8 4.80302 8 5.03534 8 5.5V7.5C8 7.96466 8 8.19698 7.96157 8.39018C7.80376 9.18356 7.18356 9.80376 6.39018 9.96157C6.19698 10 5.96466 10 5.5 10Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M6.2 21C5.0799 21 4.51984 21 4.09202 20.782C3.7157 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8L3 17.2C3 16.0799 3 15.5198 3.21799 15.092C3.40973 14.7157 3.7157 14.4097 4.09202 14.218C4.51984 14 5.0799 14 6.2 14H17.8C18.9201 14 19.4802 14 19.908 14.218C20.2843 14.4097 20.5903 14.7157 20.782 15.092C21 15.5198 21 16.0799 21 17.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiLayoutGridStackDownStroke icon from the stroke style in general category.
 */
export default {
  name: 'PiLayoutGridStackDownStroke',
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
      default: 'layout-grid-stack-down icon'
    }
  }
}
</script>
