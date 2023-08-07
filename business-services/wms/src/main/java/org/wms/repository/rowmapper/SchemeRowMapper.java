package org.wms.repository.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;
import org.wms.web.models.Scheme;

@Component
public class SchemeRowMapper implements ResultSetExtractor<List<Scheme>> {
    public List<Scheme> extractData(ResultSet rs) throws SQLException, DataAccessException {
        Map<Long,Scheme> schemeApplicationMap = new LinkedHashMap<>();

        while (rs.next()){
            long schemeId = rs.getLong("sSchemeId");
            Scheme schemeApplication = schemeApplicationMap.get(schemeId);

            if(schemeApplication == null) {

                Date lastModifiedTime = rs.getDate("sSchemeStartDate");
                if (rs.wasNull()) {
                    lastModifiedTime = null;
                }
                schemeApplication = Scheme.builder()
                        .id((long) rs.getLong("sSchemeId"))
                        .schemeNameEn(rs.getString("sSchemeName"))
                        .schemeNameReg(rs.getString("ssorName"))
                        .startDate(rs.getString("sSchemeStartDate"))
                        .endDate(rs.getString("sSchemeEndDate"))
                        .sourceOfFund(rs.getString("sSchemeSourceOfFund"))
                        .fund(rs.getString("sSchemeFund"))
                        .schemeDescription(rs.getString("sSchemeDescription"))
                        .uploadDocument(rs.getString("sSchemeUploadDocument"))
                        .build();
            }
            
            schemeApplicationMap.put(schemeId, schemeApplication);
        }
        return new ArrayList<>(schemeApplicationMap.values());
    }

}
