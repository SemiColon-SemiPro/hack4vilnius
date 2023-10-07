<template>
  <div id="display-main">
    <div class="title-holder">
      <h1 class="tutorial-title">Watch the video before creating your first offer</h1>
    </div>
    <div class="iframe-container">
      <iframe
        src="https://www.loom.com/embed/bd68e8a012964ae7b4003ebea67d7ff0?sid=6ace769a-a10c-41ae-a783-cae6818bd96e"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style>
.title-holder {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
}

.tutorial-title {
  text-align: center;
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, #06000b 29%, #df0a0a 67%);
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
