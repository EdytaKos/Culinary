<template>
  <div id="app">
    <div @click="generatePDF()" class="np-btn">Pobierz plik PDF</div>

    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      filename="mojezakupy"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      :pdf-margin="10"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <TodoApp />
      </section>
    </vue-html2pdf>
    <div>
      <TodoApp />
    </div>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import TodoApp from "./TodoApp";
export default {
  name: "Topdf",
  methods: {
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  components: {
    VueHtml2pdf,
    TodoApp,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.np-btn {
  padding: 2px 8px;
  margin: 12px 8px;
  border: 1px solid white;
  width: 110px;
  background: green;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
}
</style>