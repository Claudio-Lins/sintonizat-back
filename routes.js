import { Router } from 'express'

import NewsletterController from './controllers/NewsletterController'


const router = Router()

router.get('/newsletters', NewsletterController.findAllNewsletters )
router.post('/newsletter', NewsletterController.createNewsletter )


export { router }
