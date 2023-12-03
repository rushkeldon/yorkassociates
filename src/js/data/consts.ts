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
  home = '/',
  ourwork = '/ourwork',
  services = '/services',
  about = '/about',
  bidding = '/bidding',
  contact = '/contact',
  projectArlington = '/ourwork/arlington',
  projectBainbridge = '/ourwork/bainbridge',
  projectBillReynolds = '/ourwork/billreynolds',
  projectEastDouglas = '/ourwork/eastdouglas',
  projectRiverWalk = '/ourwork/riverwalk',
  projectWetlandWasteWater = '/ourwork/wetland',
  servicesMuni = '/services#muni',
  servicesTrans = '/services#trans',
  servicesWater = '/services#water',
  servicesSite = '/services#site',
  servicesSurvey = '/services#survey',
}

export const baseURL : string = 'https://yorkassociates.net/';//`${ window.location.protocol }//${ window.location.host }/`;
