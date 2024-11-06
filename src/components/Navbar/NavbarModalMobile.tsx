type Modal = {
  open: boolean;
  currentPath: string;
};

const NavbarModalMobile = (data: Modal) => {
  return (
    <div
      className={`${
        data.open ? "flex" : "hidden"
      } flex-col text-center justify-center text-ctp-text bg-ctp-mantle rounded-lg gap-y-5 p-5 border-ctp-mauve border-2`}
    >
      <p
        className={`${
          data.currentPath === "/" ? "bg-ctp-mauve font-extrabold" : ""
        } hover:bg-ctp-mauve font-bold transition duration-500 ease-in-out py-5 rounded-lg text-ctp-surface1`}
      >
        Home
      </p>
      <p
        className={`${
          data.currentPath === "/project" ? "bg-ctp-mauve font-bold" : ""
        } hover:bg-ctp-mauve font-bold transition duration-500 ease-in-out py-5 rounded-lg text-ctp-surface1`}
      >
        Project
      </p>
      <p
        className={`${
          data.currentPath === "/post" ? "bg-ctp-mauve font-bold" : ""
        } hover:bg-ctp-mauve font-bold transition duration-500 ease-in-out py-5 rounded-lg text-ctp-surface1`}
      >
        Post
      </p>
      <p
        className={`${
          data.currentPath === "/aboutme" ? "bg-ctp-mauve font-bold" : ""
        } hover:bg-ctp-mauve font-bold transition duration-500 ease-in-out py-5 rounded-lg text-ctp-surface1`}
      >
        Aboutme
      </p>
    </div>
  );
};

export default NavbarModalMobile;
