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
    <path :fill="color || 'currentColor'" d="M1.108 10.734A1 1 0 0 1 2.072 10h5.005C8.139 10 9 10.861 9 11.923 9 13.07 9.93 14 11.077 14h1.846C14.07 14 15 13.07 15 11.923c0-1.062.861-1.923 1.923-1.923h5.005a1 1 0 0 1 .964.734q.045.165.072.332c.036.233.036.466.036.73v.248c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.358.583-.875.071-1.96.071-3.322.071H9.956c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C1 14.491 1 13.407 1 12.044v-.248c0-.264 0-.497.036-.73q.027-.168.072-.332M12 10c-.328 0-.656-.11-.925-.328A11 11 0 0 1 9.2 7.726a1 1 0 0 1 1.6-1.2q.098.13.2.256V4a1 1 0 1 1 2 0v2.782q.102-.126.2-.256a1 1 0 0 1 1.6 1.2 11 11 0 0 1-1.875 1.946c-.269.218-.597.328-.925.328" /> <path d="M21.928 11a2 2 0 0 0-.059-.18c-.055-.146-.134-.283-.29-.558l-1.736-3.037c-.671-1.175-1.007-1.762-1.479-2.19a4 4 0 0 0-1.444-.838M2.072 11q.025-.09.059-.18c.055-.146.134-.283.29-.558l1.736-3.037c.671-1.175 1.007-1.762 1.478-2.19a4 4 0 0 1 1.445-.838" opacity=".28" />
  </svg>
</template>

<script>
/**
 * PiInboxIncomingDuoSolid icon from the duo-solid style in communication category.
 */
export default {
  name: 'PiInboxIncomingDuoSolid',
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
      default: 'inbox-incoming icon'
    }
  }
}
</script>
