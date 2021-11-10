export default {
  actions: {},
  mutations: {},
  state: {
    works: [
      {
        id: "00001",
        name: "Жилой комплекс «Первая Линия»",
        location: "Тюмень (Россия)",
        acreage: "52 000",
        activity: "Концепция, Revit",
        images: require.context(
          "@/assets/img/portfolio/first_line/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/first_line/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/first_line/preview/placeholder.jpg")
      },
      {
        name: "Жилой комплекс «Мой ритм»",
        location: "Казань (Россия)",
        acreage: "35 000",
        activity:
          "Проектная документация (АР), Рабочая документация (АР), Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/my_rhythm/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/my_rhythm/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/my_rhythm/preview/placeholder.jpg")
      },
      {
        name: "Комплекс сценическо-постановочных средств киноконцерна Мосфильм",
        location: "Москва (Россия)",
        acreage: "20 000",
        activity: "Рабочая документация (АР), Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/mosfilm_warehouse/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/mosfilm_warehouse/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/mosfilm_warehouse/preview/placeholder.jpg")
      },
      {
        name: "Съемочный павильон киноконцерна Мосфильм",
        location: "Москва (Россия)",
        acreage: "20 000",
        activity: "Рабочая документация (АР), Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/mosfilm_studio/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/mosfilm_studio/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/mosfilm_studio/preview/placeholder.jpg")
      },
      {
        name: "Жилой комплекс «Басманный»",
        location: "Москва (Россия)",
        acreage: "35 000",
        activity: "Рабочая документация (АР), Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/basmanny/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/basmanny/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/basmanny/preview/placeholder.jpg")
      },
      {
        name: "Жилой комплекс «I'M Тверская»",
        location: "Москва (Россия)",
        acreage: "26 635",
        activity: "Проектная документация (АР), AutoCAD",
        images: require.context(
          "@/assets/img/portfolio/im_tverskaya/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/im_tverskaya/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/im_tverskaya/preview/placeholder.jpg")
      },
      {
        name: "Грузовой терминал Шереметьевао-Карго",
        location: "Москва (Россия)",
        acreage: "42 300",
        activity: "Рабочая документация, Revit, AutoCAD",
        images: require.context(
          "@/assets/img/portfolio/sheremetyevo/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/sheremetyevo/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/sheremetyevo/preview/placeholder.jpg")
      },
      {
        name: "Бизнес-комплекс «Пилюгина»",
        location: "Москва (Россия)",
        acreage: "43 500",
        activity: "Рабочая документация (АР), AutoCAD",
        images: require.context(
          "@/assets/img/portfolio/pilyugina/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/pilyugina/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/pilyugina/preview/placeholder.jpg")
      }
    ]
  },
  getters: {
    portfolio: function(state) {
      return state.works;
    }
  }
};
