const User = require('../../../models/User')
const Post = require('../../../models/Post')
const Hobby = require('../../../models/Hobby')

const userResolver = async (obj, args, context) => {
  // authentication
  if (!context.user) throw new Error('User not logged in')

  // communicate with database
  const user = await User.query().findById(args.id)

  return user
}

const usersResolver = async (obj, args, context) => {
  const { substr, hometown, house, concentration, hobbies } = args

  const users = await User.query().where(qb => {
    if (substr) {
      qb.where('name', 'like', `%${substr}%`)
    }
    if (hometown) {
      qb.where('hometown', '=', hometown)
    }
    if (house) {
      qb.where('house', '=', house)
    }
    if (concentration) {
      qb.where('concentration', '=', concentration)
    }
    if (hobbies) {
      qb.where('hobbies', '=', hobbies)
    }
  })

  return users
}

const postsResolver = async (obj, args, context) => {
  const posts = await Post.query().where({ userId: obj.id })

  return posts
}

const hobbiesResolver = async (obj, args, context) => {
  const hobbies = await Hobby.query().where({ userId: obj.id })

  return hobbies
}

const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
  },
  User: {
    posts: postsResolver,
    hobbies: hobbiesResolver,
  },
}

module.exports = resolver
