export type DataItem = {
  Cur_ID: number;
  Cur_Abbreviation: string;
  Cur_Scale: number;
  Cur_Name: string;
  Cur_OfficialRate: number;
};

export type DataArray = Array<DataItem>;

export const DATA: DataArray = [
  {
    Cur_ID: 431,
    Cur_Abbreviation: 'USD',
    Cur_Scale: 1,
    Cur_Name: 'Доллар США',
    Cur_OfficialRate: 2.5397,
  },
  {
    Cur_ID: 451,
    Cur_Abbreviation: 'EUR',
    Cur_Scale: 1,
    Cur_Name: 'Евро',
    Cur_OfficialRate: 2.8732,
  },
  {
    Cur_ID: 449,
    Cur_Abbreviation: 'UAH',
    Cur_Scale: 100,
    Cur_Name: 'Гривен',
    Cur_OfficialRate: 9.3251,
  },
  {
    Cur_ID: 456,
    Cur_Abbreviation: 'RUB',
    Cur_Scale: 100,
    Cur_Name: 'Российских рублей',
    Cur_OfficialRate: 3.4356,
  },
  {
    Cur_ID: 462,
    Cur_Abbreviation: 'CNY',
    Cur_Scale: 10,
    Cur_Name: 'Китайских юаней',
    Cur_OfficialRate: 3.986,
  },
  {
    Cur_ID: 448,
    Cur_Abbreviation: 'BYN',
    Cur_Scale: 1,
    Cur_Name: 'Белорусский рубль',
    Cur_OfficialRate: 1,
  },
];
