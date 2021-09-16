<template lang="pug">
.about
  .header-wrapper
    h1.section-header Услуги
  section
    span Проектирование архитектурных разделов в Revit (опыт работы наших архитекторов от 7 лет)
    ul
      li(v-for="(item, idx) in services", :key="idx")
        span {{item}}
</template>

<script>
export default {
  data: function() {
    return {
      services: [
        "Разработка концепций",
        "Адаптация концепций",
        "Проектная документация",
        "Рабочая документация",
        "АГР, АГО (архитектурно-градостроительные решения/облика)",
        "Архитектурные интерьеры",
        "Визуализации"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
@import "@/styles/variables.scss";

@include progressive-images;

.about {
  @include container;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  padding-top: 0;
  grid-template-areas:
    "header"
    "experience"
    "education"
    "skills"
    "certificates";
  max-width: 1300px;
}

.header-wrapper {
  grid-area: header;
}

.main-header {
  @include main-header;
}

.section-header {
  text-transform: uppercase;
  margin-top: 0;
}

.profession {
  @include underline(100%, false);
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}

.picture-container {
  grid-area: picture;
  height: fit-content;
  max-width: 490px;

  p {
    display: flex;
    margin: 0 0 0 auto;
    line-height: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}

.experience {
  grid-area: experience;
}

.education {
  grid-area: education;
}

.skills {
  grid-area: skills;
}

.certificates {
  grid-area: certificates;
  padding-bottom: 2rem;
}

@media (min-width: $mobile) and (max-width: $tablet) {
  .about {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "experience"
      "education"
      "skills"
      "certificates";
    width: 100%;
    padding-top: 0;
  }

  .header-wrapper {
    height: fit-content;
    align-self: center;
  }

  .section-header {
    margin-top: 0;
  }

  .picture-container {
    width: 100%;
    height: fit-content;
    align-self: center;

    p {
      @include with-shadow-circle;

      position: relative;
      width: 100px;
      height: auto;
      margin: 0;
      box-shadow: none;
    }

    img {
      width: 100%;
      height: auto;
      clip-path: circle(50% at center);
    }
  }
}

@media (max-width: $mobile) {
  #navigation {
    padding: 0 1rem;
  }
  .about {
    grid-template-areas:
      "header"
      "picture"
      "experience"
      "education"
      "skills"
      "certificates";
    padding: 0;
  }

  section {
    box-sizing: border-box;
    width: calc(100vw - (100vw - 100%));
    padding: 0 1rem;
  }

  .section-header {
    margin-top: 0;
  }

  .header-wrapper {
    padding: 0 1rem;
    //display: none;
  }


  .picture-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: unset;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #2c3e50;

    p {
      @include with-shadow-circle;

      position: relative;
      margin: 0;
      box-shadow: none;
    }

    img {
      width: 100%;
      max-width: 500px;
      height: 100%;
      clip-path: circle(40% at center);
    }
  }
}
</style>
