<template>
  <div id="container">
    <div class="row col-12">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div>
          <a class="links" href="https://www.facebook.com/"> facebook </a>
          <a class="links" href="https://www.pinterest.com/"> pinterest </a>
          <a class="links" href="https://www.instagram.com/"> instagram </a>
          <a class="links" href="https://www.twitter.com/"> twitter </a>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2">
              <strong
                >Podaj swój mail, aby otrzymywać newsletter z
                pysznościami:</strong
              >
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input
                type="email"
                id="form5Example21"
                class="form-control"
                placeholder="Wpisz swój adres mailowy"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder ='Wpisz swój adres mailowy'"
              />
              <label class="form-label" for="form5Example21"></label>
            </div>
          </div>

          <button type="submit" class="btn btn-outline-light mb-4">
            Subscribe
          </button>
        </div>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0)">
        © 2021 Copyright
      </div>
    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#container {
  align-items: center;
  text-align: center;
  padding: 30px;
  border-color: black;
  border-width: 1px;
  background-color: black;
  color: blanchedalmond;
  border-style: dotted;
}

.links {
  text-decoration: none;
}
</style>
