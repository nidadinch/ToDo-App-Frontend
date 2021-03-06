import {pactWith} from 'jest-pact';
import {like, string} from "@pact-foundation/pact/src/dsl/matchers";
import {API} from "@/api";

pactWith({
    consumer: 'FrontEnd',
    provider: 'Backend',
}, provider => {
    describe('todolist items', () => {
        let api
        beforeEach(() => {
            api = new API(provider.mockService.baseUrl)
        })

        it('get todo list items correctly', async function () {
            await provider.addInteraction({
                state: 'get todo list successfully',
                uponReceiving: 'a request for todo list',
                withRequest: {
                    method: 'GET',
                    path: '/items'
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: [like({
                        id: like(1),
                        text: string('buy some milk')
                    })]
                }
            })
            const response = await api.getItemList()
            expect(response[0].id).toEqual(1)
            expect(response[0].text).toEqual('buy some milk')

        })

        it('add todo list item correctly', async function () {
            await provider.addInteraction({
                state: 'add todo item successfully',
                uponReceiving: 'a request for adding todo list item',
                withRequest: {
                    method: 'POST',
                    path: '/item',
                    body: {
                        text: string('buy some milk')
                    }
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: {
                        id: like(1),
                        text: string('buy some milk')
                    }
                }
            })

            const response = await api.addTodoItem("buy some milk")
            expect(response.text).toEqual('buy some milk')

        })
    })
})
