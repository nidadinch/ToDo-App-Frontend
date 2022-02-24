import {shallowMount} from "@vue/test-utils";
import List from "@/components/List";
import API from "@/api";
import flushPromises from "flush-promises";

jest.mock("@/api")

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
        it('add button click functionality ', async () => {
            const addToListSpy = jest.spyOn(List.methods, 'addToList')
            const wrapper = shallowMount(List)
            const button = wrapper.find("#addButton")
            await button.trigger('click')
            expect(addToListSpy).toBeCalled()

        });

        it('should render todo list items correctly', async () => {
            const mockResponse = [
                {
                    "id": 1,
                    "text": "buy some cheese"
                },
                {
                    "id": 2,
                    "text": "go to gym"
                },
                {
                    "id": 3,
                    "text": "practice go"
                }
            ]
            API.getItemList.mockResolvedValue(mockResponse)
            const wrapper = shallowMount(List)
            await flushPromises()
            const todoItem = wrapper.findAll('li')
            expect(todoItem).toHaveLength(mockResponse.length)
        })

    })
});


