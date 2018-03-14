// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const BASE_URL = '/NCAB';

export const environment = {
  production: false,
  // url: "http://localhost:7000/api/",
  // loginUrl: "/iNCRediCabs/login",
  // logoutUrl: "/iNCRediCabs/logout",
  // checkLoginUrl: "/iNCRediCabs/check-login-status",
  // addEmployeeUrl: "/iNCRediCabs/add-employee",
  // activateEmployeeUrl: "/iNCRediCabs/activate-employee",
  // deactivateEmployeeUrl: "/iNCRediCabs/deactivate-employee",
  // editEmployeeUrl: "/iNCRediCabs/edit-employee",
  // viewEmployeeUrl: "/iNCRediCabs/view-employee",
  // getManagerByNameUrl: "/iNCRediCabs/get-manager-by-name",
  // getAllManagersUrl: "/iNCRediCabs/get-all-managers",
  // getAllRolesUrl: "/iNCRediCabs/get-all-roles",
  // newAccSetupQlidUrl: "/iNCRediCabs/new-acc-setup",
  // forgotpasswordUrl:  "/iNCRediCabs/forgot-password",
  // forgotpassSetPasswordUrl:  "/iNCRediCabs/forgot-password/set-password",
  // accSetupSetPasswordUrl: "/iNCRediCabs/new-acc-setup/set-password",
  // verifyPwdTokenUrl: "/iNCRediCabs/verify-pwd-token",
  
  url:                        BASE_URL,
  loginUrl:                   BASE_URL + "/EmployeeService/login",
  logoutUrl:                  BASE_URL + "/EmployeeService/logout",
  checkLoginUrl:              BASE_URL + "/EmployeeService/check-login-status",
  addEmployeeUrl:             BASE_URL + "/EmployeeService/add-employee",
  activateEmployeeUrl:        BASE_URL + "/EmployeeService/activate-employee",
  deactivateEmployeeUrl:      BASE_URL + "/EmployeeService/deactivate-employee",
  editEmployeeUrl:            BASE_URL + "/EmployeeService/edit-employee",
  viewEmployeeUrl:            BASE_URL + "/EmployeeService/view-employee",
  viewEmployeeByQlidUrl:      BASE_URL + "/EmployeeService/view-employee-by-qlid",
  getManagerByNameUrl:        BASE_URL + "/EmployeeService/get-manager-by-name",
  getAllManagersUrl:          BASE_URL + "/EmployeeService/get-all-managers",
  getAllRolesUrl:             BASE_URL + "/EmployeeService/get-all-roles",
  newAccSetupQlidUrl:         BASE_URL + "/EmployeeService/new-acc-setup",
  forgotpasswordUrl:          BASE_URL + "/EmployeeService/forgot-password",
  forgotpassSetPasswordUrl:   BASE_URL + "/EmployeeService/forgot-password/set-password",
  accSetupSetPasswordUrl:     BASE_URL + "/EmployeeService/new-acc-setup/set-password",
  verifyPwdTokenUrl:          BASE_URL + "/EmployeeService/verify-pwd-token",
  getrequestUrl:              BASE_URL + "/RequestService/getrequest",
  allocateRequest:            BASE_URL + "/RequestService/onApproved",
  employeeRequest:            BASE_URL + "/ReportService/employeereport",
  managerUrl:                 BASE_URL + "/ReportService/managerreport",
  vendorUrl:                  BASE_URL + "/ReportService/vendorreport",
};