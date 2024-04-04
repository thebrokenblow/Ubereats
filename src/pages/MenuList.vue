<template>
  <div class="hero">
    <div class="container">
      <div v-if="restaurant" class="hero-info">
        <h1>{{ restaurant.name }}</h1>
        <div class="hero-info-footer">
          <div class="store-type">
            {{ "₽".repeat(restaurant.priceCategory) }}
            <span> • </span>
            <span v-for="category in restaurant.categories" :key="category">
              {{ category.name }}</span
            >
          </div>
          <div class="hero-info-footer-time">
            {{ restaurant.lowerLimitCookingTime }} -
            {{ restaurant.upperLimitCookingTime }} мин
          </div>
        </div>
      </div>
    </div>
  </div>
  <a id="menu"></a>

  <div class="tabs">
    <input
      type="radio"
      name="tab-btn"
      data-num="0"
      id="tab-btn-1"
      value=""
      checked
    />
    <input type="radio" name="tab-btn" data-num="1" id="tab-btn-2" value="" />
    <input type="radio" name="tab-btn" data-num="2" id="tab-btn-3" value="" />
    <input type="radio" name="tab-btn" data-num="3" id="tab-btn-4" value="" />
    <input type="radio" name="tab-btn" data-num="4" id="tab-btn-5" value="" />
    <input type="radio" name="tab-btn" data-num="5" id="tab-btn-6" value="" />

    <div class="tabs-labels container">
      <label id="tab-btn-label-1" data-num="0" for="tab-btn-1">Закуски</label>
      <label id="tab-btn-label-2" data-num="1" for="tab-btn-2">Салаты</label>
      <label id="tab-btn-label-3" data-num="2" for="tab-btn-3">Супы</label>
      <label id="tab-btn-label-4" data-num="3" for="tab-btn-4"
        >Горячие блюда</label
      >
      <label id="tab-btn-label-5" data-num="4" for="tab-btn-5">Гарниры</label>
      <label id="tab-btn-label-6" data-num="5" for="tab-btn-6">Десерты</label>
    </div>

    <div class="hr-menu"></div>

    <div class="header-with-arrows">
      <h2 id="header-with-arrows-name">Закуски</h2>
    </div>

    <div class="tabs-contents container">
      <div id="menu-1" class="tab-content">
        <h2 class="header">Закуски</h2>
        <div class="dish-cards">
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сельдь на бородинском хлебе</div>
                <div class="dish-name-sub">С яйцом и огурцом</div>
              </div>
              <div class="dish-price">240</div>
            </div>
            <img class="dish-pic" alt="Сельдь на бородинском хлебе" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Соленья ассорти</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Соленья ассорти" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Грибы маринованные</div>
              </div>
              <div class="dish-price">300</div>
            </div>
            <img class="dish-pic" alt="Грибы маринованные" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сало домашнее с горчицей</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Сало домашнее с горчицей" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Малосольная сёмга</div>
                <div class="dish-name-sub"></div>
              </div>
              <div class="dish-price">390</div>
            </div>
            <img class="dish-pic" alt="Малосольная сёмга" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Язык говяжий с хреном</div>
              </div>
              <div class="dish-price">350</div>
            </div>
            <img class="dish-pic" alt="Язык говяжий с хреном" />
          </a>
        </div>
      </div>

      <div id="menu-2" class="tab-content">
        <h2 class="header">Салаты</h2>
        <div class="dish-cards">
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сало домашнее с горчицей</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Сало домашнее с горчицей" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Соленья ассорти</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Соленья ассорти" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Язык говяжий с хреном</div>
              </div>
              <div class="dish-price">350</div>
            </div>
            <img class="dish-pic" alt="Язык говяжий с хреном" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Грибы маринованные</div>
              </div>
              <div class="dish-price">300</div>
            </div>
            <img class="dish-pic" alt="Грибы маринованные" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Малосольная сёмга</div>
                <div class="dish-name-sub"></div>
              </div>
              <div class="dish-price">390</div>
            </div>
            <img class="dish-pic" alt="Малосольная сёмга" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сельдь на бородинском хлебе</div>
                <div class="dish-name-sub">С яйцом и огурцом</div>
              </div>
              <div class="dish-price">240</div>
            </div>
            <img class="dish-pic" alt="Сельдь на бородинском хлебе" />
          </a>
        </div>
      </div>

      <div id="menu-3" class="tab-content">
        <h2 class="header">Супы</h2>
        <div class="dish-cards">
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Малосольная сёмга</div>
                <div class="dish-name-sub"></div>
              </div>
              <div class="dish-price">390</div>
            </div>
            <img class="dish-pic" alt="Малосольная сёмга" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сало домашнее с горчицей</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Сало домашнее с горчицей" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Соленья ассорти</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Соленья ассорти" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Грибы маринованные</div>
              </div>
              <div class="dish-price">300</div>
            </div>
            <img class="dish-pic" alt="Грибы маринованные" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сельдь на бородинском хлебе</div>
                <div class="dish-name-sub">С яйцом и огурцом</div>
              </div>
              <div class="dish-price">240</div>
            </div>
            <img class="dish-pic" alt="Сельдь на бородинском хлебе" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Язык говяжий с хреном</div>
              </div>
              <div class="dish-price">350</div>
            </div>
            <img class="dish-pic" alt="Язык говяжий с хреном" />
          </a>
        </div>
      </div>

      <div id="menu-4" class="tab-content">
        <h2 class="header">Горячие блюда</h2>
        <div class="dish-cards">
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Язык говяжий с хреном</div>
              </div>
              <div class="dish-price">350</div>
            </div>
            <img class="dish-pic" alt="Язык говяжий с хреном" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сельдь на бородинском хлебе</div>
                <div class="dish-name-sub">С яйцом и огурцом</div>
              </div>
              <div class="dish-price">240</div>
            </div>
            <img class="dish-pic" alt="Сельдь на бородинском хлебе" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Грибы маринованные</div>
              </div>
              <div class="dish-price">300</div>
            </div>
            <img class="dish-pic" alt="Грибы маринованные" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Соленья ассорти</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Соленья ассорти" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Малосольная сёмга</div>
                <div class="dish-name-sub"></div>
              </div>
              <div class="dish-price">390</div>
            </div>
            <img class="dish-pic" alt="Малосольная сёмга" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сало домашнее с горчицей</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Сало домашнее с горчицей" />
          </a>
        </div>
      </div>

      <div id="menu-5" class="tab-content">
        <h2 class="header">Гарниры</h2>
        <div class="dish-cards">
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Грибы маринованные</div>
              </div>
              <div class="dish-price">300</div>
            </div>
            <img class="dish-pic" alt="Грибы маринованные" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сельдь на бородинском хлебе</div>
                <div class="dish-name-sub">С яйцом и огурцом</div>
              </div>
              <div class="dish-price">240</div>
            </div>
            <img class="dish-pic" alt="Сельдь на бородинском хлебе" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Язык говяжий с хреном</div>
              </div>
              <div class="dish-price">350</div>
            </div>
            <img class="dish-pic" alt="Язык говяжий с хреном" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Соленья ассорти</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Соленья ассорти" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Сало домашнее с горчицей</div>
              </div>
              <div class="dish-price">320</div>
            </div>
            <img class="dish-pic" alt="Сало домашнее с горчицей" />
          </a>
          <a href="#" class="dish-card">
            <div class="dish-desc">
              <div class="dish-title">
                <div class="dish-name">Малосольная сёмга</div>
                <div class="dish-name-sub"></div>
              </div>
              <div class="dish-price">390</div>
            </div>
            <img class="dish-pic" alt="Малосольная сёмга" />
          </a>
        </div>
      </div>
    </div>

    <div class="tab-name-baloon-container">
      <div class="tab-name-baloon hidden removed"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: null,
    };
  },

  methods: {
    async initData() {
      const response = await fetch(
        `https://localhost:7274/restaurants/${this.$route.params.id}`
      );
      this.restaurant = await response.json();
    },
  },

  async created() {
    this.initData();
  },
};
</script>

