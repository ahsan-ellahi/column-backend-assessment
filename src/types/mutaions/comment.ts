import { intArg, mutationField, stringArg } from '@nexus/schema'

export const createComment = mutationField('createComment', {
  type: 'Comment',
  args: {
    content: stringArg({ nullable: false }),
    postId: intArg({ nullable: false }),
    userId: intArg({ nullable: false }),
  },
  resolve: async (parent, { content, userId, postId }, ctx) => {
    return await ctx.prisma.comment.create({
      data: {
        content,
        User: { connect: { id: Number(userId) } },
        Post: { connect: { id: Number(postId) } },
      },
    })
  },
})

export const createReply = mutationField('createReply', {
  type: 'Comment',
  args: {
    content: stringArg({ nullable: false }),
    postId: intArg({ nullable: false }),
    commentId: intArg(),
    userId: intArg(),
  },
  resolve: async (parent, { content, postId, commentId, userId }, ctx) => {
    return await ctx.prisma.comment.create({
      data: {
        content,
        User: { connect: { id: Number(userId) } },
        Post: { connect: { id: Number(postId) } },
        Comment: { connect: { id: Number(commentId) } },
      },
    })
  },
})
