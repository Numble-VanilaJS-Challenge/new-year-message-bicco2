import { navigate } from "../utils/navigate";
import { $ } from "../utils/querySelector";
import { createClickEventAtLink } from "../utils/createClickEventAtLink";

function Main($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <section >
        <div>
          <a href="/upload" id="link-to-upload-main">HPNY 2023</a>
        </div>
        <div> 
          <a href="/upload" id="link-to-upload-main2"> 
            게시글 작성하기
          </a>
        </div>
        <ul>
          <li>
            <a href="/post/12" id="link-to-post-main">
              <div >
                <strong>게시글 1</strong>
                <p>내용</p>
              </div>
            </a>
          </li>
          <li>post 1</li>
          <li>post 1</li>
        </ul>

      </section>
    `;
    const ATagToHome = document.getElementById("link-to-upload-main");
    const ATagToUpload = document.getElementById("link-to-upload-main2");
    const ATagToDetail = document.getElementById("link-to-post-main");

    createClickEventAtLink(ATagToHome);
    createClickEventAtLink(ATagToUpload);
    createClickEventAtLink(ATagToDetail);
  };

  this.render();
}

export default Main;
