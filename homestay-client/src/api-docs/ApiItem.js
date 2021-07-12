import React from "react";

import "./style.css";

function ApiItem(props) {
  const { method, url, children, onFetch } = props;
  // console.log(`method-${method}`);
  return (
    <div>
      <h3>
        <span className={`method-${method}`}>{method}</span>: {url}
      </h3>
      {!!children && children}
      <button onClick={onFetch}>Fetch</button>
    </div>
  );
}

export default ApiItem;
