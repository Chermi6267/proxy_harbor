import toast from "react-hot-toast";

export const successHander = () => {
  return toast.success("Success");
};

export const errorHander = () => {
  return toast.error("Error");
};
