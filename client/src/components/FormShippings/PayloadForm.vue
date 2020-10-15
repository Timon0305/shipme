<template>
  <div class="container">
    <div class="container-form mx-auto">
      <b-tabs content-class="mt-3" justified class="tabs-style">
        <b-tab title="Dokumen" active>
          <document-component />
        </b-tab>
        <b-tab title="Barang">
           <package-component />
        </b-tab>
      </b-tabs>

    </div>
  </div>
</template>

<script>
import DocumentComponent from './DocumentComponent';
import PackageComponent from './PackageComponent';

export default {
  name: "PayloadForm",
  components: {
      DocumentComponent,
      PackageComponent
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-form {
  width: 100%;
}

.text-gold {
  color: #ceb16c;
  font-size: 1.5rem;
  font-weight: normal;
}

#__BVID__18 a {
  border-top: 2px solid #ceb16c !important;
  width: 50%;
}


</style>
