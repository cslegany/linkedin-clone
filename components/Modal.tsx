import { motion } from "framer-motion";

import { useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";

import { useRecoilValue } from "recoil";
import { getPostState } from "../atoms/postAtom";

import Backdrop from "./Backdrop";
import Form from "./Form";
import Post from "./Post";
import { ModalConfig_dropIn, ModalConfig_gifYouUp, ModalType_dropIn, ModalType_gifYouUp } from "../model/Model";

interface ModalProps {
  handleClose: () => void;
  type: string;
}

const Modal = ({ handleClose, type }: ModalProps) => {
  const { data: session } = useSession();
  const post = useRecoilValue(getPostState);

  return (
    <Backdrop onClick={handleClose}>
      {type === ModalType_dropIn && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="rounded-xl flex flex-col justify-center bg-white dark:bg-[#1D2226] w-full max-w-lg md:-mt-96 mx-6"
          variants={ModalConfig_dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-center justify-between border-b border-white/75 px-4 py-2.5">
            <h4 className="text-xl">Create a post</h4>
            <IconButton onClick={handleClose}>
              <CloseRoundedIcon className="h-7 w-7 dark:text-white/75" />
            </IconButton>
          </div>

          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Avatar src={session?.user?.image} className="!h-11 !w-11" />
              <h6>{session?.user?.name}</h6>
            </div>

            <Form />
          </div>
        </motion.div>
      )}

      {type === ModalType_gifYouUp && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="rounded-l-lg flex bg-[#1D2226] w-full max-w-6xl -mt-[7vh] mx-6"
          variants={ModalConfig_gifYouUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.img alt="" onDoubleClick={handleClose} src={post.photoUrl}
            className="object-contain max-h-[80vh] w-full max-w-3xl rounded-l-lg"
          />
          <div className="w-full md:w-3/5 bg-white dark:bg-[#1D2226] rounded-r-lg">
            <Post post={post} modalPost />
          </div>
        </motion.div>
      )}
    </Backdrop>
  );
};

export default Modal;
