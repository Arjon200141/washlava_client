import { useState, useEffect } from "react";
import {
  FaCrown,
  FaUser,
  FaUserShield,
  FaBan,
  FaUserEdit,
  FaUserAltSlash,
} from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Allusers = () => {
  const [allusers, setAllusers] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosSecure.get("/users");
        setAllusers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [axiosSecure]);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axiosSecure.patch(`/users/${userId}`, { role: newRole });
      setAllusers(
        allusers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const handleBanUser = async (userId, isBanned) => {
    try {
      await axiosSecure.patch(`/users/${userId}`, { banned: isBanned });
      setAllusers(
        allusers.map((user) =>
          user._id === userId ? { ...user, banned: isBanned } : user
        )
      );
    } catch (error) {
      console.error("Error updating ban status:", error);
    }
  };

  return (
    <div className="px-4 md:px-6 min-h-screen bg-gradient-to-tr from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
    User Management Panel
  </h2>

  <div className="overflow-x-auto shadow-2xl rounded-xl">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900 rounded-xl">
      <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <tr>
          <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">#</th>
          <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">Name</th>
          <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">Email</th>
          <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">Role</th>
          <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">Status</th>
          <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-semibold uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
        {allusers.map((user, index) => (
          <tr
            key={user._id}
            className={`transition hover:bg-gray-100 dark:hover:bg-gray-800 ${
              user.banned ? "bg-red-50 dark:bg-red-900" : ""
            }`}
          >
            <td className="px-4 md:px-6 py-3 text-xs md:text-sm font-medium">{index + 1}</td>
            <td className="px-4 md:px-6 py-3 text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-100">{user.name}</td>
            <td className="px-4 md:px-6 py-3 text-xs md:text-sm text-gray-600 dark:text-gray-300">{user.email}</td>
            <td className="px-4 md:px-6 py-3 text-xs md:text-sm">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium capitalize text-xs md:text-sm
                  ${
                    user.role === "admin"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-100"
                      : user.role === "moderator"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100"
                      : "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                  }`}
              >
                {user.role === "admin" ? <FaCrown /> : user.role === "moderator" ? <FaUserShield /> : <FaUser />}
                {user.role || "user"}
              </span>
            </td>
            <td className="px-4 md:px-6 py-3 text-xs md:text-sm">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-medium text-xs md:text-sm
                  ${
                    user.banned
                      ? "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100"
                      : "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100"
                  }`}
              >
                {user.banned ? (
                  <>
                    <FaBan />
                    Banned
                  </>
                ) : (
                  "Active"
                )}
              </span>
            </td>
            <td className="px-4 md:px-6 py-3 flex flex-wrap gap-2">
              {!user.banned && (
                <>
                  <button
                    onClick={() => handleRoleChange(user._id, "admin")}
                    disabled={user.role === "admin"}
                    className={`p-2 rounded-full transition ${
                      user.role === "admin"
                        ? "bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed"
                        : "bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-800 dark:text-purple-100 dark:hover:bg-purple-700"
                    }`}
                    title="Make Admin"
                  >
                    <FaCrown />
                  </button>
                  <button
                    onClick={() => handleRoleChange(user._id, "moderator")}
                    disabled={user.role === "moderator"}
                    className={`p-2 rounded-full transition ${
                      user.role === "moderator"
                        ? "bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-800 dark:text-blue-100 dark:hover:bg-blue-700"
                    }`}
                    title="Make Moderator"
                  >
                    <FaUserShield />
                  </button>
                  <button
                    onClick={() => handleRoleChange(user._id, "user")}
                    disabled={user.role === "user"}
                    className={`p-2 rounded-full transition ${
                      user.role === "user"
                        ? "bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed"
                        : "bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700"
                    }`}
                    title="Make Regular User"
                  >
                    <FaUser />
                  </button>
                </>
              )}
              <button
                onClick={() => handleBanUser(user._id, !user.banned)}
                className={`p-2 rounded-full transition ${
                  user.banned
                    ? "bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700"
                    : "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-700"
                }`}
                title={user.banned ? "Unban User" : "Ban User"}
              >
                {user.banned ? <FaUserEdit /> : <FaUserAltSlash />}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default Allusers;
