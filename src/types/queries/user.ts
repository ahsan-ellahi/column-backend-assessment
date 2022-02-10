import { intArg, queryField } from '@nexus/schema'

export const getAllUsers = queryField('users', {
  type: 'User',
  list: true,
  resolve: async (parent, args, ctx) => {
    return await ctx.prisma.user.findMany()
  },
})

export const getOneUser = queryField('user', {
  type: 'User',
  nullable: true,
  args: { id: intArg() },
  resolve: async (parent, { id }, ctx) => {
    return await ctx.prisma.user.findOne({
      where: {
        id: Number(id),
      },
    })
  },
})
