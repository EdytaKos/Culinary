import { mount } from "@vue/test-utils";
import TodoList from "TodoList";
//4
describe("TodoList.vue", () => {
  it("should render todo", () => {
    const wrapper = mount(TodoList);
    const todo = wrapper.get('[data-test="todo"]');
    expect(wrapper.text()).toBe("jajka") ||
      expect(wrapper.text()).toBe("mleko");
  });
});
