<template>
  <div class="container mx-auto">
    <div class="navbar__box">
      <h4 class="active navbar__info">Главная</h4>
      <span>></span>
      <h4 class="navbar__info">Форма</h4>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar__box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .navbar__info {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #1f1f1f;
    margin: 0;
  }
  .active {
    color: #4F5CA9;
    border-bottom: 1px dashed #4F5CA9;
  }
  .navbar__box span {
    margin: 0 5px;
  }
</style>
