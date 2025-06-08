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
    <path d="M17.7044 7.3023C17.0093 5.37654 15.1654 4 13 4H6C3.23858 4 1 6.23858 1 9V15C1 17.7614 3.23857 20 6 20H13C15.1654 20 17.0093 18.6234 17.7044 16.6977L18.0704 17.0051C20.0222 18.6446 23 17.2571 23 14.708V9.29197C23 6.74294 20.0222 5.35534 18.0704 6.99486L17.7044 7.3023ZM18.0013 10.0801L18.0011 13.9145C18.014 14.1927 18.1425 14.4537 18.3568 14.6337L19.3568 15.4737C20.0074 16.0202 21 15.5577 21 14.708V9.29197C21 8.4423 20.0074 7.97976 19.3568 8.52626L18.3568 9.36624C18.1439 9.5451 18.0156 9.80403 18.0013 10.0801ZM7.70711 8.79289C7.31658 8.40237 6.68342 8.40237 6.29289 8.79289C5.90237 9.18342 5.90237 9.81658 6.29289 10.2071L8.08579 12L6.29289 13.7929C5.90237 14.1834 5.90237 14.8166 6.29289 15.2071C6.68342 15.5976 7.31658 15.5976 7.70711 15.2071L9.5 13.4142L11.2929 15.2071C11.6834 15.5976 12.3166 15.5976 12.7071 15.2071C13.0976 14.8166 13.0976 14.1834 12.7071 13.7929L10.9142 12L12.7071 10.2071C13.0976 9.81658 13.0976 9.18342 12.7071 8.79289C12.3166 8.40237 11.6834 8.40237 11.2929 8.79289L9.5 10.5858L7.70711 8.79289Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiVideoCallCancelSolid icon from the solid style in devices category.
 */
export default {
  name: 'PiVideoCallCancelSolid',
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
      default: 'video-call-cancel icon'
    }
  }
}
</script>
