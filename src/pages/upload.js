import axios from "axios";
import { createClickEventAtLink } from "../utils/createClickEventAtLink";
import { customAxios } from "../utils/customAxios";
import { $ } from "../utils/querySelector";

function Upload($container) {
  this.$container = $container;
  this.imgUrl = "";
  this.title = "";
  this.content = "";

  this.setImgUrl = () => {
    this.render();
  };

  this.setTitle = () => {
    this.render();
  };

  this.setContent = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
        <section style="  background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width:100vw;
          padding-top: 64px;
          padding-bottom: 64px;
          overflow: hidden;
          gap: 12px;">
          <div id="common-header" style="justify-content: space-between;">
            <a href="/" id="link-to-upload-upload1">뒤로가기
            </a>
            <a href="/" id="link-to-upload-upload2">HPNY 2023
            </a>
          </div>
          <button id="img-add-button">
            랜덤 이미지 추가하기 / 이미지 추가 완료
          </button>
          <input placeholder="글 제목을 작성해주세요." maxlength="50" id="input-title"></input>
          <textarea placeholder="글 내용을 작성해주세요." maxlength="500" id="textarea-title"></textarea>
          <button id="submit-button">
            글 작성 완료하기
          </button>
        </section>
    `;

    const randomImgBtn = document.getElementById("img-add-button");
    randomImgBtn.addEventListener("click", () => {
      axios
        .get("https://source.unsplash.com/random")
        .then((res) => {
          this.imgUrl = res.request.responseURL;
          console.log("click");
          randomImgBtn.disabled = true;
          randomImgBtn.parentNode.removeChild(randomImgBtn);
          $("#common-header").insertAdjacentHTML(
            "beforebegin",
            `<button id="img-add-button" disabled style="background: lightgrey; cursor: not-allowed;">이미지 추가 완료</button>`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    });

    const titleValue = document.getElementById("input-title");
    const contentValue = document.getElementById("textarea-title");
    const submitBtn = document.getElementById("submit-button");

    titleValue.addEventListener("input", (e) => {
      this.title = this.title + e.data;
    });

    contentValue.addEventListener("input", (e) => {
      this.content = this.content + e.data;
    });

    submitBtn.addEventListener("click", () => {
      console.log(this.title);
      console.log(this.content);
      console.log(this.imgUrl);
      if (this.title !== "" && this.content !== "" && this.imgUrl !== "") {
        customAxios
          .post("/post", {
            title: this.title,
            content: this.content,
            image: this.imgUrl,
          })
          .then((res) => {
            location.replace("/");
          })
          .catch((err) => {
            alert("잘못된 입력임");
          });
      }
    });

    const ATagToHome = document.getElementById("link-to-upload-upload1");
    const ATagToBackBtn = document.getElementById("link-to-upload-upload2");
    createClickEventAtLink(ATagToHome);
    createClickEventAtLink(ATagToBackBtn);
  };

  this.render();
}

export default Upload;
