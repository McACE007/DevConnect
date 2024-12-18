import { LogOut } from "lucide-react";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();

  return (
    <div className="mt-auto">
      {loading ? (
        "Loading..."
      ) : (
        <LogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      )}
    </div>
  );
};
export default LogoutButton;
