import {pactWith} from 'jest-pact';
import {like, eachLike, string} from "@pact-foundation/pact/src/dsl/matchers";
import {API} from "@/api";

pactWith({
    consumer: 'FrontEnd',
    provider: 'Backend'
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
                        'Content-Typ': 'application/json; charset=UTF-8',
                    },
                    body: {
                        data: eachLike({
                            id: like(1),
                            text: string('buy some milk')
                        })
                    }
                }
            })
            const response = await api.getItemList()
            expect(response.data[0].id).toEqual(1)
            expect(response.data[0].text).toEqual('buy some milk')

        })
    })
})
