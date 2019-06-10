import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => res.send('Hell ye brother'));

export default router;
