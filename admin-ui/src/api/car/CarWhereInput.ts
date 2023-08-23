import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CarWhereInput = {
  id?: StringFilter;
  model?: StringNullableFilter;
  name?: StringFilter;
};
