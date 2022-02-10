import { makeSchema } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'
import {
  Post,
  User,
  Comment,
  createUser,
  createPost,
  createComment,
  createReply,
  getAllUsers,
  getAllPosts,
  getOnePost,
  getOneUser
} from './types'

export const schema = makeSchema({
  types: [
    Post,
    User,
    Comment,
    createUser,
    createPost,
    createReply,
    createComment,
    getAllUsers,
    getAllPosts,
    getOnePost,
    getOneUser,
  ],
  plugins: [nexusPrisma()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'client',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
})
