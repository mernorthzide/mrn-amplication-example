import { CarModel as TCarModel } from "../api/carModel/CarModel";

export const CARMODEL_TITLE_FIELD = "name";

export const CarModelTitle = (record: TCarModel): string => {
  return record.name || String(record.id);
};
