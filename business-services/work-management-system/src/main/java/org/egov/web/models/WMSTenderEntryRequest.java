package org.egov.web.models;

import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import org.egov.common.contract.request.RequestInfo;
import org.springframework.validation.annotation.Validated;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Contract class to receive request. Array of  items are used in case of create, whereas single  item is used for update
 */
@ApiModel(description = "Contract class to receive request. Array of  items are used in case of create, whereas single  item is used for update")
@Validated
@javax.annotation.Generated(value = "org.egov.codegen.SpringBootCodegen", date = "2022-10-25T21:43:19.662+05:30")

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class WMSTenderEntryRequest {
	
	@JsonProperty("RequestInfo")
    private RequestInfo requestInfo = null;

    @JsonProperty("WMSTenderEntryApplication")
    @Valid
    private List<WMSTenderEntryApplication> wmsTenderEntryApplications = null;


    public WMSTenderEntryRequest addTenderEntryApplicationsItem(WMSTenderEntryApplication wmsTenderEntryApplicationsItem) {
        if (this.wmsTenderEntryApplications == null) {
            this.wmsTenderEntryApplications = new ArrayList<>();
        }
        this.wmsTenderEntryApplications.add(wmsTenderEntryApplicationsItem);
        return this;
    }

}
