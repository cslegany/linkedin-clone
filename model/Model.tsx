import { ObjectId } from "mongodb";

export interface IArticleSource {
    id: string;
    name: string;
}

export interface IArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: IArticleSource;
    title: string;
    url: string;
    urlToImage: string;
}

export interface IPost {
    _id: string;
    input: string;
    photoUrl: string;
    username: string;
    email: string;
    userImg: string;
    createdAt: string;
}

export interface IPostRaw {
    _id: ObjectId;
    input: string;
    photoUrl: string;
    username: string;
    email: string;
    userImg: string;
    createdAt: string;
    timestamp: number;
}

export const ModalType_gifYouUp = "gifYouUp";
export const ModalType_dropIn = "dropIn";

export const ModalConfig_gifYouUp = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.15,
            ease: "easeOut",
        },
    },
};

export const ModalConfig_dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};