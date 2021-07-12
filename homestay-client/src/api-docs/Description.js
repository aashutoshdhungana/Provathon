import React from "react";

function Description({ description, params = {} }) {
  // function to parse received param object to
  // desired format to render on screen
  const parse = (objParams) => {
    const ParamComponent = ({ paramItem }) => paramItem;

    // convert each stringified line
    // and return array of those stringified lines
    const stringifiedParams = Object.keys(objParams).map((param, key) => {
      const { type, option } = objParams[param];
      return (
        <p>
          {param} : {type} {option === "optional" ? `[ optional ]` : ""}
        </p>
      );
    });

    // return whole stringified param
    return (
      <div style={{ marginLeft: "1rem" }}>
        {stringifiedParams.map((paramItem, key) => (
          <ParamComponent key={key} paramItem={paramItem} />
        ))}
      </div>
    );
  };

  return (
    <div className="description">
      <p>Description : {description}</p>
      {!!Object.keys(params) && (
        <div style={{ marginBottom: "1rem" }}>
          <div>Params : </div>
          <div className="json">
            <span className="braces">{"{"}</span>
            {parse(params)}
            <span className="braces">{"}"}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Description;
