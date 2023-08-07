package org.wms.web.controllers;

import java.util.List;

import org.egov.common.contract.response.ResponseInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.wms.service.BirthRegistrationService;
import org.wms.service.SchemeMasterService;
import org.wms.util.ResponseInfoFactory;
import org.wms.web.models.RequestInfoWrapper;
import org.wms.web.models.Scheme;
import org.wms.web.models.SchemeApplicationResponse;
//import org.wms.web.models.SchemeCreationRequest;
//import org.wms.web.models.SchemeCreationResponse;
import org.wms.web.models.SchemeCreationApplication;
//import org.wms.web.models.SchemeResponse;
import org.wms.web.models.WMSSchemeRequest;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

//import jakarta.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ToString
@Controller
@RequestMapping("/wms-services")
public class SchemeApiController {
	
	private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    private SchemeMasterService schemeMasterService;

    @Autowired
    private ResponseInfoFactory responseInfoFactory;

    @Autowired
    public SchemeApiController(ObjectMapper objectMapper, HttpServletRequest request, SchemeMasterService schemeMasterService) {
    	this.objectMapper = objectMapper;
        this.request = request;
        this.schemeMasterService = schemeMasterService;
    }
    @ResponseBody
    @RequestMapping(value="/v1/scheme/_create", method = RequestMethod.POST)
    @ApiOperation(value = "Create New Scheme for WMS")
    public ResponseEntity<SchemeApplicationResponse> v1WmsCreatePost(@ApiParam(value = "Details for the new Scheme Application(s) + RequestInfo meta data." ,required=true )  @Valid @RequestBody WMSSchemeRequest schemeRequest) {
        
    	List<Scheme> applications = schemeMasterService.createSchemeRequest(schemeRequest);
        ResponseInfo responseInfo = responseInfoFactory.createResponseInfoFromRequestInfo(schemeRequest.getRequestInfo(), true);
        //sorRequest.builder().
        SchemeApplicationResponse response = SchemeApplicationResponse.builder().schemeApplications(applications).responseInfo(responseInfo).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    	
    	
    	/*
		 * boolean isSaved = schemeMasterService.createSchemeRequest(schemeRequest);
		 * 
		 * if (isSaved) { return ResponseEntity.ok("Scheme created successfully."); }
		 * else { return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).
		 * body("Failed to create the scheme."); }
		 */
    }

    @RequestMapping(value="/v1/scheme/_search", method = RequestMethod.POST)
    public ResponseEntity<List<Scheme>> v1SchemeSearchPost(@RequestBody String searchCriteria) {
        //List<Scheme> applications = schemeMasterService.searchSchemeApplications(keyword, schemeCreationSearchCriteria);
        List<Scheme> schemes = schemeMasterService.searchSchemeApplications(searchCriteria);

        if (!schemes.isEmpty()) {
            return ResponseEntity.ok(schemes);
        } else {
            return ResponseEntity.notFound().build();
        }
        
        
    }

    @RequestMapping(value="/v1/scheme/_update", method = RequestMethod.POST)
    @ApiOperation(value = "Upadate SOR for WMS")
    //public ResponseEntity<String> v1SchemeUpdatePost(@RequestBody Scheme scheme) {
        //List<SchemeCreationApplication> applications = schemeMasterService.updateBtApplication(birthRegistrationRequest);
    public ResponseEntity<SchemeApplicationResponse> v1SchemeUpdatePost(@ApiParam(value = "Details for the new Scheme(s) + RequestInfo meta data." ,required=true )  @Valid @RequestBody WMSSchemeRequest schemeRequest) {
        List<Scheme> applications = schemeMasterService.updateSchemeMaster(schemeRequest);
        ResponseInfo responseInfo = responseInfoFactory.createResponseInfoFromRequestInfo(schemeRequest.getRequestInfo(), true);
        SchemeApplicationResponse response = SchemeApplicationResponse.builder().schemeApplications(applications).responseInfo(responseInfo).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    	

	/*
	 * @RequestMapping(value="/v1/scheme/_view", method = RequestMethod.GET) public
	 * ResponseEntity<Scheme> v1RegistrationUpdatePost(@RequestParam Long id) {
	 * 
	 * Scheme scheme = schemeMasterService.viewScheme(id);
	 * 
	 * if (scheme != null) { return ResponseEntity.ok(scheme); } else { return
	 * ResponseEntity.notFound().build(); }
	 * 
	 * }
	 */
    
    @RequestMapping(value = "/v1/scheme/_view", method = RequestMethod.GET)
    public ResponseEntity<List<Scheme>> v1SchemeViewGet() {
        List<Scheme> schemes = schemeMasterService.viewScheme();

        if (!schemes.isEmpty()) {
            return ResponseEntity.ok(schemes);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	
	

}
