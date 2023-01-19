import { $ } from "../utils/querySelector";
import { customAxios } from "../utils/customAxios";
import axios from "axios";

const BASE__URL = "api";

function Main($container) {
  this.$container = $container;
  this.postData = "";

  axios
    .get(BASE__URL + "/posts")
    .then((res) => {
      this.setState(res.data.data.posts);
    })
    .catch((error) => console.log(error));

  this.setState = (state) => {
    this.postData = state; // postData 값이 재할당 되면 재렌더링
    this.render();
  };

  this.render = () => {
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

    if (this.postData !== "") {
      this.postData.forEach((postItem) => {
        $("#post-list").insertAdjacentHTML(
          "beforeend",
          `<li id="post-item">
            <a href="/post?${postItem.postId}" id="link-to-post-main">
              <img src=${postItem.image} style="width : 130px; height : 130px; border-radius: 8px;">
              <div>
                <strong>${postItem.title}</strong>
                <p>${postItem.content}</p>
              </div>
            </a>
          </li>`
        );
      });
    }
  };

  this.render();
}

export default Main;
