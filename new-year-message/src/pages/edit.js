function Edit($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
    <section >
      <div>
        <a href="/" id="link-to-upload-main">뒤로가기
        </a>
        <a href="/" id="link-to-upload-main">HPNY 2023
        </a>
      </div>
     
      <img src="a" />
      <input placeholder="원래 값 있어야할 곳(제목)"></input>
      <input placeholder="원래 값 있어야할 곳(내용)"></input>
      <button>글 수정하기 버튼</button>
    </section>
    `;
  };

  this.render();
}

export default Edit;
