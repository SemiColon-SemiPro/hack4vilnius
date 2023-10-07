<template>
  <div id="display-main">
    <div class="container">
      <div class="row title-holder pt-5">
        <h1 class="tutorial-title">Vilnius social housing</h1>
      </div>
      <div class="row justify-content-center pt-5">
        <img class="img-fluid w-50" src="../../images/vmb-logo.png" alt="vilniaus miesto bustas">
      </div>
    </div>
  </div>
</template>

<style>

#display-main {
  min-height: 58vh;
}

.title-holder {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
}

.tutorial-title {
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, #06000b 29%, #1f369c 67%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 42px;
  font-weight: 900;
  text-align: center;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.iframe-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}
iframe {
  height: 600px;
  width: 900px;
}
</style>
