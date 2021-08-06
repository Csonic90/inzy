import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { allBlogs, newBlog } from '../../../controllers/blogControllers'

import onError from '../../../middlewares/errors'
import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'

const handler = nc({ onError });

dbConnect();

handler.get(allBlogs)

handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .post(newBlog)

export default handler;