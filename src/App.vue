<template lang="pug">
  #app
    header#header
      h1.logo
        router-link.logo__link(to="/")
          span.logo__secondary Архитектурная группа
          span.logo__main Строительная механика
      section.contacts
        h2.visually-hidden Контакты
        ul.contacts__list
          li
            a.contacts__item.contacts__item--mail(href=`mailto:sf@s-m.team`)
              span sf
              | @s-m.team
          li
            a.contacts__item.contacts__item--phone(href='tel:+79265818159') +7 926 581 81 59
    #navigation
      ul.nav-list
        li
          router-link.nav-link(to="/") Услуги
        li
          router-link.nav-link(to="/portfolio") Портфолио
    #content
      router-view
</template>

<style lang="scss">
@import "@/styles/index.scss";
@import "@/styles/fonts.scss";

@include visually-hidden;

body {
  margin: 0;
  background-color: $background-color;
}

#app {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-areas: "header" "nav" "content";
  font-family: "Futura PT Book", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $foreground-color;
}

#header {
  grid-area: header;
  box-sizing: border-box;
  position: sticky;
  z-index: 1000;
  top: 0;
  display: flex;
  grid-auto-columns: auto;
  justify-content: space-between;
  flex-wrap: auto;
  width: 100%;
  max-width: calc(1300px - 4rem);
  margin: 0 auto 2rem;
  padding: 1.4rem 1rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: $foreground-color-inversed;
  background-color: $background-color-inversed;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.22);
}

.logo {
  width: auto;
  height: auto;
  margin: 0;
  font-weight: 400;

  &__link {
    text-decoration: none;
    color: $foreground-color-inversed;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;

    :first-child {
      display: block;
      font-weight: 100;
      font-size: 1.5rem;
      color: slategray;
    }
  }

  &__main {
    order: 1;
    margin: 0 0.5rem;
    text-transform: capitalize;
  }

  &__secondary {
    order: 2;
    margin: 0 0.5rem;
  }
}

.contacts {
  display: flex;
  align-items: flex-end;
  margin-left: auto;
  line-height: 2rem;
}

.contacts__list {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
  word-break: keep-all;

  a {
    display: block;
    min-width: max-content;
    line-height: 1.9rem;
    color: inherit;
    text-decoration: none;
  }

  img {
    height: 1rem;
    width: auto;
  }
}

.contacts__item {
  position: relative;
  padding-left: 1.5rem;

  > span {
    letter-spacing: 1.5px;
  }

  &::before {
    content: "";
    position: absolute;
    top: calc(50% - 0.65rem);
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &--phone::before {
    background-position: center 100%;
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='phone' class='svg-inline--fa fa-phone fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='white' d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'%3E%3C/path%3E%3C/svg%3E");
    //background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='phone-alt' class='svg-inline--fa fa-phone-alt fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='white' d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'%3E%3C/path%3E%3C/svg%3E");
  }

  &--mail::before {
    background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='envelope-open' class='svg-inline--fa fa-envelope-open fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='white' d='M494.586 164.516c-4.697-3.883-111.723-89.95-135.251-108.657C337.231 38.191 299.437 0 256 0c-43.205 0-80.636 37.717-103.335 55.859-24.463 19.45-131.07 105.195-135.15 108.549A48.004 48.004 0 0 0 0 201.485V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.509a48 48 0 0 0-17.414-36.993zM464 458a6 6 0 0 1-6 6H54a6 6 0 0 1-6-6V204.347c0-1.813.816-3.526 2.226-4.665 15.87-12.814 108.793-87.554 132.364-106.293C200.755 78.88 232.398 48 256 48c23.693 0 55.857 31.369 73.41 45.389 23.573 18.741 116.503 93.493 132.366 106.316a5.99 5.99 0 0 1 2.224 4.663V458zm-31.991-187.704c4.249 5.159 3.465 12.795-1.745 16.981-28.975 23.283-59.274 47.597-70.929 56.863C336.636 362.283 299.205 400 256 400c-43.452 0-81.287-38.237-103.335-55.86-11.279-8.967-41.744-33.413-70.927-56.865-5.21-4.187-5.993-11.822-1.745-16.981l15.258-18.528c4.178-5.073 11.657-5.843 16.779-1.726 28.618 23.001 58.566 47.035 70.56 56.571C200.143 320.631 232.307 352 256 352c23.602 0 55.246-30.88 73.41-45.389 11.994-9.535 41.944-33.57 70.563-56.568 5.122-4.116 12.601-3.346 16.778 1.727l15.258 18.526z'%3E%3C/path%3E%3C/svg%3E");
  }
}

.nav-list {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto 2rem;
  padding: 0 1rem;
  text-align: center;
  list-style: none;
}

.nav-link {
  @include underline(100%, true);

  position: relative;
  display: block;
  padding: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: $foreground-color;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  max-width: min-content;
  min-width: 8rem;

  &.router-link-exact-active {
    color: $accent-color;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

.copyright {
  display: flex;
  justify-content: center;
  align-items: flex-end;

  color: $foreground-color-inversed;
  opacity: 0.6;
}

.copyright-link {
  @include underline(100%, true);

  padding-left: 0.2rem;
  color: $foreground-color-inversed;

  &:hover,
  &:focus {
    font-weight: 700;
    color: $accent-color;
    text-decoration: none;
  }
}

#content {
  grid-area: content;
  display: flex;
  justify-content: center;
  width: calc(100vw - (100vw - 100%));
}

@media (max-width: $mobile) {
  #app {
    grid-template-rows: min-content 1fr;
    grid-template-columns: unset;
    grid-template-areas: "header" "nav" "content";
  }

  #header {
    padding: 1rem;
    flex-direction: column;
  }

  .logo__link {
    flex-direction: column;
    align-items: center;
    width: auto;
    max-height: 10rem;

    span {
      font-size: 1.35rem;
    }

    span:first-child {
      font-size: 1.2rem;
      opacity: 0;
    }
  }

  .contacts {
    margin: 0 auto;
  }

  .contacts__list {
    grid-gap: 3rem;
  }

  .nav-item {
    &:first-of-type {
      text-align: left;
    }

    &:last-of-type {
      text-align: right;
    }
  }

  .nav-link {
    padding: 0.5rem;
  }

  .copyright {
    display: none;
  }

  #content {
    display: block;
    width: 100%;
    margin-left: 0;
  }
}
</style>
