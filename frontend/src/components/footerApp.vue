<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div id="proxies">
            <label class="name">Useful links:</label>
            <div class="links">
              <a
                href="https://www.vmb.lt/d-u-k/"
              >
                FAQ</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  min-height: 210px;
  margin-top: 50px;
  padding: 2%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  background: linear-gradient(to right, rgb(1, 86, 189), black);
}

.links {
  margin-top: 10px;
  font-size: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
}
.solo {
  grid-template-columns: repeat(1, 1fr);
}
.name {
  font-size: 22px;
  font-weight: 700;
  color: #faf8f8;
  overflow: visible;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-self: center;
}

label {
  display: inline;
}
</style>
