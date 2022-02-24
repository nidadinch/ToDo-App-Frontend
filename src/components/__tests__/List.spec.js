import {createLocalVue, mount} from "@vue/test-utils";
import List from "@/components/List";
import API from "@/api";
import flushPromises from "flush-promises";
import Vuex from 'vuex';

jest.mock("@/api")

describe('List.vue', function () {
    describe('Exists check', () => {
        let wrapper

        beforeEach(() => {
            wrapper = mountComponent(List)
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
            const wrapper = mountComponent(List)
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
            const wrapper = mountComponent(List)
            await flushPromises()
            const todoItem = wrapper.findAll('li')
            expect(todoItem).toHaveLength(mockResponse.length)
        })

    })
});

function mountComponent() {
    let actions;
    let getters;
    let state;

    const localVue = createLocalVue();
    localVue.use(Vuex);

    state = {
        todos: []
    };
    actions = {
        addTodo: jest.fn(),
        getTodos: jest.fn(),
    };
    getters = {
        todos: () => [
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
            }],
    };

    return mount(List, {
        localVue,
        store: new Vuex.Store({
            state,
            actions,
            getters
        })
    });
}

