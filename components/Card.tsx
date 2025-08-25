import Image from "next/image";
import EthereumIcon from "./ui/EthereumIcon";
import ClockIcon from "./ui/ClockIcon";
import equilibriumImage from "@/images/image-equilibrium.jpg";
import avatarImage from "@/images/image-avatar.png";
import ViewIcon from "./ui/ViewIcon";

export default function Card() {
  return (
    <div className="p-300 rounded-[15px] flex flex-col gap-300 bg-blue-900">
      {/* Image */}
      <div className="relative group select-none">
        <Image
          src={equilibriumImage}
          alt="Equilibrium"
          width={300}
          height={300}
          className="rounded-[8px]"
        />
        <div className="absolute inset-0 bg-cyan-400/50 opacity-0 group-hover:opacity-100 rounded-[8px] cursor-pointer">
          <ViewIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Details */}
      <div className="w-[300px] flex flex-col gap-300">
        {/* Text */}
        <div className="flex flex-col gap-300">
          {/* Title and description */}
          <div className="flex flex-col gap-200">
            <h1 className="text-preset-1 text-white">Equilibrium #3429</h1>
            <p className="text-preset-2 text-blue-500">
              Our Equilibrium collection promotes balance and calm.
            </p>
          </div>

          {/* Info */}
          <div className="flex justify-between">
            {/* Price info */}
            <div className="flex gap-100 items-center">
              <EthereumIcon className="select-none" />
              <span className="text-preset-3-semi-bold text-cyan-400">
                0.041 ETH
              </span>
            </div>

            {/* Time info */}
            <div className="flex gap-100 items-center">
              <ClockIcon className="select-none" />
              <span className="text-preset-3 text-blue-500">3 days left</span>
            </div>
          </div>
        </div>

        {/* Creator info */}
        <div className="pt-300 border-t-[1px] border-blue-800 flex gap-200 items-center">
          <Image
            src={avatarImage}
            alt="Jules Wyvern"
            width={33}
            height={33}
            className="border-[1px] border-white rounded-full select-none"
          />

          {/* Creator text */}
          <div className="flex gap-100">
            <span className="text-preset-3-regular text-blue-500">
              Creation of
            </span>
            <span className="text-preset-3-regular text-white">
              Jules Wyvern
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
