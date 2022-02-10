import { mutationField, stringArg } from '@nexus/schema'

export const createUser = mutationField('createUser', {
  type: 'User',
  args: {
    username: stringArg({ nullable: false }),
    name: stringArg({ nullable: false }),
  },
  resolve: async (parent, { username, name }, ctx) => {
    return await ctx.prisma.user.create({
      data: {
        username,
        name,
      },
    })
  },
})
