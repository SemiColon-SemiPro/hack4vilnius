<template>
  <div id="display-main">
    <div id="text1">
      <h1>Vilnius social housing</h1>
    </div>
    <div id="image1">
      <img src="../../images/house.png" alt="house">
    </div>
  </div>
</template>

<style>

#display-main {
  min-height: 58vh;
  display: grid;
  grid-area: 
  'text-1'
  'image-1';
}

#text1 {
  grid-area: 'text-1';
  align-self: center;
}

#image1 {
  grid-area: 'image-1';
  align-self: center;
}


.title-holder {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
}

.title-holder img {
  min-height: 50px;
  min-width: auto;
  max-height: 200px;
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
