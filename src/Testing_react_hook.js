import { useForm } from "react-hook-form";
let Testing_react_hook = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let submitHandler = (data) => {
    console.log("data=", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          placeholder="First Name.."
          {...register("firstname")}
        />
        <input
          type="text"
          placeholder="Last Name..."
          {...register("lastname")}
        />
        <input type="text" placeholder="Age..." {...register("age")} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Testing_react_hook;
