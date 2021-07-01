import {
  BlueDot,
  GreenDot,
  YellowDot,
  RedDot,
  GreyDot,
} from "../../icons/Icons";

import "./Status.scss";

const Status = () => {
  const statusData = [
    {
      name: "Published",
      icon: <GreyDot />,
    },
    {
      name: "Scheduled",
      icon: <GreenDot />,
    },
    {
      name: "Need Approval",
      icon: <YellowDot />,
    },
    {
      name: "Error",
      icon: <RedDot />,
    },
    {
      name: "Notes",
      icon: <BlueDot />,
    },
  ];

  return (
    <div className="status">
      <div className="status__container">
        {statusData.map((status) => {
          return (
            <div className="status__content">
              {status.icon}
              <label className="status__label">{status.name}</label>
            </div>
          );
        })}
      </div>

      <img src="./Profile.png" alt="person" />
    </div>
  );
};

export default Status;
