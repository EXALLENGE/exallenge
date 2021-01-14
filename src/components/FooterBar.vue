<template>
  <div class="page-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-logo">
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="rocketIconTitle"
            class="footer-logo-icon"
          >
            <title id="rocketIconTitle">Rocket</title>
            <path
              d="M12.7526 9.92418C12.2059 10.2861 11.679 10.7057 11.1924 11.1924C10.4754 11.9093 10.4947 11.9482 9.85359 12.682M12.7526 9.92418C16.178 7.65685 20.3848 7.65685 20.3848 7.65685C20.3848 7.65685 20.3848 11.8636 18.1174 15.289M12.7526 9.92418L18.1174 15.289M18.1174 15.289C17.7555 15.8358 17.3359 16.3626 16.8492 16.8492C16.1323 17.5662 16.0934 17.5469 15.3596 18.188M6.11523 17.429C5.74278 17.9526 5.53552 18.2635 5.53552 18.2635L9.77816 22.5061C9.77816 22.5061 10.0891 22.2988 10.6127 21.9264M6.11523 17.429L2.70709 14.0208L8.36394 11.1924L9.85359 12.682M6.11523 17.429C6.83965 16.4105 8.18898 14.5874 9.85359 12.682M10.6127 21.9264L14.0208 25.3345L16.8492 19.6777L15.3596 18.188M10.6127 21.9264C11.6311 21.202 13.4542 19.8526 15.3596 18.188"
            />
            <path
              d="M5.00003 23C5.35031 21.5825 5.99994 21.0001 6.5 21.5C7.00003 22 6.41751 22.6497 5.00003 23Z"
            />
          </svg>
          <a class="footer-logo-name">EXALLENGE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

.page-footer {
  width: 100%;
  background-color: #f2f2f2;
  color: #c3c3c3;
  padding-top: 30px;
  padding-bottom: 10px;
}

.container {
  width: 1200px;
  margin: 0 auto;
  background-color: #f2f2f2;
}

.footer-top {
  margin-bottom: 45px;
}

.footer-logo-name {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 26px;
  color: #505050;
  text-decoration: none;
  margin-top: 18px;
  margin-right: 20px;
}

.footer-logo-icon {
  width: 24px;
  height: 24px;
  stroke: #30b58b;
  stroke-width: 1;
  stroke-linecap: square;
  stroke-linejoin: miter;
  fill: none;
  color: #30b58b;
}

.footer-middle {
  display: flex;
  border-top: 1px solid #5e5e5e;
  padding-top: 50px;
  padding-bottom: 50px;
}

.footer-menu {
  width: 150px;
  margin-right: 20px;
}

.footer-menu h3 {
  margin: 0;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 26px;
  color: #707070;
  font-family: Arial, Tahoma, Verdana, sans-serif;
}

.footer-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-menu li {
  margin-bottom: 15px;
}

.footer-menu a {
  font-size: 16px;
  color: #707070;
  text-decoration: none;
  font-family: Arial, Tahoma, Verdana, sans-serif;
}

@media only screen and (max-width: 1200px) {
  .footer-top,
  .footer-middle {
    padding-left: 30px;
  }
  .container {
    width: initial;
  }
}

@media only screen and (max-width: 600px) {
  .footer-middle {
    display: block;
  }
  .footer-menu {
    margin-bottom: 30px;
  }
}
</style>

<script>
export default {};
</script>
