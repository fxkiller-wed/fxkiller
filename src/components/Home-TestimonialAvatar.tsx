import AvatarCircles from "./ui/avatar-circles";
import {motion} from "framer-motion" 

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  }
];

const HomeAvatar = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.3 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }} 
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="flex flex-col justify-center items-center gap-3 my-5 bg-blue1 py-4 px-16 rounded-2xl shadow-lg shadow-gray-500">
      <div className="font-urbanist text-xl text-gray-200 text-center">Join +254 Peoples</div>
      <AvatarCircles numPeople={99} avatarUrls={avatars} />
      <div className="font-urbanist text-xl text-beige2 text-center">4.87 Stars (12 ratings) ★★★★★</div>
    </motion.div>
  );
};


export default HomeAvatar
