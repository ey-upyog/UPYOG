import React from "react";
import { LabelFieldPair, CardLabel, TextInput, CardLabelError, DatePicker } from "@egovernments/digit-ui-react-components";
import { useLocation } from "react-router-dom";
import { convertEpochToDate } from "../../components/Utils";

const WmsTEFinancialBidOpenDate = ({ t, config, onSelect, formData = {}, userType, register, errors }) => {
  
  const { pathname: url } = useLocation();
  const inputs = [
    {
      label: t("WMS_TE_COMMON_FINANCIAL_BID_OPEN_DATE"),
      type: "date",
      name: "financial-bid-open-date",
      validation: {
        isRequired: true,
        title: t("WMS_COMMON_START_DATE_INVALID"),
      },
      isMandatory: true,
    },
  ];

  function setValue(value, input) {
    onSelect(config.key, { ...formData[config.key], [input]: value });
  }
  return (
    <div>
      {inputs?.map((input, index) => (
        <React.Fragment key={index}>
          {errors[input.name] && <CardLabelError>{t(input.error)}</CardLabelError>}
          <LabelFieldPair>
            <CardLabel className="card-label-smaller">
              {t(input.label)}
              {input.isMandatory ? " * " : null}
            </CardLabel>
            <div className="field">
              <DatePicker
                key={input.name}
                date={formData && formData[config.key] ? formData[config.key][input.name] : undefined}
                onChange={(e) => setValue(e, input.name)}
                disable={false}
                max={convertEpochToDate(new Date().setFullYear(new Date().getFullYear() - 0))}
                defaultValue={undefined}
                {...input.validation}
          // optionKey="name"

              />
            </div>
          </LabelFieldPair>
        </React.Fragment>
      ))}
    </div>
  );
};

export default WmsTEFinancialBidOpenDate;