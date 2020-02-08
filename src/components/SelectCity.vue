<template>
  <div class="checkboxes">
    <label class="container_checkbox">
      Москва
      <input type="radio" name="city" />
      <span class="checkmark"></span>
    </label>
    <label class="container_checkbox">
      Санкт-Петербург
      <input type="radio" name="city" />
      <span class="checkmark"></span>
    </label>
    <label class="container_checkbox">
      Рязань
      <input type="radio" name="city" />
      <span class="checkmark"></span>
    </label>
    <label class="container_checkbox">
      Краснодар
      <input type="radio" name="city" />
      <span class="checkmark"></span>
    </label>
    <label class="container_checkbox">
      Казань
      <input type="radio" name="city" />
      <span class="checkmark"></span>
    </label>
    <label class="container_checkbox">
      Онлайн-формат
      <input type="radio" name="city" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<style scoped>
.container_checkbox {
  display: table;
  position: relative;
  padding-left: 45px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 40px;
}

/* Hide the browser's default radio button */
.container_checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border: solid 2px #979797;
  background: #fff;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container_checkbox:hover input ~ .checkmark {
  border: solid 2px #000000;
}

/* When the radio button is checked, add a blue background */
.container_checkbox input:checked ~ .checkmark {
  background-color: #fff;
  border: solid 2px #a38b70;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container_checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container_checkbox .checkmark:after {
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #a38b70;
}
</style>

<script>
export default {};
</script>
