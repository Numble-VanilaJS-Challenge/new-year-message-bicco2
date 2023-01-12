function Post($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="postPage">
        작성 페이지에요.
      </main>
    `;
  };

  this.render();
}

export default Post;
