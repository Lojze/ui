<template>
  <!-- 我发现不加这个他们就不居中 -->
  <div :style="{
    display: 'inline-flex',
    height: iconSize,
    width: iconSize
    }">
    <svg
      :style="{ fill: color }"
      :class="[
        'z-icon-' + name,
        {
          'icon-loading': ~name.indexOf('reload'),
        },
      ]"
    >
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: "zIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    // 图标的颜色
    color: {
      type: String,
      default: "#555",
    },
    size: {
      // 用户可能传入带单位 和 不带单位的
      type: [Number, String],
      default: "1em",
    },
  },
  computed: {
    iconSize() {
      if (typeof this.size === "number") return this.size + "px";
      else return this.size;
    }
  }
};
</script>
