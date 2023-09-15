package org.egov.web.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class WMSContractorApplicationSearchCriteria {

	@JsonProperty("vendor_id")
    private List<Integer> vendorId;
	
	@JsonProperty("vendor_name")
	private List<String> vendorName=null;
	
	@JsonProperty("pfms_vendor_code")
	private List<String> PFMSVendorCode=null;

}
