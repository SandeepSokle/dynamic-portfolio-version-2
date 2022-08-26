import axios, { Axios } from "axios";
// const Puppeteer = require("puppeteer");
import { getDataActionCreater } from "../../Redux/getDataActionCreater";
import {
  loaderEndActionCreater,
  loaderStartActionCreater,
} from "../../Redux/Loader/LoaderActionCreator";
import { openSnackbar } from "../../Redux/Snackbar/snackbarStore";
const uuid = require("react-uuid");
const {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} = require("firebase/storage");


export const handleUpdateProfile = async (props) => {
  const { id, data, dispatch, userData,  selectedVal } =
    props;
  //   const dispatch = useDispatch();
  // console.log(data);
  let secret = { userData };
  // console.log("Update Hit!!", props);
  // `http://localhost:8080/` + `portfolio/update/${id}`,
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.put(
      `http://localhost:8080/` + `portfolio/update`,
      { ...data, secret: { userData }, id, selectedVal }
    );
    // console.log(response.data);

    dispatch(getDataActionCreater(userData));
    dispatch(openSnackbar("Details Updated Successfully", "success"));
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(loaderEndActionCreater());
    dispatch(openSnackbar(err.response.data.message, "error"));
  }
};

export const handleSave = async (props) => {
  const { selectedTab, selectedVal, data, dispatch, userData } =
    props;
  //   const dispatch = useDispatch();
  // console.log("Save Hit!!");
  // http://localhost:8080/
  // "http://localhost:8080/" + "portfolio/save",
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.post(
      "http://localhost:8080/" + "portfolio/save",
      {
        data: data,
        id: "1234587678",
        module: selectedTab.toLowerCase(),
        type: selectedVal.toLowerCase(),
        secret: { userData },
      }
    );
    // console.log(response.data);
    dispatch(openSnackbar("Details Saved Successfully", "success"));
    dispatch(getDataActionCreater(userData));
  } catch (err) {
    // console.log(err.response.data.message);
    dispatch(loaderEndActionCreater());
    dispatch(openSnackbar(err.response.data.message, "error"));
  }
};

export const handleDelete = async (props) => {
  const { id, dispatch, userData } = props;
  //   const dispatch = useDispatch();
  // console.log("Delete Hit!!", id);
  const secret = { userData };
  // "http://localhost:8080/" + `portfolio/delete/${id}`,
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.put(
      "http://localhost:8080/" + `portfolio/delete/${id}`,
      {
        secret,
      }
    );
    // console.log(response.data);
    dispatch(getDataActionCreater(userData));
    dispatch(openSnackbar("Details Successfully Deleted", "success"));

  } catch (err) {
    // console.log(err.response.data.message);
    dispatch(getDataActionCreater(userData));
    dispatch(loaderEndActionCreater());
    dispatch(openSnackbar(err.response.data.message, "error"));
  }
};

export const handleUpdate = async (props) => {
  const { id, data, dispatch, userData } = props;
  //   const dispatch = useDispatch();
  // console.log(data);
  let secret = { userData };
  // console.log("Update Hit!!", props);
  // `http://localhost:8080/` + `portfolio/update/${id}`,
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.put(
      `http://localhost:8080/` + `portfolio/update/${id}`,
      { ...data, secret: { userData } }
    );
    // console.log(response.data);

    dispatch(getDataActionCreater(userData));
    dispatch(openSnackbar("Details Updated Successfully", "success"));
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(loaderEndActionCreater());
    dispatch(openSnackbar(err.response.data.message, "error"));
  }
};

export const saveUserDetails = async (props) => {
  const { data, dispatch } = props;
  // `http://localhost:8080/` +`user/save`,

  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.post(
      `http://localhost:8080/` + `user/save`,
      {
        data,
      }
    );
    // console.log(response.data);

    dispatch(getDataActionCreater(data));
  } catch (err) {
    console.log(err);
    dispatch(loaderEndActionCreater());
  }
};

export const sendMessage = async (props) => {
  const { data, dispatch } = props;

  // console.log("In handle Function!!", data);

  // `http://localhost:8080/` + `message/sendMessage`,
  try {
    dispatch(loaderStartActionCreater());

    const response = await axios.post(
      `http://localhost:8080/` + `message/sendMessage`,
      {
        data,
      }
    );
    // console.log(response.data);

    // dispatch(getDataActionCreater());
    // dispatch(loaderEndActionCreater());
    dispatch(openSnackbar("Sent Message Successfully", "success"));
  } catch (err) {
    console.log(err);
    dispatch(loaderEndActionCreater());
  }
};

export const deleteMessage = async (props) => {
  const { id, dispatch } = props;

  // console.log("In handle Function!!", data);

  // `http://localhost:8080/` + `message/deleteMessage/${id}`,
  try {
    dispatch(loaderStartActionCreater());

    const response = await axios.post(
      `http://localhost:8080/` +
        `message/deleteMessage/${id}`
    );
    // console.log(response.data);

    // dispatch(getDataActionCreater());
    // dispatch(loaderEndActionCreater());
    dispatch(openSnackbar("Sent Message Successfully", "success"));
  } catch (err) {
    console.log(err);
    dispatch(loaderEndActionCreater());
  }
};

export const getMessage = async (props) => {
  const { userData, dispatch } = props;

  // console.log("In handle Function!!", data);
  // `http://localhost:8080/` + `message/getMessage`,
  let data = { userData };
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.post(
      `http://localhost:8080/` + `message/getMessage`,
      {
        data,
      }
    );
    // console.log(response.data);
    dispatch(loaderEndActionCreater());

    return response.data;
    // dispatch(getDataActionCreater());
  } catch (err) {
    console.log(err);
    dispatch(loaderEndActionCreater());
  }
};

export const fileUpload = async (props) => {
  const { file, dispatch, storeValue, setData, data, userData, setIsFileUpload } =
    props;
  //   const dispatch = useDispatch()
  // console.log(file.name)

  try {
    const storageRef = ref(getStorage(), "images/" + uuid() + "_" + file.name);
    let fileUrl = "";
    dispatch(loaderStartActionCreater());
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          let newData = data;
          newData[`${storeValue}`] = downloadURL;
          setData(newData);
          setIsFileUpload(true)
          fileUrl = downloadURL;
          dispatch(loaderEndActionCreater());
        });
      }
    );

    //updateData
    return fileUrl;
  } catch (err) {
    dispatch(loaderEndActionCreater());
    console.log(err);
    dispatch(openSnackbar(err, "error"));
  }
};

export const checkCreds = async (props) => {
  const { selectedTab, selectedVal, data, dispatch, userData } =
    props;

  try {
    const response = await axios.post(
      "http://localhost:8080/" + "portfolio/checkCreds",
      {
        secret: { userData },
      }
    );
    return true;
  } catch (err) {
    console.log(err.response.data.message);
    return false;
  }
};

export const handleUpdateProjectStatus = async (props) => {
  const { id, data, dispatch, userData} = props;
  //   const dispatch = useDispatch();
  // console.log(data);
  let secret = { userData };
  // console.log("Update Hit!!", props);
  // `http://localhost:8080/` + `portfolio/updateProjectStatus/${id}`,
  try {
    dispatch(loaderStartActionCreater());
    const response = await axios.put(
      `http://localhost:8080/` +
        `portfolio/updateProjectStatus/${id}`,
      { ...data, secret: { userData } }
    );
    // console.log(response.data);

    dispatch(getDataActionCreater(userData));
    dispatch(openSnackbar("Details Updated Successfully", "success"));
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(loaderEndActionCreater());
    dispatch(openSnackbar(err.response.data.message, "error"));
  }
};

