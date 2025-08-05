
const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-end px-6 fixed w-full left-64 top-0 z-10">
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <p className="font-semibold">Moussa Diatta</p>
          <p className="text-sm text-gray-500">Employé</p>
        </div>
        <img
          src="https://ui-avatars.com/api/?name=Moussa+Diatta"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
