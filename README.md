# Threekit - Connector

Installation Instructions:
# theme.liquid
`{{ 'https://admin.threekit.com/app/js/threekit-player.js' | script_tag }}`

# product-template.liquid
- At the top of the template declare variables

{% assign threekit = product.metafields.threekit %}
{% assign isPdp = 'pdp' %}


- Place this coniditonal where you want the 'launch' button on the product page

{% if threekit[isPdp] == 'true' %}
	{% include 'pdp-threekit' %}
{% endif %}


# pdp-threekit.liquid
{% assign threekit = product.metafields.threekit %}

{% assign asset = 'assetid' %}
{% assign isAr = 'ARen' %}
  
{% assign shop = shop.metafields.threekit %}
{% assign token = 'token' %}

    
<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
    
<style>
  @media only screen and (max-width: 600px) {
  #tkplayer {
    height: 50vh;
    width: 70vw;
  }
}
   @media only screen and (min-width: 601px) {
  #tkplayer {
    height: 60vh;
    width: 60vw;
  }
}
  
</style>
<hr class="my-5" />

<div class="row mb-4">
  <div class="card-deck col-9">
    <div class="card">
      <div class="card-body">

        <p>
          <a data-fancybox data-src="#selectableModal" href="javascript:;" class="btn btn-primary" data-touch="false">Launch 3D Player</a>
        </p>

        <div style="display: none;max-width:100vw;" id="selectableModal">
          <h2>Threekit</h2>
          <div id="tkplayer"></div>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
   window
      .threekitPlayer({
     	authToken: "{{ shop[token] }}",
      el: document.getElementById("tkplayer"),
     	assetId: "{{ threekit[asset] }}",
      showAR: '{{ threekit[isAr] }}'
     })
      .then(async api => {
         window.player = api;
         window.configurator = await api.getConfigurator();

  }); 

</script>