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
    <g opacity="0.28"><path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4Z" :fill="color || 'currentColor'" /><path d="M4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H4Z" :fill="color || 'currentColor'" /><path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H10C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17H4Z" :fill="color || 'currentColor'" /></g> <path d="M19.2141 10.8275C18.725 10.8206 18.1912 10.9234 17.7112 11.2078C17.2284 10.9256 16.6968 10.8274 16.2286 10.8274C14.6441 10.8274 13 12.0992 13 13.994C13 15.6985 14.1096 17.0349 15.0616 17.8629C15.5575 18.2943 16.065 18.6362 16.4814 18.874C16.6893 18.9926 16.885 19.0914 17.0548 19.164C17.2637 19.2534 17.4845 19.3271 17.7143 19.3271C17.944 19.3271 18.1649 19.2534 18.3738 19.164C18.5436 19.0914 18.7393 18.9926 18.9472 18.874C19.3635 18.6362 19.8711 18.2943 20.367 17.8629C21.319 17.0349 22.4286 15.6985 22.4286 13.994C22.4286 12.0882 20.7748 10.8494 19.2141 10.8275Z" :fill="color || 'currentColor'" />
  </svg>
</template>

<script>
/**
 * PiListHeartDuoSolid icon from the duo-solid style in general category.
 */
export default {
  name: 'PiListHeartDuoSolid',
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
      default: 'list-heart icon'
    }
  }
}
</script>
