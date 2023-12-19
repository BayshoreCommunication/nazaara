const TopBar = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-center gap-x-1 h-20 border-b-2 text-xl font-semibold text-gray-700 shadow-sm uppercase">
      {icon}
      {title}
    </div>
  );
};

export default TopBar;
