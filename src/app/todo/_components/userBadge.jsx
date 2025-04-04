import { getAllUserInformationAction } from "@/action/userAction";

import { BellRing } from "lucide-react";

import Image from "next/image";

const UserBadgeComponent = async () => {
  const userData = await getAllUserInformationAction();
  console.log("data", userData);

  return (
    <section className="flex gap-8 justify-center items-center">
      <BellRing size={20} />

      <div className="flex gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            fill
            src={userData.profile || userData.image || "/chin_chang_happy.jpg"}
            alt="user profile"
          />
        </div>

        <div>
          <p>{userData.username || userData.name || "unknown"}</p>
          <p className="text-green-800">
            {userData.email || userData.email || "unknown"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserBadgeComponent;
