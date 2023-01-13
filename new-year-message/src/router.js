import { routes } from "./constants/routeInfo";
import NotFound from "./pages/notfound";

function Router($container) {
  this.$container = $container;
  let currentPage = undefined;

  const findMatchedRoute = () =>
    routes.find((route) => route.path.test(location.pathname));

  const route = () => {
    currentPage = null;
    const TargetPage = findMatchedRoute()?.element || NotFound;
    // 현재 url이 routes 배열 안에 존재 그 url에 존재하는 객체의 element를 가져와 targetPage에 할당 시킴
    currentPage = new TargetPage(this.$container);
    // 할당된 인스턴스 생성 , 호출시 반환
  };

  const init = () => {
    window.addEventListener("historychange", ({ detail }) => {
      const { to, isReplace } = detail;

      if (isReplace || to === location.pathname)
        history.replaceState(null, "", to);
      else history.pushState(null, "", to);

      route();
    });

    window.addEventListener("popstate", () => {
      route();
    });
  };

  init();
  route();
}

export default Router;
