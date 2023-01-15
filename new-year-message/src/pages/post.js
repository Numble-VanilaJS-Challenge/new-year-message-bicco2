import { createClickEventAtLink } from "../utils/createClickEventAtLink";

function Post($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
    <section >
      <div>
        <a href="/" id="link-to-upload-post1">뒤로가기
        </a>
        <a href="/" id="link-to-upload-post2">HPNY 2023
        </a>
      </div>
     
      <article>
        <img src="https://images.unsplash.com/photo-1672425445243-a2…Hx8fHx8fDE2NzM2MzU1OTE&ixlib=rb-4.0.3&q=80&w=1080"/>
        <strong>글 제목</strong>
        <span>2023.10.2</span>
        <p>글 내용</p>
        <a href="/edit/12" id="link-to-edit-post">
          수정
        </a>
        <button>
          삭제
        </button>
      </article>
      <section>
        <form>
          <input>댓글 내용</input>
          <button>게시</button>
        </form>
        <ul>댓글 1</ul>
        <ul>댓글 2</ul>
      </section>
    </section>
    `;
    const ATagToHome = document.getElementById("link-to-upload-post1");
    const ATagToBackBtn = document.getElementById("link-to-upload-post2");
    const ATagToEdit = document.getElementById("link-to-edit-post");

    createClickEventAtLink(ATagToHome);
    createClickEventAtLink(ATagToBackBtn);
    createClickEventAtLink(ATagToEdit);
  };

  this.render();
}

export default Post;
