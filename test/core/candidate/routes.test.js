const chai = require('chai')
	,chaiHttp = require('chai-http')

chai.use(chaiHttp)

const {expect, request} = chai;

const app = require('src/app')

describe('Candidate route test', function () {
	it('GET request', function (done) {
		/**
		 * Get request in /candidates route returns
		 * a list with all avaible candidates
		 **/
		request(app)
			.get('/candidates')
			.end((err,res)=>{
				if(err) done(err)

				expect(res).to.have.status(200)
				expect(res).to.be.json;
				expect(res.body).to.have.property("candidates");
				const {candidates} = res.body;

				expect(candidates).to.be.an.instanceof(Array);
				done()
			})
	});
});