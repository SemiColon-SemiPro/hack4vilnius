<template>
  <div class="footer">
    <div id="proxies">
      <label class="name">Useful links:</label>
      <div class="links">
        <a href="https://smartproxy.com/proxies/residential-proxies/pricing"> Resi</a>
        <a href="https://smartproxy.com/proxies/mobile/pricing"> Mobile</a>
        <a href="https://smartproxy.com/proxies/dedicated-datacenter-proxies/pricing">
          Dedicated DC</a
        >
        <a href="https://smartproxy.com/proxies/static-isp-residential-proxies/pricing"> ISP DC</a>
        <a href="https://smartproxy.com/proxies/datacenter-proxies/pricing"> DC Shared</a>
        <a href="https://smartproxy.com/proxies/site-unblocker/pricing">Unblocker</a>
      </div>
    </div>
    <div id="apis">
      <label class="name">Public Pricing (API):</label>
      <div class="links">
        <a href="https://smartproxy.com/scraping/ecommerce/pricing">E-com API</a>
        <a href="https://smartproxy.com/scraping/web/pricing">WEB API</a>
        <a href="https://smartproxy.com/scraping/social-media/pricing">SM API</a>
        <a href="https://smartproxy.com/scraping/ecommerce/pricing">E-com API</a>
        <a href="https://smartproxy.com/scraping/no-code/pricing">No-code Scraper</a>
      </div>
    </div>
    <div id="internal">
      <label class="name">Internal Pricing:</label>

      <div class="links solo">
        <a href="">Latest custom pricing doc</a>
      </div>
    </div>
    <div id="slack">
      <label class="name">Approval</label>
      <div class="links solo">
        <a href="">Link to the slack channel</a>
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
  justify-content: space-around;
  background: linear-gradient(to right, rgb(189, 56, 1), black);
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
