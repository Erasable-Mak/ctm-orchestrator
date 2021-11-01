import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import React from "react";
import TextFieldComp from "./TextFieldComp";

const BorrowerNameForm = ({ fields, setFields }) => {
  function handleAdd() {
    const values = [...fields];
    values.push("");
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <>
      {fields.map((field, idx) => {
        return (
          <div key={idx}>
            <Stack direction="row">
              <TextFieldComp
                id={`${idx}-contact-no-textfield`}
                name="Contact No"
                value={field}
                isMultilined={false}
                setValue={(value, i = idx) => {
                  const values = [...fields];
                  values[i] = value;
                  setFields(values);
                }}
              />
              <Button
                variant="text"
                color="error"
                onClick={() => handleRemove(idx)}
              >
                <DeleteIcon />
              </Button>
            </Stack>
          </div>
        );
      })}
      <Stack>
        <Button variant="text" onClick={() => handleAdd()}>
          <Icon color="primary">add_circle</Icon>
        </Button>
      </Stack>
    </>
  );
};

export default BorrowerNameForm;
