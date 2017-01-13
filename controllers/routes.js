//routing


var express = require('express');
var getCtrl = require('./getReq');
var putCtrl = require('./putReq');
var postCtrl = require('./postReq');
var delCtrl = require('./delReq');
var testCtrl = require('./testReq');
var router = express.Router();

//ruting trenger ikke parameter eks: ikke blabla(req,res);
//routing does not need parameter.
// syntax - router.route(PATH).[REST METHOD](controller.controllerAccessName)

//get
router.route('/').get(getCtrl.getRoot);
router.route('/user').get(getCtrl.getUser);
router.route('/user/:id').get(getCtrl.getUser);
router.route('/login').get(getCtrl.getLogin);
router.route('/getEmployee').get(getCtrl.getEmployee);
router.route('/getDepartment').get(getCtrl.getDepartment);
router.route('/getType').get(getCtrl.getType);
router.route('/getShift').get(getCtrl.getShift);
router.route('/getShift_has_employee').get(getCtrl.getShift_has_employee);

//router.route('/getVaktoversikt').get(getCtrl.getVaktoversikt);

router.route('/getUserInfo').get(getCtrl.getUserInfo);
router.route('/getOvertime').get(getCtrl.getOvertime);
//post / put
router.route('/postUser').post(postCtrl.postEmployee);
router.route('/postDepartment').post(postCtrl.postDepartment);
router.route('/postType').post(postCtrl.postType);
router.route('/postShift').post(postCtrl.postShift);
router.route('/postShift_has_employee').post(postCtrl.postShift_has_employee);
router.route('/postRequest').post(postCtrl.postRequest);
router.route('/postAbsence').post(postCtrl.postAbsence);
router.route('/postOvertime').post(postCtrl.postOvertime);
router.route('/postLogInInfo').post(postCtrl.postLogInInfo);

//delete



//===============  KEEP NodeETest for testing!!!  ====================
router.route('/NodeETest').get(testCtrl.getNodeETest);
router.route('/NodeETest/put').put(testCtrl.putNodeETest);
router.route('/NodeETest/post').post(testCtrl.postNodeETest);
//router.route('NodeETest/post')
//======== TEST ROUTE FERDIG ========


router.route('/*').get(getCtrl.get404);

module.exports = router;
