export default {
  actions: {},
  mutations: {},
  state: {
    skills: [
      { name: "Autodesk Revit", rating: 9 },
      { name: "Dynamo", rating: 4 },
      { name: "ArchiCAD", rating: 7 },
      { name: "3ds MAX + V-Ray", rating: 4 },
      { name: "AutoCAD", rating: 8 },
      { name: "Adobe Photoshop", rating: 7 },
      { name: "Artlantis", rating: 8 },
      { name: "Lumion", rating: 4 },
      { name: "MS Office", rating: 10 }
    ]
  },
  getters: {
    skills: function(state) {
      return state.skills;
    }
  }
};
