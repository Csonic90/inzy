import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { allFlat, newFlat } from '../../../controllers/flatControllers'

import onError from '../../../middlewares/errors'
import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'

const handler = nc({ onError });

dbConnect();

handler.get(allFlat)

handler
    .use(isAuthenticatedUser, authorizeRoles('admin'))
    .post(newFlat)

export default handler;