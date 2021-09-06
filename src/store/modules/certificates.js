import c1 from "@/assets/img/certificates/cert1.png";
import c1_placeholder from "@/assets/img/certificates/placeholders/cert1_placeholder.jpg";
import c2 from "@/assets/img/certificates/cert2.png";
import c2_placeholder from "@/assets/img/certificates/placeholders/cert2_placeholder.jpg";
import c3 from "@/assets/img/certificates/cert3.png";
import c3_placeholder from "@/assets/img/certificates/placeholders/cert3_placeholder.jpg";
import c4 from "@/assets/img/certificates/cert4.png";
import c4_placeholder from "@/assets/img/certificates/placeholders/cert4_placeholder.jpg";
import c5 from "@/assets/img/certificates/cert5.png";
import c5_placeholder from "@/assets/img/certificates/placeholders/cert5_placeholder.jpg";

export default {
  actions: {},
  mutations: {},
  state: {
    certificates: [
      { image: c1, placeholder: c1_placeholder },
      { image: c2, placeholder: c2_placeholder },
      { image: c3, placeholder: c3_placeholder },
      { image: c4, placeholder: c4_placeholder },
      { image: c5, placeholder: c5_placeholder }
    ]
  },
  getters: {
    certificates: function(state) {
      return state.certificates;
    }
  }
};
