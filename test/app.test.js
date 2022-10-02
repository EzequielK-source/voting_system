const chai = require('chai')
	,chaiHttp = require('chai-http')

chai.use(chaiHttp)

const {expect, request} = chai;

const app = require('src/app')

describe('Express app test', function () {
	it('Root request', function (done) {
		request(app)
			.get('/')
			.end((err,res)=>{
				if(err) done(err)

				expect(res).to.have.status(200)
				done()
			})
	});
});