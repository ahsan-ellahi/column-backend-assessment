import { intArg, queryField } from '@nexus/schema'

export const getAllPosts = queryField('posts', {
  type: 'Post',
  list: true,
  resolve: async (parent, args, ctx) => {
    return await ctx.prisma.post.findMany()
  },
})

export const getOnePost = queryField('post', {
  type: 'Post',
  nullable: true,
  args: { id: intArg() },
  resolve: async (parent, { id }, ctx) => {
    return await ctx.prisma.post.findOne({
      where: {
        id: Number(id),
      },
    })
  },
})
