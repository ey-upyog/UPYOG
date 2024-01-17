import { FormComposer, Loader,Header } from "@egovernments/digit-ui-react-components";
import React, {  useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { newConfig } from "../../../../components/config/phm-config";
import { convertEpochToDate, pdfDownloadLink } from "../../../../components/Utils";
const WmsPhmCreate = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
  const history = useHistory();  
  const [isLoading, setIsLoading] = useState(false);
  const [canSubmit, setSubmitValve] = useState(false);
  const [showToast, setShowToast] = useState(null);
  const onSubmit = (data) => {
    setIsLoading(true);
    let PhmemeApplications = 
      {
        PhmemeApplication: [{
          project_name: data?.WmsPhmPrjName?.project_name,  
          work_name: data?.WmsPhmWorkName?.work_name,  
          milestone_name: data?.WmsPhmMLName?.milestone_name,
          percent_weightage: data?.WmsPhmPercent?.percent_weightage,
          tenantId:tenantId
        }],
      };
    
      /* use customiseCreateFormData hook to make some chnages to the Employee object [0].PhmeduleOfRateApplication*/
     Digit.WMSService.PHMApplications.create(PhmemeApplications.PhmemeApplication[0], tenantId).then((result,err)=>{
      setIsLoading(false);
       history.push("/upyog-ui/citizen/wms/phm-home");
     })
     .catch((e) => {
     console.log("err");
    });
  };

  

  if (isLoading) {
    return <Loader />;
  }
  const configs = newConfig?newConfig:newConfig;

  return (
    <div>
    <Header>{t("WMS_NEW_PHM_FORM_HEADER")}</Header>
    <FormComposer
              head={t("WMS_PHM_FORM_CREATE_HEAD")}
              label={t("WMS_COMMON_SAVE")}
              config={configs}
              onSubmit={onSubmit}
              fieldStyle={{ marginRight: 0 }}
            />
            {showToast && (
        <Toast
          error={showToast.key}
          label={t(showToast.label)}
          onClose={() => {
            setShowToast(null);
          }}
        />
      )}
            </div>
  );
};

export default WmsPhmCreate;
