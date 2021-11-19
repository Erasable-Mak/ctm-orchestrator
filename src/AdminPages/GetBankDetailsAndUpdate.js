/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { db } from "../firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
  bankaddress: "",
};

function GetBankDetailsAndUpdate({ uid, setFlag }) {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleUpdate = async () => {
    setUpdateLoading(true);
    //updating general details of user
    await setDoc(doc(db, "Users", uid), {
      instituteType: formData.instituteType,
      bankName: formData.bankName,
      bankBranchName: formData.bankBranchName,
      bankaddress: formData.bankaddress,
    });

    setUpdateLoading(false);
  };

  useEffect(() => {
    setData([]);
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
      setData(null);
    };
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={() => setFlag(true)}>
        Go back
      </Button>
      <Box>
        {/* bank information */}
        <Box>
          <Divider style={{ margin: "5px" }} textAlign="left">
            Bank information Update
          </Divider>
          <DropDown
            id="institute-type"
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
            setValue={(value) => setFormData({ ...formData, bankName: value })}
          />
          <TextFieldComp
            id="bank-branch-name"
            name="Branch Name"
            value={formData.bankBranchName}
            setValue={(value) =>
              setFormData({ ...formData, bankBranchName: value })
            }
          />
          <TextFieldComp
            id="bank-address"
            name="Bank Address"
            value={formData.bankaddress}
            setValue={(value) =>
              setFormData({ ...formData, bankaddress: value })
            }
          />
        </Box>
        {/* upload and clear buttons */}
        <Box>
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
        </Box>
      </Box>
    </div>
  );
}

export default GetBankDetailsAndUpdate;
