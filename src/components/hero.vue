<template>
  <div class="container">
    <div class="row space-100">
      <div class="col-lg-7 col-md-12 col-xs-12">
        <div class="contents">
          <h2 class="head-title">
            Find the <br />
            job that fits your life
          </h2>
          <p>
            Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
            condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
            porta sit amet. Suspendisse et sapien varius, pellentesque dui non.
          </p>
          <div class="job-search-form">
            <form>
              <div class="row">
                <div class="col-lg-5 col-md-5 col-xs-12">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Job Title or Company Name"
                    />
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-xs-12">
                  <div class="form-group">
                    <div class="search-category-container">
                      <label class="styled-select">
                        <select>
                          <option value="none">Locations</option>
                          <option value="none">New York</option>
                          <option value="none">California</option>
                          <option value="none">Washington</option>
                          <option value="none">Birmingham</option>
                          <option value="none">Chicago</option>
                          <option value="none">Phoenix</option>
                        </select>
                      </label>
                    </div>
                    <i class="lni-map-marker"></i>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2 col-xs-12">
                  <button type="submit" class="button">
                    <i class="lni-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12 col-xs-12">
        <div class="intro-img">
          <img src="../theme/assets/img/intro.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
