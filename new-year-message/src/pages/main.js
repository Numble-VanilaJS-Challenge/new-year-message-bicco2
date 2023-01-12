function Main($container) {
  this.$container = $container; // #app 에 해당하는 dom이 들어옴

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    // #app의 돔에 innerHTML로 추가함
    this.$container.innerHTML = ` 
      <main class="mainPage">
        메인 페이지에요.
      </main>
    `;
  };

  this.render();
}

export default Main;
