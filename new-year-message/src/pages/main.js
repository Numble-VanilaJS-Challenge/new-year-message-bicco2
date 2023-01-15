import { createClickEventAtLink } from "../utils/createClickEventAtLink";
import { $ } from "../utils/querySelector";

function Main($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    const test = [1, 2, 3, 4];
    this.$container.innerHTML = `
      <section id="page-main">
        <div id="common-header">
          <a href="/" id="link-to-main">HPNY 2023</a>
        </div>
        <div id="create-btn-container"> 
          <a href="/upload" id="create-post-link"> 
            게시글 작성하기
          </a>
        </div>
        <ul id="post-list">

        </ul>

      </section>
    `;
    test.forEach((each) => {
      $("#post-list").insertAdjacentHTML(
        "beforeend",
        `<li id="post-item">
        <a href="/post/12" id="link-to-post-main">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgX7NT9rVjPDUUWMRSQ_6ZqdCRaKi92i_P_bf1YASGw&s">
          <div>
            <strong>${each}</strong>
            <p>내용</p>
          </div>
        </a>
      </li>`
      );
    });

    const ATagToHome = document.getElementById("link-to-main");
    const ATagToUpload = document.getElementById("create-post-link");
    const ATagToDetail = document.getElementById("link-to-post-main");

    createClickEventAtLink(ATagToHome);
    createClickEventAtLink(ATagToUpload);
    createClickEventAtLink(ATagToDetail);
  };

  this.render();
}

export default Main;
