import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import AbstractWaves from "@/assets/AbstractWaves.png";
import Sparkles from "@/assets/Sparkles.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id urna tempor urna mollis bibendum non vitae mauris. Aenean porttitor augue ante. Donec lobortis bibendum enim, vel tincidunt dolor fringilla in. Ut viverra turpis eros, imperdiet tincidunt erat lobortis in.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Hundreds of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id urna tempor urna mollis bibendum non vitae mauris. Aenean porttitor augue ante. Donec lobortis bibendum enim, vel tincidunt dolor fringilla in. Ut viverra turpis eros, imperdiet tincidunt erat lobortis in.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id urna tempor urna mollis bibendum non vitae mauris. Aenean porttitor augue ante. Donec lobortis bibendum enim, vel tincidunt dolor fringilla in. Ut viverra turpis eros, imperdiet tincidunt erat lobortis in.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 md:flex justify-around md:mt-40">
          <img
            className="mx-auto"
            alt="benefits-pageGraphic"
            src={BenefitsPageGraphic}
          />
          <div className="flex flex-col gap-6 basis-1/3">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img
                className="absolute z-[-1] -top-16 -left-20"
                src={AbstractWaves}
              />
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT </span>
              </HText>
            </motion.div>
            <div>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id urna tempor urna mollis bibendum non vitae mauris. Aenean
                porttitor augue ante. Donec lobortis bibendum enim, vel
                tincidunt dolor fringilla in. Ut viverra turpis eros, imperdiet
                tincidunt erat lobortis in.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                id urna tempor urna mollis bibendum non vitae mauris. Aenean
                porttitor augue ante. Donec lobortis bibendum enim, vel
                tincidunt dolor fringilla in. Ut viverra turpis eros, imperdiet
                tincidunt erat lobortis in.
              </p>
            </div>
            <div className="relative">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <img
                className="absolute z-[-1] -top-5 left-28 w-20 h-20"
                src={Sparkles}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
