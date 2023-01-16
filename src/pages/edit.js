import { customAxios } from "../utils/customAxios";

function Edit($container) {
  this.$container = $container;
  this.updateInputValue = "";
  this.updateTextareaValue = "";
  this.postData = "";

  this.setState = (state) => {
    this.postData = state;
    this.render();
  };

  const postId = location.search.split("?")[1];

  customAxios
    .get(`/post/${postId}`)
    .then((res) => {
      this.setState(res.data.data.post);
    })
    .catch((error) => console.log(error));

  this.updateInputValue = this.postData.title;
  this.updateTextareaValue = this.postData.content;

  this.render = () => {
    this.$container.innerHTML = `
    <section id="page-upload">
      <div id="common-header" style="justify-content: space-between;">
        <a href="/" id="link-to-upload-main">뒤로가기
        </a>
        <a href="/" id="link-to-upload-main">HPNY 2023
        </a>
      </div>
     
      <img src=${this.postData.image} id="post-img"/>
      <input placeholder="원래 값 있어야할 곳(제목)" id= "input-title" maxlength="50" value=${this.postData.title}></input>
      <textarea placeholder="원래 값 있어야할 곳(내용)" id="textarea-title" maxlength="500">${this.postData.content}</textarea>
      <button id="submit-button">글 수정하기</button>
    </section>
    `;

    const inputTitle = document.getElementById("input-title");
    const textareaTitle = document.getElementById("textarea-title");
    const submitBtn = document.getElementById("submit-button");

    inputTitle.addEventListener("input", (e) => {
      const inputValue = document.getElementById("input-title").value;
      this.updateInputValue = inputValue;
    });

    textareaTitle.addEventListener("input", (e) => {
      const textareaValue = document.getElementById("textarea-title").value;
      this.updateTextareaValue = textareaValue;
    });

    submitBtn.addEventListener("click", () => {
      if (window.confirm("수정하시겠습니까?")) {
        customAxios
          .patch(`/post/${postId}`, {
            title: this.updateInputValue,
            content: this.updateTextareaValue,
            image: this.postData.image,
          })
          .then(() => {
            location.replace(`/post?${this.postData.postId}`);
          })
          .catch((res) => {
            if (res.request.status === 400) {
              alert("중복글은 불가능합니다");
            }
          });
      }
    });
  };

  this.render();
}

export default Edit;
