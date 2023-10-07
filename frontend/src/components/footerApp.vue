<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div id="proxies">
            <label class="name">Useful links:</label>
            <div class="links">
              <a href="https://smartproxy.com/proxies/residential-proxies/pricing">
                Resi</a
              >
              <a href="https://smartproxy.com/proxies/mobile/pricing"> Mobile</a>
              <a
                href="https://smartproxy.com/proxies/dedicated-datacenter-proxies/pricing"
              >
                Dedicated DC</a
              >
              <a
                href="https://smartproxy.com/proxies/static-isp-residential-proxies/pricing"
              >
                ISP DC</a
              >
              <a href="https://smartproxy.com/proxies/datacenter-proxies/pricing">
                DC Shared</a
              >
              <a href="https://smartproxy.com/proxies/site-unblocker/pricing"
                >Unblocker</a
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
