<template lang="pug">
#app
  header#header
    img.logo(
      src="./assets/img/logo.svg",
      width="202",
      height="96",
      alt="Iana Moskalenko site logo"
    )
    ul.nav-list
      li
        router-link.nav-link(to="/") About
      li
        router-link.nav-link(to="/portfolio") Portfolio
    span.copyright developed by
      a.copyright-link(href="https://github.com/xthirtysix") xthirtysix
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
  grid-template-rows: 100vh;
  grid-template-columns: 15rem 1fr;
  grid-template-areas: "header content";
  font-family: "Futura PT Book", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $foreground-color;
}

#header {
  grid-area: "header";
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  display: grid;
  justify-content: center;
  height: 100%;
  padding: 2rem 1rem;
  color: $foreground-color-inversed;
  background-color: $background-color-inversed;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.34);
}

.logo {
  width: 100%;
  height: auto;
}

.nav-list {
  display: grid;
  grid-template-rows: min-content;
  grid-row-gap: 1rem;
  align-self: unsafe-center;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  list-style: none;
}

.nav-link {
  @include underline(100%, true);

  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: $foreground-color-inversed;

  &.router-link-exact-active {
    color: $accent-color;
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
  grid-area: "content";
  display: flex;
  justify-content: center;
  width: calc(100vw - 15rem);
  margin-left: 15rem;
}

@media (max-width: $mobile) {
  #app {
    grid-template-rows: min-content 1fr;
    grid-template-columns: unset;
    grid-template-areas: "nav" "content";
  }

  #header {
    position: unset;
    padding: 1rem;
  }

  .logo {
    width: auto;
    max-height: 10rem;
  }

  .nav-list {
    grid-template-columns: 1fr 1fr;
    margin-top: 6rem;
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
