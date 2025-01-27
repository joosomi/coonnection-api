import express from 'express';
import { tcWrapper } from '../utils/tryCatch.js';
import {
    createSession,
    createToken,
    getSessionList,
    calculateTimer
} from '../controllers/openviduController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// 인증 미들웨어를 거쳐 새로운 세션 생성.
router.post('/session', createSession);

// 인증 미들웨어를 거쳐 기존 세션에 대한 새로운 토큰을 생성
router.post('/token', authMiddleware, tcWrapper(createToken));

router.get('/sessions', getSessionList);

router.get('/session/timer', authMiddleware, tcWrapper(calculateTimer))

export default router; // 라우터를 모듈로 내보내기
