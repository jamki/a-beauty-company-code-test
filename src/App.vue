<template>
  <div class="container" id="app">
    <header>
      <div id="nav">
        <router-link to="/">
          <img alt="Adore Beauty" src="./assets/logo.svg" width="300">
        </router-link>
      </div>
    </header>

    <main>
      <router-view/>
    </main>

    <footer>
      <p><a href="#">James Kimpton</a> - 2021</p>
    </footer>
  </div>
</template>

<style lang="scss">

:root {
  --adore-primary: brown;
  --adore-secondary: #E0EEC6;
  --adore-tertiary: #f0f0f0;
  --adore-txt-color: #404040;
  --adore-beauty-loading-color: #00936c;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: grid;
  // grid-template-columns: 100%;
  // grid-template-rows: 10vw 30vw 10vw;
  grid-gap: 1em;
}

header {
  border-bottom: 4px solid black;
  padding: 16px;
}

main {
  box-sizing: border-box;
  max-width: 920px;
  margin: 0 auto;
  min-height: 300px;
  overflow: hidden;
  padding: 0 16px;
  position: relative;
  width: 100%;
}

footer {
  border-top: 2px solid black;
  padding: 16px;
  margin-top: 32px
}


header,
footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  color: #42b983;
}

.adore-product-description {
  p {
    text-align: left;
  }
  ul {
    text-align: left;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
