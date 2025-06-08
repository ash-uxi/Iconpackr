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
    <path d="M14.2708 12.7509C14.4003 11.196 15.7001 10 17.2604 10H18.7378C20.2988 10 21.599 11.1971 21.7276 12.7528L21.9114 14.9762C21.9588 15.5483 21.4997 16.0353 20.9257 16.0217V16.0217C20.4082 16.0095 19.973 16.4073 19.9388 16.9238L19.7082 20.4024C19.6486 21.3013 18.9021 22 18.0012 22C17.1007 22 16.3543 21.3019 16.2943 20.4034L16.0617 16.9231C16.027 16.4036 15.5955 16 15.0749 16.0001V16.0001C14.4963 16.0001 14.0412 15.5056 14.0893 14.929L14.2708 12.7509Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M2.27077 12.7509C2.40034 11.196 3.70014 10 5.2604 10H6.73781C8.29882 10 9.59898 11.1971 9.72761 12.7528L9.91145 14.9762C9.95876 15.5483 9.49966 16.0353 8.92569 16.0217V16.0217C8.40819 16.0095 7.973 16.4073 7.93876 16.9238L7.7082 20.4024C7.64862 21.3013 6.90211 22 6.00122 22C5.10069 22 4.35435 21.3019 4.29429 20.4034L4.06169 16.9231C4.02698 16.4036 3.59548 16 3.07487 16.0001V16.0001C2.49626 16.0001 2.04121 15.5056 2.08926 14.929L2.27077 12.7509Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M20 5C20 6.10457 19.1046 7 18 7C16.8954 7 16 6.10457 16 5C16 3.89543 16.8954 3 18 3C19.1046 3 20 3.89543 20 5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M8 5C8 6.10457 7.10457 7 6 7C4.89543 7 4 6.10457 4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5Z" stroke="currentColor" stroke-width="2" fill="none"/>
  </svg>
</template>

<script>
/**
 * PiPeopleMaleMaleStroke icon from the stroke style in users category.
 */
export default {
  name: 'PiPeopleMaleMaleStroke',
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
      default: 'people-male-male icon'
    }
  }
}
</script>
