export enum projects {
  arlington = 'arlington',
  bainbridge = 'bainbridge',
  billreynolds = 'billreynolds',
  eastdouglas = 'eastdouglas',
  riverwalk = 'riverwalk',
  wetland = 'wetland'
}

export enum services {
  municipal = 'municipal',
  transportation = 'transportation',
  waterresource = 'waterresource',
  sitedesign = 'sitedesign',
  survey = 'survey'
}

export enum routes {
  home = '/york/',
  ourwork = '/york/ourwork',
  services = '/york/services',
  about = '/york/about',
  bidding = '/york/bidding',
  contact = '/york/contact',
  projectArlington = '/york/ourwork/arlington',
  projectBainbridge = '/york/ourwork/bainbridge',
  projectBillReynolds = '/york/ourwork/billreynolds',
  projectEastDouglas = '/york/ourwork/eastdouglas',
  projectRiverWalk = '/york/ourwork/riverwalk',
  projectWetlandWasteWater = '/york/ourwork/wetland',
  serviceMunicipal = '/york/services',
  serviceTransportation = '/york/services',
  serviceWaterResource = '/york/services',
  serviceSiteDesign = '/york/services',
  serviceSurvey = '/york/services'
}

export const baseURL : string = 'https://appcloud9.com/';//`${ window.location.protocol }//${ window.location.host }/`;
