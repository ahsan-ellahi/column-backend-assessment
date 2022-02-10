import { createTestContext } from './__helpers'
const ctx = createTestContext()
it('ensures that a user exists with id=1', async () => {

    const draftResult = await ctx.client.request(`
        query {
            user(id:1){
                id
                name
            }
        }
    `)
    expect(draftResult).toMatchInlineSnapshot(`
    Object {
      "user": Object {
        "id": 1,
        "name": "ali",
      },
    }
   `)            
})

it('ensures that a post exists with id=1', async () => {
    const draftResult = await ctx.client.request(`
        query {
            post(id:2){
                id
                content
            }
        }
    `)
    expect(draftResult).toMatchInlineSnapshot(`
    Object {
      "post": null,
    }
   `)              

})

