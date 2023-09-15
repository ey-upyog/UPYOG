package org.egov.validator;

import java.util.List;
import java.util.stream.Collectors;

import org.egov.repository.ProjectMasterRepository;
//import org.wms.repository.WMSSORRepository;
import org.egov.tracer.model.CustomException;
import org.egov.web.models.Project;
import org.egov.web.models.ProjectApplicationSearchCriteria;
import org.egov.web.models.SchemeApplicationSearchCriteria;
import org.egov.web.models.WMSProjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;


@Component
public class WMSProjectValidator {
	
	 @Autowired
	    private ProjectMasterRepository repository;

	    public void validateProjectApplication(WMSProjectRequest wmsProjectRequest) {
	    	wmsProjectRequest.getProjectApplications().forEach(application -> {
	            if(ObjectUtils.isEmpty(application.getTenantId()))
	                throw new CustomException("EG_WMSProject_APP_ERR", "tenantId is mandatory for creating Project applications");
	        });
	    }

	    public List<Project> validateApplicationUpdateRequest(WMSProjectRequest wmsProjectRequest) {
	        List<String> ids = wmsProjectRequest.getProjectApplications().stream().map(Project::getProjectId).collect(Collectors.toList());
	        List<Project> projectApplications = repository.updateProject(ProjectApplicationSearchCriteria.builder().projectId(ids).build());
	        if(projectApplications.size() != ids.size())
	            throw new CustomException("APPLICATION_DOES_NOT_EXIST", "One of the Project ids does not exist.");
	        return projectApplications;
	    }

}
