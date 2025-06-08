<script>
  /**
   * PiScaleStroke icon from the stroke style in editing category.
   */
  export let size = 24;
  export let color = undefined;
  export let className = undefined;
  export let ariaLabel = 'scale icon';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
  fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: {color || 'currentColor'}"
  role="img"
  aria-label={ariaLabel}
  {...$$restProps}
>
  <path d="M4.22213 12.707L7.75767 16.2425M9.87948 7.05L13.415 10.5855M12.7077 4.22163L14.829 6.34295M7.05033 9.87861L9.17165 11.9999M3.65648 17.7981L6.20207 20.3437C6.9941 21.1357 7.39012 21.5318 7.84678 21.6801C8.24846 21.8107 8.68116 21.8107 9.08284 21.6801C9.5395 21.5318 9.93552 21.1357 10.7276 20.3437L20.3442 10.7271C21.1362 9.93503 21.5323 9.53901 21.6806 9.08236C21.8111 8.68067 21.8111 8.24797 21.6806 7.84629C21.5323 7.38963 21.1362 6.99361 20.3442 6.20158L17.7986 3.65599C17.0066 2.86396 16.6106 2.46794 16.1539 2.31957C15.7522 2.18905 15.3195 2.18905 14.9178 2.31957C14.4612 2.46794 14.0652 2.86396 13.2731 3.65599L3.65648 13.2726C2.86445 14.0647 2.46843 14.4607 2.32005 14.9174C2.18954 15.319 2.18954 15.7517 2.32005 16.1534C2.46843 16.6101 2.86445 17.0061 3.65648 17.7981Z" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
