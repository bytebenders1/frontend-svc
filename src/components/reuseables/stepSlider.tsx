import React from "react";

// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default (props: any) => {
  const [slideDirection, setSlideDirection] = React.useState("left");
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [render, setRender] = React.useState(false);

  const next = (pos: any) => {
    setSlideIndex(pos || pos === 0 ? pos : slideIndex + 1);
    setSlideDirection("left");
  };

  const back = (pos: any) => {
    setSlideIndex(pos || pos === 0 ? pos : slideIndex - 1);
    setSlideDirection("right");
  };

  const done = (data: any) => {
    if (props.done) {
      props.done(data);
    }
    setSlideIndex(0);
  };

  return (
    <div
      className={`overflow-hidden h-[${
        props.height ?? "507px"
      }] transition-[height_0.3s] w-full relative`}
      style={props.style || {}}
    >
      {React.Children.map(props.children, (child, idx) => {
        if (React.isValidElement(child)) {
          return (
            <StepWrapper
              slideIndex={slideIndex}
              slideDirection={slideDirection}
              initialPos={idx > 0 ? -120 : 0}
              isVisible={slideIndex === idx}
            >
              {React.cloneElement(child, {
                // @ts-ignore
                next,
                back,
                done,
                render,
                slideIndex,
                isVisible: slideIndex === idx,
                forceRender() {
                  setRender((prev) => !prev);
                },
              })}
            </StepWrapper>
          );
        }
        return null; // Ensure a valid React element is returned or null
      })}
    </div>
  );
};

const StepWrapper = (props: any) => {
  const initialPos = React.useRef(props.initialPos);

  const show = props.isVisible;

  let currentPos = initialPos.current;

  if (show) {
    currentPos = 0;
  } else {
    if (initialPos.current === 0) {
      if (props.slideDirection === "left") {
        currentPos = 120;
      } else if (props.slideDirection === "right") {
        currentPos = -120;
      }
    }
  }

  return (
    <div
      className={`transition-[right_0.2s_linear,opacity_0.1s_linear,height_0.4s_linear] ${
        show ? "relative opacity-100" : "absolute opacity-0"
      } h-auto w-full right-0`}
      style={{ right: `${currentPos}%` }}
    >
      {props.children}
    </div>
  );
};
