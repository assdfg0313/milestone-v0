import React from "react";
import PropTypes from "prop-types";
import "./ProjectThumbStyles.css";
import { Link } from "react-router-dom";

interface OneProjectThumbProps {
  id: number;
  contract: string;
  title: string;
  imgUrl: string;
  qeustsNum: number;
}

function OneProjectThumb({
  id,
  contract,
  title,
  imgUrl,
  qeustsNum,
}: OneProjectThumbProps) {
  return (
    <Link to={`/project/${id}`} className="thumb-card hover:cursor-pointer">
      <img className="thumb-card-img" src={imgUrl} alt="" />
      <div className="thumb-card-title">{title}</div>
      <div className="thumb-card-quest">퀘스트 수 : {qeustsNum}</div>
    </Link>
  );
}

export default OneProjectThumb;
