import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  model?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
