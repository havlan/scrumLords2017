//routing


var getCtrl = require('./getReq');
var postCtrl = require('./postReq');
var delCtrl = require('./delReq');
var model = require('../models/regWMail');


module.exports = function (app, passport) {
    app.get('/', isLoggedIn, getCtrl.getRoot);
    app.get('/user', isLoggedIn, getCtrl.getUser);
    app.get('/user/:id', isLoggedIn, getCtrl.getUser);
    app.get('/login', getCtrl.getLogin);
    app.get('/logout', logOut);
    app.get('/getEmployee', isAdmin, getCtrl.getEmployee);
    app.get('/getOneEmployee', isLoggedIn, getCtrl.getOneEmployee);
    app.get('/getEmployeeRestricted',isLoggedIn,getCtrl.getEmployeeRestricted);
    //app.get('/getDepartment/:department_id').get(getCtrl.getDepartment);
    app.get('/getType', isLoggedIn, getCtrl.getType);
    app.get('/getShift', isLoggedIn, getCtrl.getShift);
    app.get('/getShift_has_employee', isLoggedIn, getCtrl.getShift_has_employee);
    app.get('/getRequest', isLoggedIn, getCtrl.getRequest);
    app.get('/getAbsence', isLoggedIn, getCtrl.getAbsence);
    app.get('/getOvertime', isLoggedIn, getCtrl.getOvertime);
    //app.get('/getUserInfo', isLoggedIn, getCtrl.getUserInfo);
    app.get('/getVaktoversiktSite', isLoggedIn, getCtrl.getVaktoversiktSite);
    app.get('/getEmployee_Shifts_toCurrentDate', isLoggedIn, getCtrl.getEmployee_Shifts_toCurrentDate);
    app.get('/getEmployee_Shifts_fromCurrentDate', isLoggedIn, getCtrl.getEmployee_Shifts_fromCurrentDate);
    app.get('/getPersonalShiftEvents',isLoggedIn, getCtrl.getPersonalShiftEvents);
    app.get('/getTypeNames',isLoggedIn, getCtrl.getTypeNames);
    app.get('/getPossibleSiftsEvents',isLoggedIn,getCtrl.getPossibleSiftsEvents);
    app.get('/getDepartment',isLoggedIn, getCtrl.getDepartment);
    app.get('/getNextShiftForEmp',isLoggedIn, getCtrl.getNextShiftForEmp);
    app.get('/getOvertimeView',isLoggedIn,getCtrl.getOvertimeView);
    app.get('/getAbsenceView',isLoggedIn,getCtrl.getAbsenceView);
    app.get('/getRequestView',isLoggedIn,getCtrl.getRequestView);
    app.get('/getShiftChange', isLoggedIn,getCtrl.getShiftChange);
    app.get('/getEmployee2',isLoggedIn,getCtrl.getEmployee2);
    app.get('/getAvailableShifts',isAdmin,getCtrl.getAvailableShifts);
    app.get('/getClearenceLevel',isLoggedIn,getCtrl.getClearenceLevel);

    app.get('/getAvailability',isLoggedIn, getCtrl.getAvailability);

    //Sites
    app.get('/menu', isLoggedIn, getCtrl.getMenuSite);
    app.get('/overviewForAdmin', isLoggedIn, getCtrl.getOverviewForAdminSite);
    app.get('/myProfile', isLoggedIn, getCtrl.getMyProfileSite);
    app.get('/vaktoversikt', isLoggedIn, getCtrl.getVaktoversiktSite);
    app.get('/calendar', isLoggedIn, getCtrl.getCalendarSite);
    app.get('/approvalAdmin', isLoggedIn, getCtrl.getApprovalAdminSite);
    app.get('/frontpageAdmin', isLoggedIn, getCtrl.getFrontpageAdminSite);
    app.get('/OnePagedMenu', isLoggedIn, getCtrl.getOnePagedMenu);
    app.get('/frontpageSuper', isLoggedIn, getCtrl.getFrontpageSuperSite);
    app.get('/overviewEmp', isLoggedIn, getCtrl.getOverviewEmpSite);
    app.get('/availability', isLoggedIn, getCtrl.getAvailabilitySite);
    app.get('/appeal', isLoggedIn, getCtrl.getAppeal);
    app.get('/adminShifts', isLoggedIn, getCtrl.getAdminShifts);


    //Images
    app.get('IMG01', isLoggedIn, getCtrl.getLogo);

    //post / put
    app.post('/login', passport.authenticate('login', {
        failureRedirect: '/login',
        failureFlash: true
    }), function (req, res) {
        console.log("LOGIN OK?");
        res.redirect('/calendar');
    });

    app.post('/getVaktliste1', isLoggedIn, getCtrl.getVaktliste1);
    app.post('/getVaktliste2', isLoggedIn, getCtrl.getVaktliste2);
    app.post('/getVaktliste3', isLoggedIn, getCtrl.getVaktliste3);

    app.post('/postUser', isAdmin, postCtrl.postEmployee);
    app.post('/delUser', isAdmin, delCtrl.delLogin); // office auth
    app.post('/postDepartment', isAdmin, postCtrl.postDepartment);
    app.post('/postType', isAdmin, postCtrl.postType);
    app.post('/postShift', isLoggedIn, postCtrl.postShift);
    app.post('/postShift_has_employee', isLoggedIn, postCtrl.postShift_has_employee);
    app.post('/postRequest', isLoggedIn, postCtrl.postRequest);
    app.post('/postAbsence', isLoggedIn, postCtrl.postAbsence);
    app.post('/postOvertime', isLoggedIn, postCtrl.postOvertime);
    app.post('/postLogInInfo', isLoggedIn, postCtrl.postLogInInfo);
    app.post('/updateShift_has_employee', isLoggedIn, postCtrl.updateShift_has_employee);
    app.post('/updateEmployee', isLoggedIn, postCtrl.updateEmployee);
    app.post('/updateEmployeePersonalInfo',isLoggedIn,postCtrl.updateEmployeePersonalInfo);
    app.post('/updateType', isLoggedIn, postCtrl.updateType);
    app.post('/updateShift', isLoggedIn, postCtrl.updateShift);
    app.post('/updateDepartment', isLoggedIn, postCtrl.updateDepartment);
    app.post('/updateRequest', isLoggedIn, postCtrl.updateRequest);
    app.post('/updateRequest2', isLoggedIn, postCtrl.updateRequest2);
    app.post('/updateAbsence2', isLoggedIn, postCtrl.updateAbsence2);
    app.post('/updateOvertime', isLoggedIn, postCtrl.updateOvertime);
    app.post('/updateOvertime2', isLoggedIn, postCtrl.updateOvertime2);
    app.post('/updateLogInInfo', isLoggedIn, postCtrl.updateLogInInfo);
  //  app.post('/newUser',isLoggedIn,postCtrl.postNewUser);
    app.post('/forgotPassword',model.forgotPwMail);
    app.post('/newEmployee',isAdmin, function(req,res){
        model.postNewUserFall(req,res, function(err,res){
            if(err){
                console.log("\n\n===ERR===\n\n");
            }else{
                console.log("Method success??\n");
                console.log(res);
                res.json(res);
            }

        })
    });

    app.post('/changePassword', isLoggedIn, model.changePassword);
    app.post('/acceptRequestWith', isAdmin, model.acceptRequestWith);
    app.post('/getAvailableEmpForShift', getCtrl.getAvailableEmpForShift);


    //MÅ VÆRE SIST
    app.get('/*', getCtrl.get404);

};

//app.route('/*').get(getCtrl.get404);

function isLoggedIn(req, res, next) {
    console.log(req.session);
    if (req.isAuthenticated()) {
        next();
    } else {
        console.log(req.session, " not authorized.");
        res.redirect('/login');
    }
}

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.session.passport) {
        if (req.session.passport.user.is_admin == 0) {
            next();
        }
    } else {
        res.redirect('/user');
    }
}
function logOut(req, res) {
    req.logout();
    res.redirect('/login');
}
//module.exports = app;
