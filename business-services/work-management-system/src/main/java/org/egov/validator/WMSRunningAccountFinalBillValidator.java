package org.egov.validator;

import java.util.List;
import java.util.stream.Collectors;

import org.egov.repository.WMSContractorRepository;
import org.egov.repository.WMSRunningAccountFinalBillRepository;
import org.egov.repository.WMSSORRepository;
import org.egov.repository.WMSWorkRepository;
import org.egov.tracer.model.CustomException;
import org.egov.web.models.SORApplicationSearchCriteria;
import org.egov.web.models.ScheduleOfRateApplication;
import org.egov.web.models.WMSContractorApplication;
import org.egov.web.models.WMSContractorApplicationSearchCriteria;
import org.egov.web.models.WMSContractorRequest;
import org.egov.web.models.WMSRunningAccountFinalBillApplication;
import org.egov.web.models.WMSRunningAccountFinalBillApplicationSearchCriteria;
import org.egov.web.models.WMSRunningAccountFinalBillRequest;
import org.egov.web.models.WMSSORRequest;
import org.egov.web.models.WMSWorkApplication;
import org.egov.web.models.WMSWorkApplicationSearchCriteria;
import org.egov.web.models.WMSWorkRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;


@Component
public class WMSRunningAccountFinalBillValidator {
	
	 @Autowired
	    private WMSRunningAccountFinalBillRepository repository;

	    public void validateRunningAccountFinalBillApplication(WMSRunningAccountFinalBillRequest wmsRunningAccountFinalBillRequest) {
	    	wmsRunningAccountFinalBillRequest.getWmsRunningAccountFinalBillApplications().forEach(application -> {
	            if(ObjectUtils.isEmpty(application.getTenantId()))
	                throw new CustomException("EG_WMS_APP_ERR", "tenantId is mandatory for creating Running Account Final Bill applications");
	        });
	    }

		public List<WMSRunningAccountFinalBillApplication> validateApplicationUpdateRequest(
				WMSRunningAccountFinalBillRequest runningAccountFinalBillRequest) {
			List<String> ids = runningAccountFinalBillRequest.getWmsRunningAccountFinalBillApplications().stream().map(WMSRunningAccountFinalBillApplication::getRunningAccountId).collect(Collectors.toList());
	        List<WMSRunningAccountFinalBillApplication> runningAccountFinalBillApplications = repository.getApplications(WMSRunningAccountFinalBillApplicationSearchCriteria.builder().runningAccountId(ids).build());
	        if(runningAccountFinalBillApplications.size() != ids.size())
	            throw new CustomException("APPLICATION_DOES_NOT_EXIST", "One of the Running Account Final Bill ids does not exist.");
	        return runningAccountFinalBillApplications;
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
