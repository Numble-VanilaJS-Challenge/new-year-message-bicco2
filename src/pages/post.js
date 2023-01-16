import { $ } from "../utils/querySelector";
import { customAxios } from "../utils/customAxios";

function Post($container) {
  this.$container = $container;
  this.postData = "";
  this.commentDataList = "";
  this.comment = "";

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
          <input id="comment-input"></input>
          <button type="submit" id="submit-btn">게시</button>
        </form>
        <ul id="comment-list">
        </ul>
      </section>
    </section>
    `;

    if (this.commentDataList !== "") {
      this.commentDataList.forEach((commentItem) => {
        $("#comment-list").insertAdjacentHTML(
          "beforebegin",

          `<li id="comment">
            <p>${commentItem.content}</p>
            <button id=${commentItem.commentId}>삭제</button>
          </li>`
        );
        const deleteBtn = document.getElementById(commentItem.commentId);
        deleteBtn.addEventListener("click", () => {
          if (window.confirm("삭제하시겠습니까?")) {
            customAxios
              .delete(`/comment/${commentItem.commentId}`)
              .then((res) => {
                location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
          }
        });
      });
    }

    const commentInput = document.getElementById("comment-input");

    commentInput.addEventListener("input", (e) => {
      const commentValue = document.getElementById("comment-input").value;
      this.comment = commentValue;
    });

    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      customAxios
        .post(`/comment/${this.postData.postId}`, {
          content: this.comment,
        })
        .then((res) => {
          location.reload();
        })
        .catch((err) => {
          if (err.request.status === 400) {
            alert("잘못된 접근입니다.");
          }
        });
    });
  };

  this.render();
}

export default Post;
