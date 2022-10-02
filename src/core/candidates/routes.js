const Router = require('express').Router;
const candidateRouter = Router();


candidateRouter.get('/',(req,res)=>{
	return res.json({candidates:[]}).status(200)
})

module.exports = candidateRouter;