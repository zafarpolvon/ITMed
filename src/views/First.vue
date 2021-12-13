<template>
  <div class="home">
    <Navbar />
    <div class="container mx-auto med__title">
      <h2>Для тестового задания</h2>
    </div>
    <div class="med mt-24">
      <div class="med__box">
        <div class="container mx-auto py-20">
          <form action="">
            <h3 class="med__step">Шаг 1.</h3>
            <div class="grid grid-cols-3 gap-4 mt-10">
              <Select :options="countries"
                    :stock="'Выберите страну'"
                    :value="infoUser.countries ? infoUser.countries.name : ''"
                    :titleselect="'Выберите страну'"
                    class="select"
                    @input="countrySubmit($event)"
              />
              <Select :options="types"
                    :stock="'Выберите визу'"
                    :value="infoUser.types ? infoUser.types.name : ''"
                    :titleselect="'Тип визы'"
                    class="select"
                    @input="typeSubmit($event)"
              />
            </div>
            <div class="grid grid-cols-3 gap-4 mt-5">
              <div class="grid grid-cols-2 gap-4">
                <Calendar :title="'Въезд'" @datevalue="fromDate($event)" />
                <Calendar :title="'Выезд'" @datevalue="toDate($event)" />
              </div>
              <Select :options="dateTry"
                    :stock="'Выберите заезд'"
                    :value="infoUser.try ? infoUser.try.name : ''"
                    :titleselect="'Количество заездов'"
                    class="select"
                    @input="dateSubmit($event)"
              />
              <Select :options="timespent"
                    :stock="'Выберите время'"
                    :value="infoUser.timespent ? infoUser.timespent.name : ''"
                    :titleselect="'Время обработки'"
                    class="select"
                    @input="timeSubmit($event)"
              />
            </div>
            <div class="med__footer mt-10">
              <div class="med__cost">
                <h5>Предварительная стоимость:</h5>
                <h4>€ {{ result || 0 }}</h4>
              </div>
              <div>
                <a @click="sendData" class="med__save cursor-pointer">
                  <span>Продолжить</span>
                  <i class="fas fa-chevron-right"></i>
                </a>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Select from '../components/Select.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'Home',
  data: () => ({
    countries: [],
    types: [],
    dateTry: [],
    timespent: [],
    country: {},
    type: {},
    date: {},
    time: {},
    from: '',
    to: ''
  }),
  async mounted () {
    this.countries = await this.$store.dispatch('loadCountries')
    this.types = await this.$store.dispatch('loadTypes')
    this.dateTry = await this.$store.dispatch('loadTry')
    this.timespent = await this.$store.dispatch('loadTimespent')
    // load from state
    this.country = this.infoUser.countries ? this.infoUser.countries : {}
    this.type = this.infoUser.types ? this.infoUser.types : {}
    this.date = this.infoUser.try ? this.infoUser.try : {}
    this.time = this.infoUser.timespent ? this.infoUser.timespent : {}
  },
  methods: {
    countrySubmit (event) {
      this.country = event
    },
    typeSubmit (event) {
      this.type = event
    },
    dateSubmit (event) {
      this.date = event
    },
    timeSubmit (event) {
      this.time = event
    },
    fromDate (event) {
      this.from = event
    },
    toDate (event) {
      this.to = event
    },
    sendData () {
      const info = {
        countries: this.country,
        types: this.type,
        try: this.date,
        timespent: this.time,
        from: this.from,
        to: this.to,
        cost: this.result,
        id: 1
      }
      this.$store.commit('addToCart', info)
      this.$router.push('/second')
    }
  },
  computed: {
    result: function () {
      return (Number(this.date.price) || 0) + (Number(this.type.price) || 0) + (Number(this.time.price) || 0)
    },
    infoUser () {
      return this.$store.getters.USER
    }
  },
  components: {
    Navbar,
    Select,
    Calendar
  }
}
</script>
<style scoped>
  .med {
    position: relative;
  }
  .med__title h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 50px;
    color: #101010;
  }
  .med__box {
    background: #3748AA;
  }
  .med__box::before{
    position:absolute;
    left: 10%;
    content:"";
    margin-top: -80px;
    border-width:30px 15px;
    border-style:solid;
    border-top: 40px solid transparent;
    border-bottom: 40px solid #3748AA;
    border-left: 0px solid transparent;
    border-right: 40px solid transparent;
  }
  .med__cost {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    padding: 30px 50px;
  }
  .med__cost h5 {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-align: left;
    padding-right: 30px;
    width: 50%;
  }
  .med__step {
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 50px;
    color: #FFFFFF;
  }
  .med__cost h4 {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: flex-end;
    color: #FF6700;
    margin-left: 30px;
  }
  .med__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .med__save {
    background: #0BAF4F;
    box-shadow: 0px 20px 40px #0B1A73;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    padding: 10px 20px;
  }
  .med__save i {
    margin-left: 10px;
  }
</style>
