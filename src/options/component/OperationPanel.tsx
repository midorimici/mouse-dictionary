/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import React from "react";
import * as res from "../logic/resource";

type Props = {
  trigger: (type: "save" | "factoryReset") => void;
};

export const OperationPanel: React.FC<Props> = (props) => {
  return (
    <>
      <div style={{ position: "sticky", top: 4, zIndex: 9999, opacity: 0.95 }}>
        <button
          type="button"
          className="button button-large"
          style={{ position: "relative", bottom: 0 }}
          onClick={() => props.trigger("save")}
        >
          {res.get("saveSettings")}
        </button>
      </div>
      <button
        type="button"
        className="button-outline button-small"
        style={{ position: "relative", bottom: 0 }}
        onClick={() => props.trigger("factoryReset")}
      >
        {res.get("defaultSettings")}
      </button>
    </>
  );
};