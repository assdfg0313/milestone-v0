import React, { ReactNode, useState } from "react";
import "./ProjectStyles.css";
import OneQuestPart, { Quest } from "./OneQuestPart";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

// "id": 5,
//     "contract": "0x2aa3cd894482ccaa113948",
//     "title": "Opside Pre-alpha Testnet Carnival",
//     "description": "Welcome to the exhilarating Opside Pre-alpha Testnet Carnival! This unparalleled event marks the beginning of a new era in the world of decentralized technology, as it showcases the innovative potential of the Opside network before its official launch. Brace yourself for a thrilling ride through a world of cutting-edge blockchain solutions, inventive gaming experiences, and unmatched community engagement.",
//     "imgUrl": "https://cdn.galxe.com/galaxy/opside/aaa17f58-7ab8-405e-906f-a46063d1e5c0.png",
//     "quests": [
//       {
//         "questId": 1,
//         "questTitle": "func1",
//         "type": "event1 emit"
//       }]

export interface ProjectData {
  id: number;
  contract: string;
  title: string;
  description: string;
  imgUrl: string;
  quests: Quest[];
}
interface OneProjectPartProps {
  projectData: ProjectData | null;
}

function OneProjectPart({ projectData, ...restProps }: OneProjectPartProps) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  if (projectData) {
    return (
      <div className="items-center">
        <img className="project-img" src={projectData.imgUrl} alt="" />
        <div className="project-title">{projectData.title}</div>
        <div className="project-description">{projectData.description}</div>
        <div className="project-quest">
          {projectData.quests.map((v, i) => {
            return <OneQuestPart quest={v} key={i} />;
          })}
        </div>
        <div
          className="project-minting"
          onClick={() => {
            handleClickOpen();
          }}
        >
          프로젝트 민팅하기
        </div>
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>NFT 구매</DialogTitle>
          <DialogContent>
            <DialogContentText>
              당신은 n개의 퀘스트를 완료하였으므로, 00% 할인된 00 가격에 NFT
              구매가 가능합니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>취소</Button>
            <Button onClick={handleClose}>민팅</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  return (
    <div className="ml-2 text-black" {...restProps}>
      ... 로딩중 ...
    </div>
  );
}

export default OneProjectPart;
