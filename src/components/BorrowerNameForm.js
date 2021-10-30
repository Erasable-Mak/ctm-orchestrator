import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import React from "react";
import DropDown from "./DropDown";
import TextFieldComp from "./TextFieldComp";

const BorrowerNameForm = ({ fields, setFields }) => {
  function handleAdd() {
    const values = [...fields];
    values.push({ title: "", fullName: "" });
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
            <DropDown
              id={`${idx}-borrower-name-title-dropdown`}
              items={[
                { id: `${idx}-Mr`, value: "Mr" },
                { id: `${idx}-Mrs`, value: "Mrs" },
              ]}
              value={field.title}
              name="Title"
              setValue={(value, i = idx) => {
                const values = [...fields];
                values[i].title = value;
                setFields(values);
              }}
            />
            <TextFieldComp
              id={`${idx}-borrower-name-fullname-textfield`}
              name="Full Name"
              value={field.fullName}
              isMultilined={false}
              setValue={(value, i = idx) => {
                const values = [...fields];
                values[i].fullName = value;
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
