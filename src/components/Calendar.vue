<template>
  <div class="calendar__box">
    <h5 class="title">{{ title }}</h5>
    <date-pick :displayFormat="'DD.MM.YYYY'" v-model="date" >
      <template  v-slot:default="{toggle, inputValue}">
        <a class="calendar__item" @click="toggle">
          <span  class="calendar__text">{{ inputValue || 'Выберите дату' }}</span>
          <span class="calendar__svg"><img src="../assets/svg/31.svg" alt=""></span>
        </a>
      </template>
    </date-pick>
  </div>
</template>

<script>
import DatePick from 'vue-date-pick'
import 'vue-date-pick/dist/vueDatePick.css'
export default {
  props: ['title', 'value'],
  data: () => ({
    date: ''
  }),
  mounted () {
    this.date = this.value ? this.value : ''
  },
  methods: {
  },
  watch: {
    date: function (val) {
      this.$emit('datevalue', val)
    }
  },
  components: {
    DatePick
  }

}
</script>

<style>
  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    margin-bottom: 10px;
  }
  .calendar__box {
    width: 100%;
  }
  .vdpComponent {
    width: 100%;
  }
  .calendar__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #273795;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    align-items: center;
    padding: 0 10px;
  }
  .calendar__text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
  }
  .calendar__svg {
    background: #FF6700;
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 4px;
    padding: 2px;
  }
</style>
