import React, { useState, useEffect } from "react";
import { Loader } from "@egovernments/digit-ui-react-components";
import { Dropdown, LabelFieldPair, CardLabel } from "@egovernments/digit-ui-react-components";
import { useLocation } from "react-router-dom";

const WmsPrStatus = ({ t, config, onSelect, formData = {}, userType }) => {
  const tenantId = Digit.ULBService.getCurrentTenantId();

  const { pathname: url } = useLocation();
  const editScreen = url.includes("/modify-application/");
  // const { data: Funds = [{Fund:"Fund1"},{Fund:"Fund2"}], isLoading } = Digit.Hooks.wms.useWmsMDMS(tenantId, "common-masters", "Fund") || {};
  const [fund, setfund] = useState(formData?.WmsPrStatus);
  function WmsPrStatus(value) {
    setfund(value);
  }

  useEffect(() => {
   // alert(Funds)
    onSelect(config.key, fund);
  }, [fund]);
  const inputs = [
    {
      label: "WMS_PR_STATUS_LABEL",
      type: "text",
      name: "Status_name",
      validation: {
        isRequired: true,
        pattern: Digit.Utils.getPattern('Name'),
        title: t("WMS_COMMON_NAME_INVALID"),
      },
      isMandatory: true,
    },
  ];

  // if (isLoading) {
  //   return <Loader />;
  // }

  return inputs?.map((input, index) => {
    return (
      <LabelFieldPair key={index}>
        <CardLabel className="card-label-smaller">
          {t(input.label)}
          {input.isMandatory ? " * " : null}
        </CardLabel>
        <Dropdown
          className="form-field"
          selected={fund}
          option={[{code:"Work 1",Fund:"Work 1"},{code:"Work 2",Fund:"Work 2"}]}
          select={WmsPrStatus}
          optionKey="code"
          defaultValue={undefined}
          t={t}
        />
      </LabelFieldPair>
    );
  });
};

export default WmsPrStatus;