<style scoped>
:root {
  --grid-gap-rest-x: 10px;
  --grid-gap-rest-y: 50px;
}

.hero {
  height: 364px;
  background: url(../../public/img/s-header.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 80px;
  margin: 0 auto;
}

.hero-info {
  box-shadow: 0 0 16px var(--color-gray);
  height: 204px;
  padding: 40px 35px;
  background-color: var(--color-light);
  width: fit-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border-radius: var(--border-radius);
}

.hero-info > h1 {
  margin: 0;
  font-size: 36px;
}

.hero-info-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-info-footer-time {
  color: var(--color-light);
  background-color: var(--color-dark);
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 13px;
}

.hr-menu {
  background-color: var(--color-lightgray);
  height: 1px;
}

.header {
  text-align: left;
  margin: 30px 0;
}

.header-with-arrows {
  margin-top: 115px;
  padding-bottom: 20px;
  display: none;
  justify-content: space-between;
  align-items: center;
  transition: opacity 0.5s;
  white-space: nowrap;
}

.arrow-right,
.arrow-left {
  color: var(--color-dark);
  display: none;
}

.arrow-left-container,
.arrow-right-container {
  cursor: pointer;
  flex-basis: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}

.arrow-left-container:active > .arrow-left {
  opacity: 0.5;
}

.arrow-right-container:active > .arrow-right {
  opacity: 0.5;
}

#menu {
  position: relative;
  top: -70px;
}

.tabs-labels {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: row wrap;
  column-gap: 40px;
  row-gap: 15px;
}

.tabs > input[type="radio"] {
  display: none;
}

.tabs-labels > label {
  text-align: center;
  vertical-align: middle;
  user-select: none;
  transition: 0.15s ease-out;
  cursor: pointer;
}

