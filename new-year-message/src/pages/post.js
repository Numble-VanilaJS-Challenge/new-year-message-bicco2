function Post($container) {
  this.$container = $container;

  const $page = document.createElement("div");

  $page.className = "postDetail";

  $page.innerHTML = `<h1>상품 정보</h1>`;
  // this.setState = () => {
  //   this.render();
  // };

  this.render = () => {
    // console.log("post");
    // this.$container.innerHTML = `
    //   <main class="postPage">
    //     작성 페이지에요.
    //   </main>
    // `;
    this.$container.appendChild($page);
  };

  // this.render();
}

export default Post;
