//routing


var express = require('express');
var getCtrl = require('./getReq');
var putCtrl = require('./putReq');
var delCtrl = require('./delReq');
var testCtrl = require('./testReq');
var router = express.Router();

//ruting trenger ikke parameter eks: ikke blabla(req,res);
router.route('/').get(getCtrl.getRoot);
router.route('/user').get(getCtrl.getUser);
router.route('/user/:id').get(getCtrl.getUser);
router.route('/login').get(getCtrl.getLogin);
router.route('/troll').get(getCtrl.getTroll);
router.route('').get(getCtrl.get)
router.route('').get(getCtrl.get)



//===============  HOLD NodeETest for testing!!!  ====================
router.route('/NodeETest').get(testCtrl.getNodeETest);
router.route('/PersonalInfo').get(testCtrl.getPersonalInfo);
router.route('/NodeETest/put').get(testCtrl.putNodeETest);
router.route('/NodeETest/post').get(testCtrl.postNodeETest);
router.route('/EmployeeOvertime').get(testCtrl.getEmployeeOvertime);
//router.route('NodeETest/post')
//======== TEST ROUTE FERDIG ========


router.route('/*').get(getCtrl.get404);

module.exports = router;