.tabs-labels > label:hover {
  color: var(--color-darkgray);
}

#tab-btn-1:checked ~ .tabs-labels #tab-btn-label-1,
#tab-btn-2:checked ~ .tabs-labels #tab-btn-label-2,
#tab-btn-3:checked ~ .tabs-labels #tab-btn-label-3,
#tab-btn-4:checked ~ .tabs-labels #tab-btn-label-4,
#tab-btn-5:checked ~ .tabs-labels #tab-btn-label-5,
#tab-btn-6:checked ~ .tabs-labels #tab-btn-label-6 {
  color: #4ca149;
}

.tabs-contents {
  overflow: hidden;
}

.tab-content {
  display: none;
  padding-top: 30px;
  padding-bottom: 50px;
}

#tab-btn-1:checked ~ .tabs-contents #menu-1,
#tab-btn-2:checked ~ .tabs-contents #menu-2,
#tab-btn-3:checked ~ .tabs-contents #menu-3,
#tab-btn-4:checked ~ .tabs-contents #menu-4,
#tab-btn-5:checked ~ .tabs-contents #menu-5,
#tab-btn-6:checked ~ .tabs-contents #menu-6 {
  display: block;
  animation: trans-from-right 0.4s ease-out;
}

@keyframes trans-from-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes trans-from-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes opacity-from-0 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* h2 {
  margin-bottom: 30px;
} */

.dish-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--grid-gap-rest-y) var(--grid-gap-rest-x);
}

.dish-card {
  border: 1px solid var(--color-lightgray);
  height: var(--card-rest-height);
  display: flex;
  flex-basis: calc(50% - 0.75rem);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.dish-card:hover {
  background-color: var(--color-lightergray);
}

.dish-desc {
  padding: 15px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.dish-name-sub {
  font-size: 0.8125rem;
  color: var(--color-darkgray);
}

.dish-price {
  font-weight: 600;
}

.dish-price::after {
  content: " ₽";
}

.dish-pic {
  object-fit: cover;
}

.tab-name-baloon-container {
  position: fixed;
  width: 100%;
  z-index: 9999;
  top: 72px;
  display: flex;
  padding: 10px 0;
  pointer-events: none;
}

.tab-name-baloon {
  position: sticky;
  font-size: 20px;
  color: var(--color-light);
  background-color: var(--color-dark);
  border-radius: 30px;
  padding: 8px 16px;
  margin-left: 10px;
  transition: opacity 0.5s;
}

/* * * * * * * * * * MEDIA REQUESTS * * * * * * * * * */

@media screen and (min-width: 1201px) {
  #scrollerUnHidePoint {
    position: relative;
    top: 75px;
  }
}

@media screen and (max-width: 768px) {
  .dish-cards {
    grid-template-columns: 1fr;
    grid-gap: calc(var(--grid-gap-rest-y) / 1.5);
  }

  .hero {
    background-position: center;
    background-size: cover;
  }

  .hero-info {
    max-width: 432px;
    width: 100%;
  }
}

@media screen and (max-width: 630px) {
  .tabs-labels {
    justify-content: center;
  }

  .tabs-labels > label:not(#tab-btn-label-4) {
    flex-basis: calc((100% / 6));
  }
}

@media screen and (max-width: 400px) {
  .hero-info > h1 {
    font-size: 26px;
  }
}

@media screen and (max-width: 320px) {
  .nav-element {
    margin-left: 10px;
    margin-right: 5px;
  }

  .dish-cards {
    grid-gap: calc(var(--grid-gap-rest-y) / 4);
  }

  .dish-card {
    border: none;
    border-bottom: 1px solid var(--color-lightgray);
    height: 102px;
  }

  .dish-desc {
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    min-width: 0;
  }

  .dish-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.875rem;
  }

  .dish-pic {
    flex-basis: 102px;
  }

  .hero {
    height: 255px;
    background-position: center;
    background-size: cover;
    padding-top: 130px;
  }

  .hero-info {
    width: 100%;
    height: 180px;
    padding: 20px 25px;
  }

  .hero-info > h1 {
    font-size: 24px;
    text-align: center;
  }

  .hero-info-footer {
    flex-flow: column;
  }

  .tabs-labels {
    display: none;
  }

  .hr-menu {
    display: none;
  }

  #menu {
    top: 30px;
  }

  #scrollerUnHidePoint {
    position: relative;
    top: 25px;
  }

  .header {
    display: none;
  }

  .header-with-arrows {
    display: flex;
  }

  .tab-name-baloon-container {
    justify-content: center;
  }

  .tab-name-baloon {
    font-size: 16px;
    padding: 7px 14px;
  }

  .dish-pic {
    border-radius: var(--border-radius) 0 0 0;
  }

  .arrow-container {
    display: block;
  }

  .arrow-right,
  .arrow-left {
    display: block;
  }
}
</style>
