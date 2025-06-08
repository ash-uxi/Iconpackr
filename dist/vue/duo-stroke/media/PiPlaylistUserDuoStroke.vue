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
    <path d="M13.25 17.1179H10.75C10.06 17.1179 9.5 17.6779 9.5 18.3679C9.5 18.7129 9.78 18.9929 10.125 18.9929H13.875C14.22 18.9929 14.5 18.7129 14.5 18.3679C14.5 17.6779 13.94 17.1179 13.25 17.1179ZM13 13.6899C13 13.9552 12.8946 14.2095 12.7071 14.397C12.5196 14.5846 12.2652 14.6899 12 14.6899C11.7348 14.6899 11.4804 14.5846 11.2929 14.397C11.1054 14.2095 11 13.9552 11 13.6899C11 13.4247 11.1054 13.1704 11.2929 12.9828C11.4804 12.7953 11.7348 12.6899 12 12.6899C12.2652 12.6899 12.5196 12.7953 12.7071 12.9828C12.8946 13.1704 13 13.4247 13 13.6899Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M3 14C3 12.5999 3 11.8998 3.27248 11.365C3.51217 10.8946 3.89462 10.5122 4.36502 10.2725C4.8998 10 5.59987 10 7 10H17C18.4001 10 19.1002 10 19.635 10.2725C20.1054 10.5122 20.4878 10.8946 20.7275 11.365C21 11.8998 21 12.5999 21 14V18C21 19.4001 21 20.1002 20.7275 20.635C20.4878 21.1054 20.1054 21.4878 19.635 21.7275C19.1002 22 18.4001 22 17 22H7C5.59987 22 4.8998 22 4.36502 21.7275C3.89462 21.4878 3.51217 21.1054 3.27248 20.635C3 20.1002 3 19.4001 3 18V14Z" :stroke="color || 'currentColor'" stroke-width="2" fill="none"/>
  <path d="M5 6H19M7 2.00127L17 2" :stroke="color || 'currentColor'" stroke-width="2" opacity="0.28" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPlaylistUserDuoStroke icon from the duo-stroke style in media category.
 */
export default {
  name: 'PiPlaylistUserDuoStroke',
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
      default: 'playlist-user icon'
    }
  }
}
</script>
