import { Router } from 'express';
import { getSignedToken } from "../Services/AuthService.js"
const router = Router();
router.get('/login', async (req, res) => {
    return res.json(getSignedToken());
});
export default router;