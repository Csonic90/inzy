import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { myFlat } from '../../../controllers/flatControllers'

import { isAuthenticatedUser } from '../../../middlewares/auth'
import onError from '../../../middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .get(myFlat)

export default handler;