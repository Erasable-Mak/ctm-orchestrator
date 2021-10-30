import DeleteIcon from "@mui/icons-material/Delete";
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
          </div>
        );
      })}
      <Button variant="text" onClick={() => handleAdd()}>
        <Icon color="primary">add_circle</Icon>
      </Button>
    </>
  );
};

export default BorrowerNameForm;
