<template>
  <div class="footer">
    <div id="scrollerUnHidePoint"></div>

    <div class="container">
      <img
        class="footer-logo"
        src="../../public/img/footer/white-logo.svg"
        alt="UberEats"
      />

      <hr class="footer-hr" />

      <div class="footer-links">
        <div class="footer-links-column">
          <div class="lang-selector-container">
            <img src="../../public/img/footer/world.svg" alt="Language" />
            <select name="country" id="lang-selector" class="lang-selector">
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="ch">汉语</option>
              <option value="jp">日本語</option>
            </select>
          </div>
          <div class="footer-link">
            <a href="#" class="hashtag">UberEats</a>
          </div>
          <div class="socials-symbols">
            <a href="#" class="icon-link">
              <div>
                <img
                  src="../../public/img/footer/facebook.svg"
                  alt="Facebook"
                />
              </div>
            </a>
            <a href="#" class="icon-link">
              <div>
                <img src="../../public/img/footer/twitter.svg" alt="Twitter" />
              </div>
            </a>
            <a href="#" class="icon-link">
              <div>
                <img
                  src="../../public/img/footer/instagram.svg"
                  alt="Instagram"
                />
              </div>
            </a>
          </div>
        </div>

        <div class="footer-links-column">
          <div class="footer-link"><a href="#">Об UberEats</a></div>
          <div class="footer-link">
            <a href="#">Станьте партнёром по доставке</a>
          </div>
          <div class="footer-link">
            <a href="#">Станьте партнёром-рестораном</a>
          </div>
        </div>

        <div class="footer-links-column">
          <div class="footer-link"><a href="#">Все города</a></div>
          <div class="footer-link"><a href="#">Помощь</a></div>
          <div class="footer-link"><a href="#">Цены</a></div>
          <div class="footer-link"><a href="#">FAQs</a></div>
        </div>
      </div>

      <hr class="footer-hr" />

      <div class="footer-dw-labels">
        <a href="#">
          <img
            src="../../public/img/footer/get_it_on_appstore.png"
            alt="Download On The AppStore"
          />
        </a>
        <a href="#"
          ><img
            src="../../public/img/footer/get_it_on_google.png"
            alt="Get It On Google"
          />
        </a>
      </div>

      <hr class="footer-hr" />

      <div class="footer-legal">
        <div class="footer-link">
          <a href="#">© 2017 Uber Technologies Inc.</a>
        </div>
        <div class="footer-link">
          <a href="#">Обработка персональных данных</a>
        </div>
        <div class="footer-link">
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: var(--color-dark);
  max-width: 100%;
  height: 100%;
  flex: 0 0 auto;
}

.footer-logo {
  padding: 40px 0;
}

hr {
  display: block;
  border: 0;
  margin: 0;
  padding: 0;
  height: 1px;
  border-top: 1px solid var(--color-darkergray);
}

.footer-links {
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  column-gap: 32px;
  flex-flow: row;
}

.footer-links-column {
  flex-basis: 33.3333%;
  display: flex;
  flex-flow: column nowrap;
}

.footer-link {
  padding: 8px 0;
  color: var(--color-light);
  font-size: 0.8125rem;
}

.footer-legal {
  font-size: 0.7rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
}

.lang-selector {
  border-radius: var(--border-radius);
  border-color: var(--color-darkestgray);
  color: var(--color-light);
  font-size: 0.8rem;
  padding: 10px 70px 10px 50px;
  background: url(../assets/arrow-down.svg) 93% / 8% no-repeat
    var(--color-darkestgray);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 12rem;
}

.lang-selector:focus {
  outline: none;
}

.lang-selector-container {
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 24px;
  margin-left: -16px;
}

.lang-selector-container > img {
  position: relative;
  left: 30px;
}

.hashtag {
  display: inline-block;
  font-size: medium;
}

.hashtag::before {
  content: "#";
  color: var(--color-main);
}

.socials-symbols {
  display: flex;
  gap: 10px;
  padding-top: 6px;
  padding-bottom: 13px;
}

.footer a {
  color: var(--color-light);
}

.footer a:hover {
  color: var(--color-gray);
}

.footer a:active {
  color: var(--color-main);
}

.footer-dw-labels {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
}

@media screen and (max-width: 576px) {
  .footer-links {
    flex-flow: column;
  }
  .footer-links-column {
    flex-basis: 100%;
  }
  .footer-legal {
    flex-flow: column nowrap;
  }
}

.footer {
  flex: 0 0 auto;
}
</style>
