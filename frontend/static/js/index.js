import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import Posts from "./pages/Posts.js";
import Settings from "./pages/Settings.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
  ];

  const pageMatches = routes.map((route) => {
    console.log(route);
    return {
      route, // route: route
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

  // console.log(match.route.view(), "in routes");
  // 오류 발생 / 이유 : match.route.view에서 match가 routes를 map 시킨 건데 view에 클래스를 넣고 난 후 부터는 생성자 없이 사용이 불가능 하다.

  if (!match) {
    match = {
      route: location.pathname,
      isMatch: true,
    };
    const page = new NotFound();
    document.querySelector("#root").innerHTML = await page.getHtml();
  } else {
    const page = new match.route.view();
    document.querySelector("#root").innerHTML = await page.getHtml();
  }
};

window.addEventListener("popstate", () => {
  router();
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });
  router();
});
