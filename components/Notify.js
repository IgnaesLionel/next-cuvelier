import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./Loading";
import ToastUp from "./ToastUp";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <ToastUp
          msg={{ msg: notify.error, title: "Error" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-danger"
        />
      )}

      {notify.success && (
        <ToastUp
          msg={{ msg: notify.success, title: "Success" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-success"
        />
      )}
    </>
  );
};

export default Notify;
