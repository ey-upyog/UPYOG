import { PrivateRoute } from "@egovernments/digit-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Switch, useLocation , Route } from "react-router-dom";
import Inbox from "./Inbox/Inbox";
import ResponseEmployee from "./ResponseEmployee";

const EmployeeApp = ({ path, url, userType ,tenants, parentRoute }) => {
  const { t } = useTranslation();

  const WMSManageApplication = Digit?.ComponentRegistryService?.getComponent("WMSManageApplication");
  const RegisterDetails = Digit?.ComponentRegistryService?.getComponent("RegisterDetails");
  const Inbox = Digit?.ComponentRegistryService?.getComponent("Inbox");
  const ResponseEmployee = Digit?.ComponentRegistryService?.getComponent("ResponseEmployee");

  return (
    <Switch>
      <React.Fragment>
        <div className="ground-container">
       
        <PrivateRoute path={`${path}/responseemp`} component={() => <ResponseEmployee/>} />
        <PrivateRoute path={`${path}/inbox`} component={props => <Inbox {...props} tenants={tenants} parentRoute={parentRoute} />} />
        {/* <PrivateRoute path={`${path}/details`} component={() => <RegisterDetails />} /> */}
          <PrivateRoute path={`${path}/myapplication`} component={() => <WMSManageApplication />} />
          <PrivateRoute path={`${path}/details/:id`} component={(props) => <RegisterDetails {...props} />} />
        </div>
      </React.Fragment>
    </Switch>
  );
};

export default EmployeeApp;