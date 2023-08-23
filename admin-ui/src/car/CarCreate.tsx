import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Model" source="model" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
