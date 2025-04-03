import { getAllUserInfoService } from "@/service/user.service";
import { BellRing } from "lucide-react";
import Image from "next/image";

const UserBadgeComponent = async () => {
  const data = await getAllUserInfoService();
  const { payload } = data;

  return (
    <section className="flex gap-8 justify-center items-center">
      <BellRing size={20} />

      <div className="flex gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image fill src={payload.profile} alt="user profile" />
        </div>

        <div>
          <p>{payload.username || "unknown"}</p>
          <p className="text-green-800">{payload.email || "unknown"}</p>
        </div>
      </div>
    </section>
  );
};

export default UserBadgeComponent;
