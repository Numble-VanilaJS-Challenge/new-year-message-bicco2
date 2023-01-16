import { navigate } from "./src/utils/navigate";
import { $ } from "./src/utils/querySelector";
import Router from "./src/router";

function App($container) {
  this.$container = $container;

  const init = () => {
    $("#app").addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      const targetURL = target.href.replace(import.meta.BASE_URL, "");
      console.log(targetURL);
      navigate(targetURL);
    });

    new Router($container);
  };

  init();
}

export default App;
