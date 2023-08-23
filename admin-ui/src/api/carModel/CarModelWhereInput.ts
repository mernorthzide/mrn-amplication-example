import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CarModelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
