import React from "react";
import { Table } from "@egovernments/digit-ui-react-components";

const ApplicationTable = ({
  t,
  data,
  columns,
  globalSearch,
  onSearch,
  getCellProps,
  pageSizeLimit,
  totalRecords,
  currentPage,
  onNextPage,
  onPrevPage,
  onPageSizeChange,
  showCheckbox

}) => {
  return (
    <Table
      t={t}
      data={data}
      columns={columns}
      onSearch={onSearch}
      globalSearch={globalSearch}
      manualGlobalFilter={false}
      manualPagination={false}
      pageSizeLimit={pageSizeLimit}
      getCellProps={getCellProps}
      totalRecords={totalRecords}
      currentPage={currentPage}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onPageSizeChange={onPageSizeChange}
      showCheckbox={showCheckbox}

    />
  )
}
export default ApplicationTable;
