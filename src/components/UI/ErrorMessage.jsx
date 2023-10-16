const ErrorMessage = ({ error }) => {
  return (
    <div className="flex justify-center items-center h-[50%]">
      <div className=" bg-[#f8d7da] border border-[#f5c6cb] rounded-md p-4 text-center max-w-[300px] ">
        <p className="text-[#721c24]">{error}</p>
      </div>
    </div>
  );
};

export default ErrorMessage