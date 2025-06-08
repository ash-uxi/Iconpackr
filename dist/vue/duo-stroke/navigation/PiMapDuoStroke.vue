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
    <g opacity="0.28"  fill="none"><path d="M9 17.2361V4.23608C8.87654 4.23608 8.75307 4.24752 8.6312 4.27038C8.35601 4.32201 8.09364 4.45319 7.56892 4.71556L4.76892 6.11556C4.1268 6.43662 3.80573 6.59715 3.57116 6.83665C3.36373 7.04844 3.20597 7.30369 3.10931 7.58394C3 7.90085 3 8.25981 3 8.97773V14.8754C3 16.5422 3 17.3757 3.34218 17.8827C3.66292 18.358 4.17221 18.6727 4.74074 18.7471C5.34729 18.8264 6.09273 18.4537 7.58359 17.7082C8.09388 17.4531 8.34908 17.3255 8.61626 17.2732C8.74297 17.2485 8.87149 17.2361 9 17.2361Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/><path d="M15 19.764V6.76397C15.1285 6.76397 15.257 6.75158 15.3837 6.72681C15.6509 6.67458 15.9061 6.54699 16.4164 6.29183C17.9073 5.5464 18.6527 5.17368 19.2593 5.25298C19.8278 5.32731 20.3371 5.64206 20.6578 6.11734C21 6.62439 21 7.45781 21 9.12465V15.0223C21 15.7402 21 16.0992 20.8907 16.4161C20.794 16.6964 20.6363 16.9516 20.4288 17.1634C20.1943 17.4029 19.8732 17.5634 19.2311 17.8845L16.4311 19.2845C15.9064 19.5468 15.644 19.678 15.3688 19.7297C15.2469 19.7525 15.1235 19.764 15 19.764Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/></g>
  <path d="M9 17.2361V4.23608C9.12346 4.23608 9.24693 4.24752 9.3688 4.27038C9.64399 4.32201 9.90636 4.45319 10.4311 4.71556L13.5836 6.29181C14.0939 6.54697 14.3491 6.67455 14.6163 6.72679C14.743 6.75156 14.8715 6.76395 15 6.76395V19.7639C14.8765 19.7639 14.7531 19.7525 14.6312 19.7297C14.356 19.678 14.0936 19.5468 13.5689 19.2845L10.4164 17.7082C9.9061 17.4531 9.65092 17.3255 9.38374 17.2732C9.25703 17.2485 9.12851 17.2361 9 17.2361Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiMapDuoStroke icon from the duo-stroke style in navigation category.
 */
export default {
  name: 'PiMapDuoStroke',
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
      default: 'map icon'
    }
  }
}
</script>
