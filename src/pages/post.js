import { $ } from "../utils/querySelector";
import { customAxios } from "../utils/customAxios";

function Post($container) {
  this.$container = $container;
  this.postData = "";
  this.commentDataList = "";

  this.setState = (postState, commentState) => {
    this.postData = postState;
    this.commentDataList = commentState;
    this.render();
  };

  const postId = location.search.split("?")[1];

  customAxios
    .get(`/post/${postId}`)
    .then((res) => {
      this.setState(res.data.data.post, res.data.data.comments);
    })
    .catch((error) => console.log(error));

  this.render = () => {
    this.$container.innerHTML = `
    <section 
      style="background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      padding-bottom: 64px;
      overflow: hidden;">
      <div id="common-header" style="justify-content: space-between;">
        <a href="/" id="link-to-upload-post1">뒤로가기
        </a>
        <a href="/" id="link-to-upload-post2">HPNY 2023
        </a>
      </div>
     
      <article id="post-article">
        <img src=${this.postData.image} id="post-img"/>
        <strong>${this.postData.title}</strong>
        <span>${this.postData.updatedAt}</span>
        <p>${this.postData.content}</p>
        <a href="/edit/12" id="post-update-button">
          수정
        </a>
        <button id="post-delete-button">
          삭제
        </button>
      </article>
      <section id="comment-section">
        <form>
          <input></input>
          <button type="submit">게시</button>
        </form>
        <ul id="comment-list">
        </ul>

      </section>
    </section>
    `;

    if (this.commentDataList !== "") {
      this.commentDataList.forEach((commentItem) => {
        $("#comment-list").insertAdjacentHTML(
          "beforeend",
          `<li id="comment">
            <p>${commentItem.content}</p>
            <p id="comment-id" style="visibility : hidden">${commentItem.commentId}</p>
            <button id="comment-delete-btn">삭제</button>
          </li>`
        );
      });
    }
  };

  this.render();
}

export default Post;
