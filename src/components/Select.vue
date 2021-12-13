<template>
  <div>
    <h5 class="title">{{ titleselect }}</h5>
    <div
      class="custom__select"
      :tabindex="tabindex"
      @blur="open = false"
    >
      <div
        class="selected"
        :class="{open: open}"
        @click="open = !open"
      >
        {{ value ? value : selected }}
      </div>
      <div
        class="items"
        :class="{selectHide: !open}"
      >
        <div
          class="item"
          v-for="(option, i) of options"
          :key="i"
          @click="selected=option.name; open=false; $emit('input', option)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'tabindex', 'stock', 'titleselect', 'value'],
  data () {
    return {
      selected: this.options ? this.stock : null,
      open: false
    }
  },
  mounted () {
    this.$emit('input', this.selected)
  }
}
</script>

<style scoped>
.title {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  margin-bottom: 10px;
}
.custom__select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 40px;
  line-height: 38px;
}

.selected {
  background-color: #273795;
  border-radius: 4px;
  border: 1px solid #273795;
  color: #ffffff;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
  outline: none;
}

.selected::after {
  font-family: FontAwesome;
  content: "\f078";
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  right: 10px;
  top: 8px;
  width: 25px;
  height: 25px;
  background: #FF6700;
  border-radius: 4px;
}
.selected::after, .selected.open {
  color: #fff;
}
.selected.open{
  border-bottom: 1px solid #273795;
  border-radius: 6px 6px 0px 0px;
  background: #fff;
  color: #3748AA;
}
.items {
  color: #FF6700;
  border-radius: 0px 0px 4px 4px;
  overflow-y: scroll;
  height: auto;
  min-height: auto;
  max-height: 200px;
  border-right: 1px solid #FF6700;
  border-left: 1px solid #FF6700;
  border-bottom: 1px solid #FF6700;
  position: absolute;
  background-color: #ffffff;
  left: 0;
  right: 0;
  z-index: 9999;
}

.item{
  color: #FF6700;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
}

.item:hover{
  background-color: #FF6700;
  color: #fff;
}

.selectHide {
  display: none;
}

</style>
