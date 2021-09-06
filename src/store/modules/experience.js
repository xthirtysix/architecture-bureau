export default {
  actions: {},
  mutations: {},
  state: {
    experience: [
      {
        position: "Project Manager",
        company: "Stroitelnaya Mechanica",
        location: {
          city: "Moscow"
        },
        years: "2019 - Present"
      },
      {
        position: "Lead Architect",
        company: "FICOTE engineering / TIKKANEN architects",
        location: {
          city: "Moscow",
          link: "https://ficote.com/",
          site: "ficote.com"
        },
        years: "2018-2019"
      },
      {
        position: "Lead Architect",
        company: "ATLAS project",
        location: {
          city: "Moscow",
          link: "http://atlasproekt.com/",
          site: "atlasproekt.com"
        },
        years: "2016-2018"
      },
      {
        position: "Architect",
        company: "EcoLogHomes",
        description: "Australia based company, Moscow office",
        location: {
          city: "Moscow",
          link: "http://ecologhomes.com.au/",
          site: "ecologhomes.com.au"
        },
        years: "2015-2016"
      },
      {
        position: "Architect",
        company: "Procons",
        location: {
          city: "Moscow",
          link: "http://procons.pro/",
          site: "procons.pro"
        },
        years: "2014-2015"
      },
      {
        position: "Architect",
        company: "Novotech",
        location: {
          city: "Lipetsk"
        },
        years: "2013-2014"
      }
    ]
  },
  getters: {
    experience: function(state) {
      return state.experience;
    }
  }
};
