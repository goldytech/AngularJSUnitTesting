/// <reference path="/Scripts/jasmine/jasmine.js" />
/// <reference path="../../src/webapp/scripts/angular.js" />
/// <reference path="../../src/webapp/scripts/angular-animate.js" />
/// <reference path="../../src/webapp/scripts/angular-sanitize.js" />
/// <reference path="../../src/webapp/scripts/angular-route.min.js" />
/// <reference path="../../src/webapp/scripts/angular-mocks.js" />
/// <reference path="../../src/webapp/scripts/jquery-2.1.1.js" />
/// <reference path="../../src/webapp/scripts/bootstrap.js" />
/// <reference path="../../src/webapp/scripts/toastr.js" />
/// <reference path="../../src/webapp/scripts/spin.js" />
/// <reference path="../../src/webapp/app/app.js" />
/// <reference path="../../src/webapp/app/layout/shell.js" />
/// <reference path="../../src/webapp/app/config.exceptionhandler.js" />
/// <reference path="../../src/webapp/app/services/directives.js" />
/// <reference path="../../src/webapp/scripts/ui-bootstrap-tpls-0.10.0.js" />
/// <reference path="../../src/webapp/app/common/common.js" />
/// <reference path="../../src/webapp/app/common/logger.js" />
/// <reference path="../../src/webapp/app/common/spinner.js" />
/// <reference path="../../src/webapp/app/common/bootstrap/bootstrap.dialog.js" />
/// <reference path="../../src/webapp/app/config.route.js" />
/// <reference path="../../src/webapp/app/config.js" />
/// <reference path="../../src/webapp/app/layout/shell.js" />
/// <reference path="../../src/webapp/app/layout/sidebar.js" />
/// <reference path="../../src/webapp/app/services/datacontext.js" />
/// <reference path="../../src/webapp/app/dashboard/dashboard.js" />



//Test suite
describe('Controllers Test Suite', function () {
    
    //Setup
    beforeEach(module('app')); // initialize the app module before running the test suite
    describe('Dashboard Controller', function() {
        var scope, controller, mockCommon, mockDataContext;
        beforeEach(inject(function($rootScope, $controller, $q) {
            scope = $rootScope.$new;
            controller = $controller;
            var fakePeople = [];

            // creating fake stubs for dataContext dependency
            mockDataContext = {
                getMessageCount : function() {
                    var deferred = $q.defer();
                    deferred.resolve(10);
                    return deferred.promise;
                },
                getPeople : function() {
                    var deferred = $q.defer();
                    deferred.resolve(fakePeople);
                    return deferred.promise;
                }
            }

          
        }));
        //Spec - 1
        
        it('Should assign correct title', function() {
            // injecting fake dependecies in controller for testing
            var vm = controller('dashboard', { $scope: scope,  datacontext:mockDataContext });
            expect(vm.title).toBe('Dashboard');
        });
    });
    

    
    //Teardown
    afterEach(function () {
        
    });
});

