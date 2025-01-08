import { runFlow } from '../controller/Langflow.js';

import express from 'express'
const langflowRouter = express.Router();

langflowRouter.post("/message", runFlow);
export default langflowRouter;