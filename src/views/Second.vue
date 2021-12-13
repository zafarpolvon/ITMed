<template>
  <div class="home">
    <Navbar />
    <div class="container mx-auto med__title">
      <h2>Для тестового задания</h2>
    </div>
    <div class="med mt-24">
      <div class="med__box">
        <div class="container mx-auto py-20 px-4 xl:px-0 md:px-0">
          <h3 class="med__step">Шаг 2.</h3>
          <h4 class="med__user"><span>Пользователь</span> <span>{{ name || '' }} {{ surname[0] || '' }}{{ surname.length ? '.' : '' }} </span></h4>
          <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 gap-4">
            <Input :placeholder="'Введите Имя'" :title="'Имя'" v-model="name"  />
            <Input :placeholder="'Введите фамилию'" :title="'Фамилия'" v-model="surname" />
            <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 gap-4">
              <div class="col-span-2 xl:col-span-1 md:col-span-1">
                <Calendar :value="'Дата рождения'" :title="'Дата рождения'" @datevalue="entryDate($event)" />
              </div>
              <div class="col-span-2 xl:col-span-2 md:col-span-2">
                <Select :options="citizenship"
                  :titleselect="'Гражданство'"
                  :stock="'Выберите страну'"
                  :value="'Дата рождения'"
                  class="select"
                  @input="citezenSubmit($event)"
                />
              </div>
            </div>
          </div>
          <div class="med__footer mt-10">
            <div class="med__cost">
              <div class="med__info">
                <div class="med__visa">
                  <h3>Виза</h3>
                  <h6>Страна: {{ infoUser.countries.name ? infoUser.countries.name : 'Не указано' }}</h6>
                  <h6>Вид визы: {{ infoUser.types.name ? infoUser.types.name : 'Не указано' }}</h6>
                </div>
                <div class="med__date">
                  <h6>Въезд: {{ infoUser.from ? infoUser.from : 'Не указано' }}</h6>
                  <h6>Время обработки: {{ infoUser.timespent.name ? infoUser.timespent.name : 'Не указано' }}</h6>
                </div>
              </div>
              <div class="med__total">
                <h5>Предварительная стоимость:</h5>
                <h4>€{{ infoUser.cost ? infoUser.cost : 'Не указано' }}</h4>
              </div>
            </div>
            <div class="med__button cursor-pointer">
              <a @click="$router.go(-1)" class="med__back">
                <i class="fas fa-chevron-left"></i>
                <span>Вернутся</span>
              </a>
              <a @click="loadData()" class="med__save">
                <span>Готово</span>
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Select from '../components/Select.vue'
import Calendar from '../components/Calendar.vue'
import Input from '../components/Input.vue'

export default {
  name: 'Home',
  data: () => ({
    citizenship: [
      {
        id: 0,
        name: 'Узбекистан'
      },
      {
        id: 1,
        name: 'Германия'
      },
      {
        id: 2,
        name: 'Россия'
      },
      {
        id: 3,
        name: 'США'
      },
      {
        id: 4,
        name: 'Мексика'
      },
      {
        id: 5,
        name: 'Бразилия'
      }
    ],
    name: '',
    surname: '',
    birthDate: '',
    citizen: ''
  }),
  methods: {
    citezenSubmit (event) {
      this.citizen = event
    },
    entryDate (event) {
      this.birthDate = event
    },
    loadData () {
      const info = {
        name: this.name,
        surname: this.surname,
        birthDate: this.birthDate,
        citizen: this.citizen,
        cost: this.infoUser.cost,
        country: this.infoUser.countries,
        timespent: this.infoUser.timespent,
        to: this.infoUser.to,
        from: this.infoUser.from,
        try: this.infoUser.try,
        types: this.infoUser.types
      }
      console.log(info)
    }
  },
  computed: {
    infoUser () {
      return this.$store.getters.USER
    }
  },
  components: {
    Navbar,
    Select,
    Calendar,
    Input
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
  .med__user {
    margin: 30px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
  }
  .med__user span {
    border-bottom: 3px solid #FFFFFF;
    text-transform: capitalize;
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
    flex-direction: column;
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
    flex-direction: column;
    justify-content: space-between;
  }
  .med__button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 30px;
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
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    width: 170px;
    height: 50px;
    padding: 0 20px;
    margin-left: 10px;
  }
  .med__save i {
    margin-left: 10px;
  }
  .med__info {
    display: flex;
  }
  .med__total {
    display: flex;
    margin-top: 20px;
  }
  .med__total h5 {
    width: 20%;
  }
  .med__back {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    box-shadow: 0px 20px 40px #0B1A73;
    border-radius: 4px;
    background: #3748AA;
    border: 1px solid #7182ED;
    width: 170px;
    height: 50px;
    padding: 0 20px;
    margin-right: 10px;
  }
  .med__back i {
    margin-right: 10px;
  }
  .med__visa h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #FFFFFF;
  }
  .med__visa h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #A5AFEC;
  }
  .med__date {
    margin-left: 40px;
  }
  .med__date h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #A5AFEC;
  }
  @media (min-width:320px) {
    .med__total h5 {
      width: 100%;
    }
    .med__cost {
      padding: 20px 20px;
    }
    .med__date {
      margin-top: 15px;
    }
  }
</style>
