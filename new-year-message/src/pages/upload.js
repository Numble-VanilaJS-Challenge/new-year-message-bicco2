function Upload($container) {
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
        <button>
          랜덤 이미지 추가하기 / 이미지 추가 완료
        </button>
        <input placeholder="글 제목을 작성해주세요." maxlength="50">

        </input>
        <input placeholder="글 내용을 작성해주세요." maxlength="50">
          
        </input>
        <button>
          글 작성 완료하기
        </button>
      </section>
    `;
  };

  this.render();
}

export default Upload;
