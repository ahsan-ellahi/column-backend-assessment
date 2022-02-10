import { intArg, mutationField, stringArg } from '@nexus/schema'

export const createPost = mutationField('createPost', {
  type: 'Post',
  args: {
    content: stringArg(),
    userId: intArg(),
  },
  resolve: async (parent, { content, userId }, ctx) => {
    return await ctx.prisma.post.create({
      data: {
        content,
        user: { connect: { id: Number(userId) } },
      },
    })
  },
})
