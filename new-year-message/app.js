import { navigate } from "./src/utils/navigate";
import { $ } from "./src/utils/querySelector";
import Router from "./src/router";

function App($container) {
  this.$container = $container;

  const init = () => {
    $(".navbar").addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      const targetURL = e.target.href.replace(import.meta.BASE_URL, "");
      navigate(targetURL);
    });

    new Router($container);
  };

  init();
}

export default App;
