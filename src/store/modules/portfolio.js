export default {
  actions: {},
  mutations: {},
  state: {
    works: [
      {
        id: "00001",
        name: "Офисы мультипликационной студии",
        location: "Москва (Россия)",
        acreage: "65 000",
        activity: "Архитектурная адаптация, Концепция, Revit",
        images: require.context(
          "@/assets/img/portfolio/cartoon_studio/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/cartoon_studio/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/cartoon_studio/preview/placeholder.jpg")
      },
      {
        id: "00002",
        name: "Жилой комплекс с подземной автостоянкой",
        location: "Москва (Россия)",
        acreage: "35 000",
        activity:
          "Архитектурно-градостроительное решение, Проектная документация (АР), Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/complex_with_parking/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/complex_with_parking/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/complex_with_parking/preview/placeholder.jpg")
      },
      {
        id: "00003",
        name: "Центр обработки данных",
        location: "Москва (Россия)",
        acreage: "6 700",
        activity: "Рабочая документация (АР), Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/data_center_1/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/data_center_1/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/data_center_1/preview/placeholder.jpg")
      },
      {
        id: "00004",
        name: "Центр обработки данных",
        location: "Москва (Россия)",
        acreage: "20 600",
        activity:
          "Архитектурно-градостроительное решение, AutoCAD, Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/data_center_2/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/data_center_2/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/data_center_2/preview/placeholder.jpg")
      },
      {
        id: "00005",
        name: "Центр обработки данных",
        location: "Москва (Россия)",
        acreage: "4 500",
        activity: "Рабочая документация (АР), Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/data_center_3/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/data_center_3/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/data_center_3/preview/placeholder.jpg")
      },
      {
        id: "00006",
        name: "Центр обработки данных",
        location: "Москва (Россия)",
        acreage: "28 800",
        activity: "Концепция, Revit",
        images: require.context(
          "@/assets/img/portfolio/data_center_4/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/data_center_4/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/data_center_4/preview/placeholder.jpg")
      },
      {
        id: "00007",
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
        id: "00008",
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
        id: "00009",
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
        id: "00010",
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
        id: "00011",
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
        id: "00012",
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
        id: "00013",
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
        id: "00014",
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
