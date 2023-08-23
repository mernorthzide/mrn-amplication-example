import { CarModelWhereInput } from "./CarModelWhereInput";
import { CarModelOrderByInput } from "./CarModelOrderByInput";

export type CarModelFindManyArgs = {
  where?: CarModelWhereInput;
  orderBy?: Array<CarModelOrderByInput>;
  skip?: number;
  take?: number;
};
