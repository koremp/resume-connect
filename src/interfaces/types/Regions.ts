const Regions = [
  'Seoul',
  'Gyeonggi',
  'Gwangju',
  'Daegu',
  'Daejeon',
  'Busan',
  'Ulsan',
  'Incheon',
  'Gyeongnam',
  'Gyeongbuk',
  'Jeonnam',
  'Jeonbuk',
  'Chungnam',
  'Chungbuk',
  'Jeju',
  'Gangwon',
  'RepublicOfKorea',
  'Sejong',
  'Asia', 'MiddleEast',
  'NorthAmerica', 'MiddleAmerica',
  'SouthAmerica',
  'Oceania',
  'Africa',
  'Atalantica',
  'Etcetera'
] as const;

export type Regions = typeof Regions[number];