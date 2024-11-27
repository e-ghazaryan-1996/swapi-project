import useAuthStore from "@/hooks/useAuthStore";

const UserProfile = () => {
  const { user } = useAuthStore();

  return (
    <div className="flex flex-col items-center mb-8">
      <img
        src={user?.photo || "https://via.placeholder.com/80"}
        alt="User"
        className="w-16 h-16 rounded-full"
      />
      <span className="mt-4 text-lg font-medium">
        {user?.name ?? user?.email}
      </span>
    </div>
  );
};

export default UserProfile;
