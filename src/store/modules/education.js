export default {
  actions: {},
  mutations: {},
  state: {
    education: [
      {
        name: "Lipetsk State Technical University, Lipetsk, Russia",
        description:
          "Faculty of Civil Engineering, Building Design (with honors)",
        years: "2008-2013"
      }
    ]
  },
  getters: {
    education: function(state) {
      return state.education;
    }
  }
};
