const Toast = ({ theme, icon, title, text, animationEffect, closeBtn }) => {

 const themeBg = theme === "light" ? "bg-white" : theme === "dark" ? "bg-gray-900" : "bg-white";

  return (
    <div
      id="toast-default"
      className={`flex items-center w-full max-w-xs p-4 text-gray-500 ${themeBg} rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 animate__animated animate__${animationEffect}`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-400 bg-gray-700 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        <span>
        <i className={icon}></i>
        </span>
      </div>
      <div className="ml-3 text-sm font-normal">{text}.</div>
      <button
        type="button"
        onClick={()=> closeBtn(false)}
        className={`ml-auto -mx-1.5 -my-1.5 ${theme === "light" ? "bg-white" : theme === "dark" ? "bg-gray-800" : "bg-white"} justify-center content-center	text-center text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-700 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
        data-collapse-toggle="toast-default"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <span>
        <i className="fas fa-times"></i>

        </span>
      </button>
    </div>
  );
};

export default Toast;
