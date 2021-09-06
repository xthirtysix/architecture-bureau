export default {
  actions: {},
  mutations: {},
  state: {
    works: [
      {
        name: "Residential Complex «First Line»",
        location: "Tyumen (Russia)",
        acreage: "52 000",
        position: "Lead Architect",
        activity: "sketch stage, Revit",
        images: require.context(
          "@/assets/img/portfolio/first_line/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/first_line/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/first_line/preview/placeholder.jpg")
      },
      {
        name: "Residential Complex «My Rhythm»",
        location: "Kazan (Russia)",
        acreage: "35 000",
        position: "Lead Architect",
        activity:
          "design development, construction documentation, Revit (LOD400)",
        images: require.context(
          "@/assets/img/portfolio/my_rhythm/",
          true,
          /\.png$/
        ),
        preview: require("@/assets/img/portfolio/my_rhythm/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/my_rhythm/preview/placeholder.jpg")
      },
      {
        name: "Mosfilm, Warehouse",
        location: "Moscow (Russia)",
        acreage: "20 000",
        position: "Lead Architect",
        activity: "construction documentation, Revit",
        images: require.context(
          "@/assets/img/portfolio/mosfilm_warehouse/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/mosfilm_warehouse/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/mosfilm_warehouse/preview/placeholder.jpg")
      },
      {
        name: "Mosfilm, Film Studio",
        location: "Moscow (Russia)",
        acreage: "20 000",
        position: "Lead Architect",
        activity: "construction documentation, Revit",
        images: require.context(
          "@/assets/img/portfolio/mosfilm_studio/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/mosfilm_studio/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/mosfilm_studio/preview/placeholder.jpg")
      },
      {
        name: "Mockup for Residential Complex Cherry Orchard",
        location: "Moscow (Russia)",
        position: "Lead Architect",
        activity: "sketch stage, construction documentation, Revit",
        images: require.context(
          "@/assets/img/portfolio/cherry_orchard/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/cherry_orchard/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/cherry_orchard/preview/placeholder.jpg")
      },
      {
        name: "Residential Complex «Basmanny»",
        location: "Moscow (Russia)",
        acreage: "35 000",
        position: "Lead Architect",
        activity: "construction documentation, Revit",
        images: require.context(
          "@/assets/img/portfolio/basmanny/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/basmanny/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/basmanny/preview/placeholder.jpg")
      },
      {
        name: "Residential Complex «I'M Tverskaya»",
        location: "Moscow (Russia)",
        acreage: "26 635",
        position: "Lead Architect",
        activity: "design development, AutoCAD",
        images: require.context(
          "@/assets/img/portfolio/im_tverskaya/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/im_tverskaya/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/im_tverskaya/preview/placeholder.jpg")
      },
      {
        name: "Sheremetyevo Cargo",
        location: "Khimki (Russia)",
        acreage: "42 300",
        position: "Architect",
        activity: "construction documentation, Revit, AutoCAD",
        images: require.context(
          "@/assets/img/portfolio/sheremetyevo/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/sheremetyevo/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/sheremetyevo/preview/placeholder.jpg")
      },
      {
        name: "Business complex «Pilyugina»",
        location: "Moscow (Russia)",
        acreage: "43 500",
        position: "Architect",
        activity: "construction documentation, AutoCAD",
        images: require.context(
          "@/assets/img/portfolio/pilyugina/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/pilyugina/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/pilyugina/preview/placeholder.jpg")
      },
      {
        name: "Houses",
        position: "Architect",
        activity: "sketch stage, ArchiCAD",
        images: require.context(
          "@/assets/img/portfolio/houses/houses",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/houses/houses/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/houses/houses/preview/placeholder.jpg")
      },
      {
        name: "House",
        position: "Architect",
        activity: "design development, ArchiCAD",
        images: require.context(
          "@/assets/img/portfolio/houses/house_crimea",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/houses/house_crimea/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/houses/house_crimea/preview/placeholder.jpg")
      },
      {
        name: "House",
        position: "Architect",
        activity: "sketch stage, ArchiCAD",
        images: require.context(
          "@/assets/img/portfolio/houses/house_fashevka",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/houses/house_fashevka/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/houses/house_fashevka/preview/placeholder.jpg")
      },
      {
        name: "House",
        position: "Architect",
        activity: "design development, ArchiCAD",
        images: require.context(
          "@/assets/img/portfolio/houses/house_yalta",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/houses/house_yalta/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/houses/house_yalta/preview/placeholder.jpg")
      },
      {
        name: "House",
        position: "Architect",
        activity: "design development, ArchiCAD",
        images: require.context(
          "@/assets/img/portfolio/houses/house_potoshovo",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/houses/house_potoshovo/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/houses/house_potoshovo/preview/placeholder.jpg")
      },
      {
        name: "House",
        position: "Architect",
        activity: "sketch stage, ArchiCAD",
        images: require.context(
          "@/assets/img/portfolio/houses/house_terem",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/houses/house_terem/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/houses/house_terem/preview/placeholder.jpg")
      },
      {
        name: "House",
        position: "Architect",
        activity: "sketch stage, ArchiCAD",
        images: require.context(
          "@/assets/img/portfolio/houses/house_villa",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/houses/house_villa/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/houses/house_villa/preview/placeholder.jpg")
      },
      {
        name: "Hotel «Lipetsk». Reconstruction",
        studentWork: "ArchiCAD, Artlantis",
        images: require.context(
          "@/assets/img/portfolio/hotel_lipetsk/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/hotel_lipetsk/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/hotel_lipetsk/preview/placeholder.jpg")
      },
      {
        name: "Hotel «LOGOS»",
        studentWork: "ArchiCAD, Artlantis",
        images: require.context(
          "@/assets/img/portfolio/hotel_logos/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/hotel_logos/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/hotel_logos/preview/placeholder.jpg")
      },
      {
        name: "Manufacturing building",
        studentWork: "ArchiCAD, Artlantis",
        images: require.context(
          "@/assets/img/portfolio/manufacturing_building/",
          true,
          /\png$/
        ),
        preview: require("@/assets/img/portfolio/manufacturing_building/preview/preview.jpg"),
        placeholder: require("@/assets/img/portfolio/manufacturing_building/preview/placeholder.jpg")
      }
    ]
  },
  getters: {
    portfolio: function(state) {
      return state.works;
    }
  }
};
