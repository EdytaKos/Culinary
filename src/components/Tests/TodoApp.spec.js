import { mount } from "@vue/test-utils";
import TodoApp from "TodoApp";

describe("TodoApp.vue", () => {
  //1
  it("should render todo", () => {
    const wrapper = mount(TodoApp);
    const secondtodo = wrapper.get('[data-test="secondtodo"]');
    expect(wrapper.text()).toBe("Lista zakupów");
  });

  //2
  it("should add new todo", async () => {
    const wrapper = mount(TodoApp);
    expect(wrapper.findAll('[data-test="secondtodo"]')).toHaveLength(1);
    await wrapper.get('[data-test="todo"]').setValue("New Todo");
    await wrapper.get('[data-test="form"]').trigger("submit");
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });
  //3
  it("complete todo", async () => {
    const wrapper = mount(TodoApp);
    expect(wrapper.findAll('[data-test="secondtodo"]')).toHaveLength(1);
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

    expect(wrapper.get('[data-test="todo-checkbox"]').classes()).toContain(
      "completed"
    );
  });
});
