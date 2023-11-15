import { HomeModernIcon } from "@heroicons/react/24/solid";

type Props = {};

const BenefitBox = (props: Props) => {
  return (
    <div className=" flex flex-col items-center px-5 py-20 border-2 gap-5 basis-full">
      <HomeModernIcon className="h-6 w-6" />
      <h6 className="font-bold">State of the Art Facilities</h6>
      <p className="w-full text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id urna
        tempor urna mollis bibendum non vitae mauris. Aenean porttitor augue
        ante. Donec lobortis bibendum enim, vel tincidunt dolor fringilla in.
      </p>
      <p>Learn More</p>
    </div>
  );
};

export default BenefitBox;
