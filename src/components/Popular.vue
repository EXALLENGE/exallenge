<template>
  <div class="popular-and-price">
    <div class="container">
      <h2 class="section-title">Популярные курсы</h2>
      <a class="btn to-catalog" href="#" title="Посмотреть все курсы">Все курсы</a>
      <div class="popular-items clearfix">
        <div class="catalog-item">
          <h3>Python для школьников</h3>
          <p>Изучим основы языка, напишем первые программы. Прорешаем более 70 практических задач которые проверят наши учителя.</p>
          <a href="#" class="btn btn-info">Описание</a>
          {% if user.is_authenticated %}
          <a
            href="/python-school-enroll"
            class="btn btn-buy"
          >Записаться</a>
          {% else %}
          <a href="/login" class="btn btn-buy">Записаться</a>

          {% endif %}
        </div>
        <div class="catalog-item">
          <h3>Python для студентов</h3>
          <p>Разберем как основы так и продвинутые темы языка. Разработаем выпускной проект в группах с использованием системы контроля версий.</p>
          <a href="#" class="btn btn-info">Описание</a>
          <a href="#" class="btn btn-buy">Записаться</a>
        </div>
        <div class="catalog-item">
          <h3>Фронтенд-разработка для студентов</h3>
          <p>Рассмотрим как устроен фронтенд в 2019 году и что нужно знать для того чтобы заниматься разработкой. Реализуем проект с использованием HTML, CSS и JS.</p>
          <a href="#" class="btn btn-info">Описание</a>
          <a href="#" class="btn btn-buy">Записаться</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {};
</script>
