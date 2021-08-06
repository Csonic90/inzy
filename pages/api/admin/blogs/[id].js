import nc from 'next-connect'
import dbConnect from '../../../../config/dbConnect'

import { deleteBlog } from '../../../../controllers/blogControllers'

import onError from '../../../../middlewares/errors'
import { isAuthenticatedUser, authorizeRoles } from '../../../../middlewares/auth'

const handler = nc({ onError });

dbConnect();

// handler
//     .use(isAuthenticatedUser, authorizeRoles('admin'))
//     .get(getUserBlog)


// handler
//     .use(isAuthenticatedUser, authorizeRoles('admin'))
//     .put(updateBlog)


handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .delete(deleteBlog)

export default handler;