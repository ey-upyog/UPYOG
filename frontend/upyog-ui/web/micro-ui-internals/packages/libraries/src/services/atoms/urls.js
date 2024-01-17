const Urls = {
  MDMS: `/egov-mdms-service/v1/_search`,
  WorkFlow: `/egov-workflow-v2/egov-wf/businessservice/_search`,
  WorkFlowProcessSearch: `/egov-workflow-v2/egov-wf/process/_search`,
  localization: `/localization/messages/v1/_search`,
  location: {
    localities: `/egov-location/location/v11/boundarys/_search?hierarchyTypeCode=ADMIN&boundaryType=Locality`,
    revenue_localities: `/egov-location/location/v11/boundarys/_search?hierarchyTypeCode=REVENUE&boundaryType=Locality`,
  },

  pgr_search: `/pgr-services/v2/request/_search`,
  pgr_update: `/pgr-services/v2/request/_update`,
  filter_data: `https://run.mocky.io/v3/597a50a0-90e5-4a45-b82e-8a2186b760bd`,
  FileStore: "/filestore/v1/files",

  FileFetch: "/filestore/v1/files/url",
  PGR_Create: `/pgr-services/v2/request/_create`,
  pgr_count: `/pgr-services/v2/request/_count`,

  OTP_Send: "/user-otp/v1/_send",
  Authenticate: "/user/oauth/token",
  RegisterUser: "/user/citizen/_create",
  ChangePassword: "/user/password/nologin/_update",
  ChangePassword1: "/user/password/_update",
  UserProfileUpdate: "/user/profile/_update",
  EmployeeSearch: "/egov-hrms/employees/_search",

  InboxSearch: "/inbox/v1/_search",

  UserSearch: "/user/_search",
  UserLogout: "/user/_logout",

  Shortener: "/egov-url-shortening/shortener",

  fsm: {
    search: "/fsm/v1/_search",
    create: "/fsm/v1/_create",
    update: "/fsm/v1/_update",
    vendorSearch: "/vendor/v1/_search",
    vehicleSearch: "/vehicle/v1/_search",
    audit: "/fsm/v1/_audit",
    vehicleTripSearch: "/vehicle/trip/v1/_search",
    billingSlabSearch: "/fsm-calculator/v1/billingSlab/_search",
    vehilceUpdate: "/vehicle/trip/v1/_update",
    createVendor: "/vendor/v1/_create",
    updateVendor: "/vendor/v1/_update",
    createVehicle: "/vehicle/v1/_create",
    updateVehicle: "/vehicle/v1/_update",
    driverSearch: "/vendor/driver/v1/_search",
    createDriver: "/vendor/driver/v1/_create",
    updateDriver: "/vendor/driver/v1/_update",
    vehicleTripCreate: "/vehicle/trip/v1/_create",
    advanceBalanceCalculate: "/fsm-calculator/v1/_advancebalancecalculate",
  },

  payment: {
    fetch_bill: "/billing-service/bill/v2/_fetchbill",
    demandSearch: "/billing-service/demand/_search",
    create_reciept: "/collection-services/payments/_create",
    print_reciept: "/collection-services/payments",
    generate_pdf: "/pdf-service/v1/_create",
    create_citizen_reciept: "/pg-service/transaction/v1/_create",
    update_citizen_reciept: "/pg-service/transaction/v1/_update",
    search_bill: "/billing-service/bill/v2/_search",
    reciept_search: "/collection-services/payments/:buisnessService/_search",
    obps_Reciept_Search: "/collection-services/payments/_search",
    billAmendmentSearch: "/billing-service/amendment/_search",
    getBulkPdfRecordsDetails: "/pdf-service/v1/_getBulkPdfRecordsDetails",
  },

  pt: {
    fectch_property: "/property-services/property/_search",
    fetch_payment_details: "/billing-service/bill/v2/_fetchbill",
    create: "/property-services/property/_create",
    search: "/property-services/property/_search",
    update: "/property-services/property/_update",
    pt_calculation_estimate: "/pt-calculator-v2/propertytax/v2/_estimate",
    assessment_create: "/property-services/assessment/_create",
    assessment_search: "/property-services/assessment/_search",
    payment_search: "/collection-services/payments/PT/_search",
    pt_calculate_mutation: "/pt-calculator-v2/propertytax/mutation/_calculate",
    cfcreate: "/service-request/service/v1/_create",
    cfdefinitionsearch: "/service-request/service/definition/v1/_search",
    cfsearch: "/service-request/service/v1/_search",
  },

  dss: {
    dashboardConfig: "/dashboard-analytics/dashboard/getDashboardConfig",
    getCharts: "/dashboard-analytics/dashboard/getChartV2",
  },

  mcollect: {
    search: "/echallan-services/eChallan/v1/_search",
    create: "/echallan-services/eChallan/v1/_create?",
    fetch_bill: "/billing-service/bill/v2/_fetchbill?",
    search_bill: "/egov-searcher/bill-genie/mcollectbills/_get",
    search_bill_pt: "/egov-searcher/bill-genie/billswithaddranduser/_get",
    update: "/echallan-services/eChallan/v1/_update",
    download_pdf: "/egov-pdf/download/UC/mcollect-challan",
    receipt_download: "/egov-pdf/download/PAYMENT/consolidatedreceipt",
    bill_download: "/egov-pdf/download/BILL/consolidatedbill",
    count: "/echallan-services/eChallan/v1/_count",
  },
  hrms: {
    search: "/egov-hrms/employees/_search",
    count: "/egov-hrms/employees/_count",
    create: "/egov-hrms/employees/_create",
    update: "/egov-hrms/employees/_update",
  },
  tl: {
    create: "/tl-services/v1/_create",
    search: "/tl-services/v1/_search",
    fetch_payment_details: "/billing-service/bill/v2/_fetchbill",
    download_pdf: "/egov-pdf/download/TL/",
    update: "/tl-services/v1/_update",
    billingslab: "/tl-calculator/billingslab/_search",
  },
  receipts: {
    receipt_download: "/egov-pdf/download/PAYMENT/consolidatedreceipt",
    payments: "/collection-services/payments",
    count: "/egov-hrms/employees/_count",
  },
  obps: {
    scrutinyDetails: "/edcr/rest/dcr/scrutinydetails",
    comparisionReport: "/edcr/rest/dcr/occomparison",
    create: "/bpa-services/v1/bpa/_create",
    nocSearch: "/noc-services/v1/noc/_search",
    updateNOC: "/noc-services/v1/noc/_update",
    update: "/bpa-services/v1/bpa/_update",
    bpaSearch: "/bpa-services/v1/bpa/_search",
    bpaRegSearch: "/tl-services/v1/BPAREG/_search",
    bpaRegCreate: "/tl-services/v1/BPAREG/_create",
    bpaRegGetBill: "/tl-calculator/v1/BPAREG/_getbill",
    bpaRegUpdate: "/tl-services/v1/BPAREG/_update",
    receipt_download: "/egov-pdf/download/PAYMENT/consolidatedreceipt",
    edcrreportdownload: "/bpa-services/v1/bpa/_permitorderedcr",
    getSearchDetails: "/inbox/v1/dss/_search",
  },

  edcr: {
    create: "/edcr/rest/dcr/scrutinize",
  },

  events: {
    search: "/egov-user-event/v1/events/_search",
    update: "/egov-user-event/v1/events/lat/_update",
    updateEvent: "/egov-user-event/v1/events/_update",
    updateEventCDG: "/egov-user-event/v1/events/lat/_update",
    count: "/egov-user-event/v1/events/notifications/_count",
    create: "/egov-user-event/v1/events/_create",
  },

  ws: {
    water_create: "/ws-services/wc/_create",
    sewarage_create: "/sw-services/swc/_create",
    water_search: "/ws-services/wc/_search",
    sewarage_search: "/sw-services/swc/_search",
    water_update: "/ws-services/wc/_update",
    sewarage_update: "/sw-services/swc/_update",
    ws_calculation_estimate: "/ws-calculator/waterCalculator/_estimate",
    sw_calculation_estimate: "/sw-calculator/sewerageCalculator/_estimate",
    ws_connection_search: "/ws-calculator/meterConnection/_search",
    sw_payment_search: "/collection-services/payments/SW/_search",
    ws_payment_search: "/collection-services/payments/WS/_search",
    billAmendmentCreate: "/billing-service/amendment/_create",
    billAmendmentUpdate: "/billing-service/amendment/_update",
    ws_meter_conncetion_create: "/ws-calculator/meterConnection/_create",
    sw_meter_conncetion_create: "/sw-calculator/meterConnection/_create",
    wns_group_bill: "/egov-pdf/download/WNS/wnsgroupbill",
    cancel_group_bill: "/pdf-service/v1/_cancelProcess",
    wns_generate_pdf: "/egov-pdf/download/WNS/wnsbill",
    water_applyAdhocTax: "/ws-calculator/waterCalculator/_applyAdhocTax",
    sewerage_applyAdhocTax: "/sw-calculator/sewerageCalculator/_applyAdhocTax",
    getSearchDetails: "/inbox/v1/dss/_search",
    disconnection_notice: "/pdf-service/v1/_createnosave",
  },

  engagement: {
    document: {
      search: "/egov-document-uploader/egov-du/document/_search",
      create: "/egov-document-uploader/egov-du/document/_create",
      delete: "/egov-document-uploader/egov-du/document/_delete",
      update: "/egov-document-uploader/egov-du/document/_update",
    },
    surveys: {
      create: "/egov-survey-services/egov-ss/survey/_create",
      update: "/egov-survey-services/egov-ss/survey/_update",
      search: "/egov-survey-services/egov-ss/survey/_search",
      delete: "/egov-survey-services/egov-ss/survey/_delete",
      submitResponse: "/egov-survey-services/egov-ss/survey/response/_submit",
      showResults: "/egov-survey-services/egov-ss/survey/response/_results",
    },
  },

  noc: {
    nocSearch: "/noc-services/v1/noc/_search",
  },
  reports: {
    reportSearch: "/report/",
  },
  bills: {
    cancelBill: "/billing-service/bill/v2/_cancelbill",
  },
wms:{
  SORApplications:{
    create: "https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SORApplications",
    update:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SORApplications:id",
    get:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SORApplications/:id",
    search:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SORApplications",
    delete:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SORApplications:id"
  },
  PRJApplications:{
    create: "https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/PRJApplications",
    update:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/PRJApplications:id",
    get:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/PRJApplications",
    search:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/PRJApplications",
    delete:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/PRJApplications:id"
  }, 
  SCHApplications:{
    create: "https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SCHApplications",
    update:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SCHApplications:id",
    get:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SCHApplications",
    search:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SCHApplications",
    delete:"https://64c200dcfa35860baea10c66.mockapi.io/wms/work-management-service/v1/SCHApplications:id"
  },
  PHMApplications:{
    create: "https://64f5834d2b07270f705d4f91.mockapi.io/PHMApplications",
    update:"https://64f5834d2b07270f705d4f91.mockapi.io/PHMApplications",
    get:"https://64f5834d2b07270f705d4f91.mockapi.io/PHMApplications/:id",
    search:"https://64f5834d2b07270f705d4f91.mockapi.io/PHMApplications",      
    count:"https://64f5834d2b07270f705d4f91.mockapi.io/PHMApplications",
  },
  MBApplications:{
    create:"https://658bef9a859b3491d3f51ac4.mockapi.io/MBApplications",
    update:"https://658bef9a859b3491d3f51ac4.mockapi.io/MBApplications",
    get:"https://658bef9a859b3491d3f51ac4.mockapi.io/MBApplications",
    search:"https://658bef9a859b3491d3f51ac4.mockapi.io/MBApplications",      
    count:"https://658bef9a859b3491d3f51ac4.mockapi.io/MBApplications",
  },

    PMAApplications: {
      create: "https://64f5834d2b07270f705d4f91.mockapi.io/PMAApplications",
      update: "https://64f5834d2b07270f705d4f91.mockapi.io/PMAApplications",
      get: "https://64f5834d2b07270f705d4f91.mockapi.io/PMAApplications/:id",
      search: "https://64f5834d2b07270f705d4f91.mockapi.io/PMAApplications",
      count: "https://64f5834d2b07270f705d4f91.mockapi.io/PMAApplications",
    },

    DRApplications: {
      create: "https://64f5834d2b07270f705d4f91.mockapi.io/DRApplications",
      update: "https://64f5834d2b07270f705d4f91.mockapi.io/DRApplications",
      get: "https://64f5834d2b07270f705d4f91.mockapi.io/DRApplications/:id",
      search: "https://64f5834d2b07270f705d4f91.mockapi.io/DRApplications",
      count: "https://64f5834d2b07270f705d4f91.mockapi.io/DRApplications",
    },
    PRApplications: {
      create: "https://658bef9a859b3491d3f51ac4.mockapi.io/PRApplications",
      update: "https://658bef9a859b3491d3f51ac4.mockapi.io/PRApplications",
      get: "https://658bef9a859b3491d3f51ac4.mockapi.io/PRApplications/:id",
      search: "https://658bef9a859b3491d3f51ac4.mockapi.io/PRApplications",
      count: "https://658bef9a859b3491d3f51ac4.mockapi.io/PRApplications",
    },
    WSRApplications: {
      create: "https://658bef9a859b3491d3f51ac4.mockapi.io/WSRApplications",
      update: "https://658bef9a859b3491d3f51ac4.mockapi.io/WSRApplications",
      get: "https://658bef9a859b3491d3f51ac4.mockapi.io/WSRApplications/:id",
      search: "https://658bef9a859b3491d3f51ac4.mockapi.io/WSRApplications",
      count: "https://658bef9a859b3491d3f51ac4.mockapi.io/WSRApplications",
    },
    ContractorMaster: {
      create: "/wms/wms-services/v1/contractor/_create",
      search: "/wms/wms-services/v1/contractor/_search",
      update: "/wms/wms-services/v1/contractor/_update",
      count: "https://62f0e3e5e2bca93cd23f2ada.mockapi.io/birth",
      get: "/wms/wms-services/v1/contractor/_view",
      mdms: "http://localhost:5000/vendorType",
      mdmsBankGet: "/wms/wms-services/v1/bank/_view",
      mdmsBankUpdate: "/wms/wms-services/v1/bank/_update",
      mdmsBankCreate: "/wms/wms-services/v1/bank/_create",
      // mdmsSubType:"/wms/wms-services/v1/bank/",
      mdmsSubTypeGet: "/wms/wms-services/v1/cstype/_view",
      mdmsSubTypeUpdate: "/wms/wms-services/v1/cstype/_update",
      mdmsSubTypeCreate: "/wms/wms-services/v1/cstype/_create",
      mdmsTypeGet: "/wms/wms-services/v1/vendor/_view",
      mdmsTypeUpdate: "/wms/wms-services/v1/vendor/_update",
      mdmsTypeCreate: "/wms/wms-services/v1/vendor/_create",

      mdmsVenderClassGet: "/wms/wms-services/v1/vendorc/_view",
      mdmsVenderClassUpdate: "/wms/wms-services/v1/vendorc/_update",
      mdmsVenderClassCreate: "/wms/wms-services/v1/vendorc/_create",

      mdmsAccountHeadGet: "/wms/wms-services/v1/paccounth/_view",
      mdmsAccountHeadUpdate: "/wms/wms-services/v1/paccounth/_update",
      mdmsAccountHeadCreate: "/wms/wms-services/v1/paccounth/_create",

      mdmsFunctionAppGet: "/wms/wms-services/v1/func/_view",
      mdmsFunctionAppUpdate: "/wms/wms-services/v1/func/_update",
      mdmsFunctionAppCreate: "/wms/wms-services/v1/func/_create",
    },
    Tender_Entry: {
      create: "/wms/wms-services/v1/tenderentry/_create",
      search: "/wms/wms-services/v1/tenderentry/_search",
      update: "/wms/wms-services/v1/tenderentry/_update",
      get: "/wms/wms-services/v1/tenderentry/_view",

      mdmsdepartmentGet: "/wms/wms-services/v1/dept/_view",
      mdmsdepartmentUpdate: "/wms/wms-services/v1/dept/_update",
      mdmsdepartmentCreate: "/wms/wms-services/v1/dept/_create",

      mdmsTCategoryGet: "/wms/wms-services/v1/tcategory/_view",
      mdmsTCategoryUpdate: "/wms/wms-services/v1/tcategory/_update",
      mdmsTCategoryCreate: "/wms/wms-services/v1/tcategory/_create",

      ProjectName: "/wms/wms-services/v1/project/_view",
    },
    Contractor_Agreement: {
      create: "/wms/wms-services/v1/contractagreement/_create",

      search: "/wms/wms-services/v1/contractagreement/_search",
      update: "/wms/wms-services/v1/contractagreement/_update",
      get: "/wms/wms-services/v1/contractagreement/_view",
      createFake: "http://localhost:5000/CASteper",
      // createFake: "http://localhost:5000/WMSTenderEntryApplication",
      // getFake:"http://localhost:5000/CASteper",
      // createFake:"/CASteper",
      // getFake:"/CASteper",
    },

    Running_Account_Final_Bill: {
      getPreviousBill: "http://localhost:5000/previousBill"
    }
  },
  access_control: "/access/v1/actions/mdms/_get",
  billgenie: "/egov-searcher",
  audit: "/inbox/v1/elastic/_search",
};
export default Urls;
