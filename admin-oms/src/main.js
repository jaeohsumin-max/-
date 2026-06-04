import { createApp } from "vue";
import { Quasar, Notify, Dialog } from "quasar";
import quasarLang from "quasar/lang/ko-KR";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import App from "./App.vue";

const app = createApp(App);

app.use(Quasar, {
  plugins: { Notify, Dialog },
  lang: quasarLang,
});

app.mount("#app");
