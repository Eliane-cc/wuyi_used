<template>
  <svg class="svg-icon" aria-hidden="true" :style="{width: iconSize, height: iconSize}">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
  export default {
    name: "IconSvg",
    props: {
      iconClass: {
        type: String,
        required: true
      },
      iconSize: {
        type: String
      },
    },
    computed: {
      iconName() {
        return `#${this.iconClass}`
      }
    }
  }
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    font-size: 18px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>