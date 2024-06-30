import React from "react";
import lines from "@/../public/lines-1.png";
import ArrowAnimation from "./arrowAnimation";
import Image from "next/image";
import Project1 from "@/../public/plentycred.png";
import Project2 from "@/../public/earncharge.png";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
const background = {
  backgroundSize: "cover",
  backgroundColor: "black",
  backgroundImage: `url(${lines.src})` // Ensure to use .src to get the path of the image
};

const portfolio = () => {
  return (
    <div className="overflow-hidden" style={background}>
      <div className="max-w-[1200px] p-10 m-auto">
        <div className="flex flex-wrap gap-2 flex-row">
          <h1 className="text-3xl lg:text-6xl font-bold font-Primary text-white">
            Our Works
          </h1>
          <ArrowAnimation />
        </div>
        <div className="mt-4">
          <div className="grid-cols-1 lg:grid-cols-2 gap-10 grid">
            <div className="rounded-xl w-full gap-4 bg-white" id="card">
              <div className="p-10">
                <h1 className="text-4xl pb-4 font-bold font-Primary text-white">
                  PlentyCred
                </h1>
                <div className="pb-4">
                  <Badge
                    variant="outline"
                    className="text-white font-secondary mr-2 py-2 px-4 bg-blue-600 border-blue-600"
                  >
                    Finance
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white font-secondary mr-2 mr-2 py-2 px-4 bg-blue-600 border-blue-600"
                  >
                    Credit
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white font-secondary mr-2 mr-2 py-2 px-4 bg-blue-600 border-blue-600"
                  >
                    Dashboard
                  </Badge>
                </div>
                <Image
                  src={Project1}
                  alt="EarnCharge"
                  width={600}
                  height={600}
                  className="w-full rounded-xl"
                />
                <div className="mt-4 text-white font-Secondary">
                  Recharge is fast and easy to use. So, a user can look for a
                  suitable recharge plan and complete the recharge in just a few
                  clicks. It does not even take a minute.
                </div>
                <br />
                <br />
                <Link
                  href="#"
                  className="text-white font-Secondary py-4 px-6 border-[2px] text-sm border-white rounded-xl"
                >
                  More about this Project
                </Link>
              </div>
            </div>
            <div className="rounded-xl w-full gap-4 bg-white" id="card">
              <div className="p-10">
                <h1 className="text-4xl pb-4 font-bold font-Primary text-white">
                  EarnCharge
                </h1>
                <div className="pb-4">
                  <Badge
                    variant="outline"
                    className="text-white font-secondary mr-2 py-2 px-4 bg-green-600 border-green-600"
                  >
                    Recharge
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white font-secondary mr-2  py-2 px-4 bg-green-600 border-green-600"
                  >
                    BBPS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white font-secondary mr-2 py-2 px-4 bg-green-600 border-green-600"
                  >
                    Wallet
                  </Badge>
                </div>
                <Image
                  src={Project2}
                  alt="EarnCharge"
                  width={600}
                  height={600}
                  className="w-full rounded-xl"
                />
                <div className="mt-4 text-white font-Secondary">
                  Plenty cred stands out for its speed, affordability and
                  user-friendliness, surpassing other financial institutions and
                  offering the best service.
                </div>
                <br />
                <br />
                <Link
                  href="#"
                  className="text-white font-Secondary py-4 px-6 border-[2px] text-sm border-white rounded-xl"
                >
                  More about this Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
