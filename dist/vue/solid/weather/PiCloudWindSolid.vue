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
    <path d="M12.4998 2C15.659 2 18.3597 3.95271 19.4652 6.71458C21.5624 7.79159 22.9998 9.97693 22.9998 12.5C22.9998 16.0898 20.0896 19 16.4998 19H14.8997C14.7422 18.224 14.4049 17.5132 13.9333 16.913C16.2486 16.4758 17.9997 14.4424 17.9997 12C17.9997 9.23858 15.7612 7 12.9997 7C12.094 7 11.2361 7.24355 10.4976 7.67075C9.31045 8.35745 8.77017 9.73309 9.08973 11H1.99976C1.85902 11 1.72054 11.0097 1.58496 11.0284C2.28872 9.63176 3.57045 8.57631 5.11631 8.17566C5.41077 6.52295 6.24655 5.0576 7.43376 3.96951C8.76828 2.74641 10.5469 2 12.4998 2Z" fill="currentColor" stroke="none"/>
  <path d="M12.5007 11.1332C12.6468 11.0487 12.8162 11 13 11C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H2C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15H13C14.6568 15 16 13.6569 16 12C16 10.3431 14.6568 9 13 9C12.4552 9 11.9415 9.14611 11.4993 9.40196C11.0212 9.6785 10.8578 10.2902 11.1344 10.7683C11.4109 11.2464 12.0226 11.4097 12.5007 11.1332Z" fill="currentColor" stroke="none"/>
  <path d="M2 17C1.44772 17 1 17.4477 1 18C1 18.5523 1.44772 19 2 19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21C9.8162 21 9.6468 20.9513 9.50073 20.8668C9.02267 20.5903 8.41094 20.7536 8.13439 21.2317C7.85785 21.7098 8.02121 22.3215 8.49927 22.598C8.94155 22.8539 9.45523 23 10 23C11.6569 23 13 21.6569 13 20C13 18.3431 11.6569 17 10 17H2Z" fill="currentColor" stroke="none"/>
  </svg>
</template>

<script>
/**
 * PiCloudWindSolid icon from the solid style in weather category.
 */
export default {
  name: 'PiCloudWindSolid',
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
      default: 'cloud-wind icon'
    }
  }
}
</script>
