import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { AiOutlineArrowRight } from "react-icons/ai";
import { steps } from "./steps";
import { Button, message, Steps, theme } from "antd";
import "./styles.scss";

const TRForm = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div className="trform">
      <div className="trform_container">
        <p className="bold bigText header">
          ¡Estas a unos pasos de tu primer lote!
        </p>
        <div>
          <Steps current={current} items={items} />
          <div style={contentStyle}>{steps[current].content}</div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRForm;
