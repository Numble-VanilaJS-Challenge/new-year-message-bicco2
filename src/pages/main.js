import { createClickEventAtLink } from "../utils/createClickEventAtLink";
import { $ } from "../utils/querySelector";
import { customAxios } from "../utils/customAxios";

function Main($container) {
  this.$container = $container;
  this.postData = "";

  customAxios
    .get("/posts")
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
      this.postData.forEach((each) => {
        $("#post-list").insertAdjacentHTML(
          "beforeend",
          `<li id="post-item">
        <a href="/post/12" id="link-to-post-main">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgX7NT9rVjPDUUWMRSQ_6ZqdCRaKi92i_P_bf1YASGw&s">
          <div>
            <strong>${each.postId}</strong>
            <p>내용</p>
          </div>
        </a>
      </li>`
        );
      });
      const ATagToDetail = document.getElementById("link-to-post-main");
      createClickEventAtLink(ATagToDetail);
    }

    const ATagToHome = document.getElementById("link-to-main");
    const ATagToUpload = document.getElementById("create-post-link");

    createClickEventAtLink(ATagToHome);
    createClickEventAtLink(ATagToUpload);
  };

  this.render();
}

export default Main;
