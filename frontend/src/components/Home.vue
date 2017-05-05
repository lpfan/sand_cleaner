<template>
  <div class="row">
      <div class="col-xs-4 col-md-4">
          <span>Client Info</span>
          <form class="">
              <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="email">
              </div>
          </form>
      </div>
      <div class="col-xs-4 col-md-4">
          Order Info
      </div>
      <div class="col-xs-4 col-md-4">
          Submit
      </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                email: ''
            }
        }
    }
</script>
<style>
</style>
