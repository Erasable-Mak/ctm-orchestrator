/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { db } from "../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import {
  maritalStatusOptions,
  typeofUserOptions,
  religionOptions,
  stateOptions,
} from "../DropDownOptions/options";

import { Box, Divider, Stack, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import DropDown from "../components/DropDown";
import TextFieldComp from "../components/TextFieldComp";
import EmployeeInfoForm from "../components/EmployeeInfoForm";

const instituteType = [
  {
    id: "NBNR",
    value: "NBNR",
  },
  {
    id: "CF",
    value: "CF",
  },
  {
    id: "APF",
    value: "APF",
  },
];

const initialState = {
  instituteType: "",
  bankName: "",
  bankBranchName: "",
  branchType: "",
  bankaddress: "",
  bankemail: "",
  employeeInfo: [],
};

function GetBankDetailsAndUpdate({ uid, setFlag }) {
  // const [data, setData] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleUpdate = async () => {
    setUpdateLoading(true);
    //updating general details of user
    try {
      await setDoc(doc(db, "Banks", uid), formData);
      toast.success("Bank Details Updated Successfully!", { autoClose: 5000 });
    } catch (err) {
      toast.error(err, { autoClose: 5000 });
    }

    setUpdateLoading(false);
  };

  useEffect(() => {
    setFormData(initialState);
    try {
      const getdata = async () => {
        //here we get the data from actual document
        console.log("get data called");
        const docRef = doc(db, "Banks", uid);
        const docSnap = await getDoc(docRef);
        setFormData((prev) => ({ ...prev, ...docSnap.data() }));
      };

      getdata();
    } catch (err) {
      console.log(err);
    }
    return () => {
      setFormData(initialState);
    };
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={() => setFlag(true)}>
        Go back
      </Button>
      <Box noValidate sx={{ mt: 1 }}>
        <div>
          <Divider textAlign="left">Bank Information</Divider>
          <DropDown
            id="institute-typr"
            items={instituteType}
            value={formData.instituteType}
            name="Institute Type"
            setValue={(value) =>
              setFormData({ ...formData, instituteType: value })
            }
          />
          <TextFieldComp
            id="bank-name"
            name="Bank Name"
            value={formData.bankName}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, bankName: value })}
          />
          <TextFieldComp
            id="bank-branch-name"
            name="Branch Name"
            value={formData.bankBranchName}
            isMultilined={false}
            setValue={(value) =>
              setFormData({ ...formData, bankBranchName: value })
            }
          />
          <TextFieldComp
            id="branch-type"
            name="Branch Type"
            value={formData.branchType}
            isMultilined={false}
            setValue={(value) =>
              setFormData({ ...formData, branchType: value })
            }
          />
          <TextFieldComp
            id="bank-address"
            name="Bank Address"
            value={formData.bankaddress}
            isMultilined={false}
            setValue={(value) =>
              setFormData({ ...formData, bankaddress: value })
            }
          />
          <TextFieldComp
            id="bank-email"
            name="Bank Email"
            value={formData.bankemail}
            isMultilined={false}
            setValue={(value) => setFormData({ ...formData, bankemail: value })}
          />
          <Divider textAlign="left">Employee Information</Divider>
          <EmployeeInfoForm
            fields={formData.employeeInfo}
            setFields={(value) =>
              setFormData({ ...formData, employeeInfo: value })
            }
          />
          <Divider style={{ margin: "5px" }}></Divider>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            style={{ margin: "20px" }}
          >
            <LoadingButton
              onClick={handleUpdate}
              loading={updateLoading}
              loadingIndicator="wait..."
              variant="contained"
              color="success"
            >
              Update
            </LoadingButton>
          </Stack>
        </div>
      </Box>
    </div>
  );
}

export default GetBankDetailsAndUpdate;
