<template>
  <div class="main">
    <hr />

    <div class="flex flex-row flex-jc-center">
      <h3>Rysowanie</h3>

      <div class="flex flex-column">
        <button class="js-tool" data-tool="pencil">Pencil</button>
        <button class="js-tool" data-tool="brush">Brush</button>
        <button class="js-tool" data-tool="shape">Shape</button>
      </div>
      <div class="flex flex-column">
        <canvas width="500px" height="300px"></canvas>
        <span class="js-current-tool"></span>
      </div>
    </div>

    <div class="flex flex-row flex-jc-center">
      <div class="js-tools"></div>
      <div class="flex flex-column">
        <div class="js-canvas"></div>
        <div class="js-context"></div>
      </div>
    </div>
    <hr />
  </div>
</template>




<script>
import { ref } from "vue";

// tutaj w zamyśle ma powstać sekcja rozrywki, umożliwiająca rysowanie
// sekcja ta będzie wykorzystywać wzorzec Builder
import { ToolsUI } from "./ToolsUI";
import { ToolsFactory } from "./ToolsFactory";
import { DrawingBoardUI } from "./Drawing-BoardUI";
import { DrawingContextUI } from "./DrawingContextUI";
export default {
  name: "Rozrywka",

  data() {
    const factory = new ToolsFactory();
    const tools = new ToolsUI(".js-tools");
    const board = new DrawingBoardUI(".js-canvas", 500, 300);
    const context = new DrawingContextUI(".js-context");
  },
  methods: {
    drawing(selectedTool) {
      const factory = new ToolsFactory();
      const tool = factory.getTool(selectedTool);
      const board = new DrawingBoardUI(".js-canvas", 500, 300);
      board.changeTool(tool);
    },
    updatedrawing(selectedTool) {
      const context = new DrawingContextUI(".js-context");
      context.updateContext(selectedTool);
    },
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.flex-jc-center {
  justify-content: center;
}

button {
  border: none;
  border: 2px solid #244752;
  font-size: 18px;
  border-radius: 5px;
  color: #244752;
  background: none;
  margin: 10px 0;
  padding: 5px 20px;
}

button:hover {
  background: rgba(0, 0, 0, 0.2);
}

button.active {
  background: #244752;
  color: white;
}

canvas {
  border: 1px solid #244752;
  margin: 10px;
}
h3 {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 30px;
}

.clickerbutton {
  padding: 20px;
  margin-left: 30px;
}
</style>