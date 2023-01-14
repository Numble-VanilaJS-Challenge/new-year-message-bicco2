import { navigate } from "../../src/utils/navigate";
import { $ } from "../../src/utils/querySelector";
import Router from "../../src/router";

function Main($container) {
  this.$container = $container; // #app 에 해당하는 dom이 들어옴

  const init = () => {
    $(".test").addEventListener("click", (e) => {
      e.preventDefault();
      const targetURL = e.target.href.replace(import.meta.BASE_URL, "");
      navigate(targetURL);
    });

    new Router($container);
  };

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = ` 
      <main>
        <section>
          <div>
            <a href="/#" class = "test">
              <strong>HPNY 2023</strong>
            </a>
          </div>
          <div>
            <a href="/upload" class = "test">
              게시글 작성하기
            </a>
          </div>
          <ul>
            <li>
              post1111
            </li>
            <li>
              post222
            </li>
            <li>
              post222
            </li>
          </ul>
        </section>
      </main>
    `;
  };

  this.render();
}

export default Main;
