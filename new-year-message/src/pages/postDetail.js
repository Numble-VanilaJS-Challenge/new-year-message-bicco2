function PostDetail($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="postDetailPage">
        글 상세 페이지에요.
      </main>
    `;
  };

  this.render();
}

export default PostDetail;
