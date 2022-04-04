export enum projects {
  arlington = 'arlington',
  bainbridge = 'bainbridge',
  billreynolds = 'billreynolds',
  eastdouglas = 'eastdouglas',
  riverwalk = 'riverwalk',
  wetland = 'wetland'
}

export enum services {
  muni = 'muni',
  trans = 'trans',
  water = 'water',
  site = 'site',
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
  servicesMuni = '/york/services#muni',
  servicesTrans = '/york/services#trans',
  servicesWater = '/york/services#water',
  servicesSite = '/york/services#site',
  servicesSurvey = '/york/services#survey',
}

export const baseURL : string = 'https://appcloud9.com/';//`${ window.location.protocol }//${ window.location.host }/`;
