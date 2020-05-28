<template>
  <button  class="z-button"
    :type="nativeType"
    :class="[type ? 'z-button--' + type : '']"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "zButton",
  props: {
    type: String,
    nativeType: String,
    
  },
  computed: {
    
  }
};
</script>
