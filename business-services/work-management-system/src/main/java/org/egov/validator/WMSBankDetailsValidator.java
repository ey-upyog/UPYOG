package org.egov.validator;

import java.util.List;
import java.util.stream.Collectors;

import org.egov.repository.WMSBankDetailsRepository;
import org.egov.repository.WMSContractorRepository;
import org.egov.repository.WMSSORRepository;
import org.egov.repository.WMSWorkRepository;
import org.egov.tracer.model.CustomException;
import org.egov.web.models.SORApplicationSearchCriteria;
import org.egov.web.models.ScheduleOfRateApplication;
import org.egov.web.models.Scheme;
import org.egov.web.models.SchemeApplicationSearchCriteria;
import org.egov.web.models.WMSBankDetailsApplication;
import org.egov.web.models.WMSBankDetailsApplicationSearchCriteria;
import org.egov.web.models.WMSBankDetailsRequest;
import org.egov.web.models.WMSContractorApplication;
import org.egov.web.models.WMSContractorApplicationSearchCriteria;
import org.egov.web.models.WMSContractorRequest;
import org.egov.web.models.WMSSORRequest;
import org.egov.web.models.WMSWorkApplication;
import org.egov.web.models.WMSWorkApplicationSearchCriteria;
import org.egov.web.models.WMSWorkRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;


@Component
public class WMSBankDetailsValidator {
	
	 @Autowired
	    private WMSBankDetailsRepository repository;

	    public void validateBankDetailsApplication(WMSBankDetailsRequest wmsBankDetailsRequest) {
	    	wmsBankDetailsRequest.getWmsBankDetailsApplications().forEach(application -> {
	            if(ObjectUtils.isEmpty(application.getTenantId()))
	                throw new CustomException("EG_WMS_APP_ERR", "tenantId is mandatory for creating BankDetails applications");
	        });
	    }

		public List<WMSBankDetailsApplication> validateApplicationUpdateRequest(WMSBankDetailsRequest bankDetailsRequest) {
			List<String> ids = bankDetailsRequest.getWmsBankDetailsApplications().stream().map(WMSBankDetailsApplication::getBankId).collect(Collectors.toList());
	        List<WMSBankDetailsApplication> bankDetailsApplications = repository.getApplications(WMSBankDetailsApplicationSearchCriteria.builder().bankId(ids).build());
	        if(bankDetailsApplications.size() != ids.size())
	            throw new CustomException("APPLICATION_DOES_NOT_EXIST", "One of the BankDetails ids does not exist.");
	        return bankDetailsApplications;
		}

		/*
		 * public List<WMSWorkApplication>
		 * validateApplicationUpdateRequest(WMSWorkRequest wmsWorkRequest) {
		 * List<Integer> ids =
		 * wmsWorkRequest.getWmsWorkApplications().stream().map(WMSWorkApplication::
		 * getWorkId).collect(Collectors.toList()); List<WMSWorkApplication>
		 * wmsWorkApplications =
		 * repository.getApplications(WMSWorkApplicationSearchCriteria.builder().workId(
		 * ids).build()); if(wmsWorkApplications.size() != ids.size()) throw new
		 * CustomException("APPLICATION_DOES_NOT_EXIST",
		 * "One of the Work ids does not exist."); return wmsWorkApplications; }
		 */

}
