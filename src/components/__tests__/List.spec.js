import {mount, shallowMount} from "@vue/test-utils";
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
        it('should render input', () => {
            const input = wrapper.find('#input')
            expect(input.exists()).toBeTruthy()
        })
        it('should render add button', () => {
            const button = wrapper.find('.add-button')
            expect(button.exists()).toBeTruthy()
        })

    })

    describe("functionality check", () => {
        it('add button click functionality ', async function () {
            const addToListSpy = jest.spyOn(List.methods, 'addToList')
            const wrapper = mount(List)
            const button = wrapper.find("#addButton")
            await button.trigger('click')
            expect(addToListSpy).toBeCalled()

        });
    })
});


