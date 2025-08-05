const Navbar = () => {
  return (
    <div
      className="h-16 bg-white shadow flex items-center justify-between px-6 fixed top-0 left-64"
      style={{ width: "calc(100% - 16rem)" }}
    >
      <div className="font-bold text-lg">Tableau de bord</div>
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
