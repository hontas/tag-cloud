const chai = require('chai');
const dirtyChai = require('dirty-chai');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);
chai.use(dirtyChai);
