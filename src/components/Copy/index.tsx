"use client";

import copy from "copy-to-clipboard";
import { Tooltip } from "@mui/material";
import { useState } from "react";

type CopyProps = {
  text: string;
};

const Copy: React.FC<CopyProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const onClickHander = () => {
    copy(text);
    setIsCopied(true);
  };

  return (
    <Tooltip title={!isCopied ? "Click to copy" : "Copied"} placement="top">
      <a
        onClick={onClickHander}
        className="cursor-pointer p-2 rounded hover:bg-slate-300/20"
        onMouseLeave={() => setTimeout(() => setIsCopied(false), 1000)}
      >
        {text}
      </a>
    </Tooltip>
  );
};

export default Copy;
