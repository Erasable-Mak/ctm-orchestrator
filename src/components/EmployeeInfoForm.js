import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import React from "react";
import TextFieldComp from "./TextFieldComp";

const EmployeeInfoForm = ({ fields, setFields }) => {
  function handleAdd() {
    const values = [...fields];
    values.push({ empName: "", empEmail: "", empPhoneNo: "" });
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
                id={`${idx}-emp-name`}
                name="Employee Name"
                value={field.empName}
                isMultilined={false}
                setValue={(value, i = idx) => {
                  const values = [...fields];
                  values[i].empName = value;
                  setFields(values);
                }}
              />
              <TextFieldComp
                id={`${idx}-emp-email`}
                name="Employee Email"
                value={field.empEmail}
                isMultilined={false}
                setValue={(value, i = idx) => {
                  const values = [...fields];
                  values[i].empEmail = value;
                  setFields(values);
                }}
              />
              <TextFieldComp
                id={`${idx}-emp-phone-no`}
                name="Phone No"
                value={field.empPhoneNo}
                setValue={(value, i = idx) => {
                  const values = [...fields];
                  values[i].empPhoneNo = value;
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

export default EmployeeInfoForm;
