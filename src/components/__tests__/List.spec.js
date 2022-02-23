import {shallowMount} from "@vue/test-utils";
import List from "@/components/List";

describe('List.vue', function () {
    describe('Exists check',  () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallowMount(List)
        })
        it("should component exists", () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it('should render todo-list container', () => {
            const container = wrapper.find('.todo-list')
            expect(container.exists()).toBeTruthy()
        })
    })
});
