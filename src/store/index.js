import Vue from "vue";
import Vuex from "vuex";
import certificates from "@/store/modules/certificates";
import education from "@/store/modules/education";
import experience from "@/store/modules/experience";
import portfolio from "@/store/modules/portfolio";
import skills from "@/store/modules/skills";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    certificates,
    education,
    experience,
    portfolio,
    skills
  }
});
