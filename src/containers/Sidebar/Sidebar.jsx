import {
  NotificationIcon,
  SummaryIcon,
  PublishIcon,
  EngageIcon,
  ListenIcon,
  ReportIcon,
  PlusIcon,
  MinusIcon,
} from "../../icons/Icons";
import "./Sidebar.scss";

import { useState } from "react";

const contentBox = [
  {
    id: 0,
    icon: <SummaryIcon className="sidebar__icon" />,
    label: "SUMMARY",
    iconType: "summary",
  },
  {
    id: 1,
    icon: <PublishIcon className="sidebar__icon" />,
    label: "PUBLISH",
    iconType: "publish",
  },
  {
    id: 2,
    icon: <EngageIcon className="sidebar__icon" />,
    label: "ENGAGE",
    iconType: "engage",
  },
  {
    id: 3,
    icon: <ListenIcon className="sidebar__icon" />,
    label: "LISTEN",
    iconType: "listen",
  },
  {
    id: 4,
    icon: <ReportIcon className="sidebar__icon" />,
    label: "REPORT",
    iconType: "report",
  },
];

const brands = [
  {
    img: "./gucci.gif",
    id: 10,
  },
  {
    img: "./coca-cola.gif",
    id: 11,
  },
  {
    img: "./pepsi.gif",
    id: 12,
  },
  {
    img: "./samsung.png",
    id: 13,
  },
  {
    img: "./tesla.gif",
    id: 14,
  },
  {
    img: "./twitter.png",
    id: 15,
  },
];

const Sidebar = () => {
  const [showBrandId, setShowBrandId] = useState(null);
  const [showContentIds, setShowContentIds] = useState({});

  // handle accordion menu's open effect
  const handleClassName = (contentId) => {
    setShowContentIds((prev) => ({
      ...prev,
      [contentId]: !prev[contentId],
    }));
  };

  const handleBrandsIcon = (brandId) => {
    setShowBrandId(brandId); // replaces current active brand
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar__header">
        sociality<label>.io</label>
      </h2>
      <div className="sidebar__wrapper">
        <div className="sidebar__brands">
          {brands.map((brand) => {
            return (
              <div
                id={brand.id}
                className={
                  `sidebar__brand ${brand.id === showBrandId ? "active" : ""}` 
                }
                onClick={() => handleBrandsIcon(brand.id)}
              >
                <img src={brand.img} className="sidebar__img" alt="/" />
              </div>
            );
          })}
        </div>
        <div className="sidebar__accordion">
          <div className="sidebar__content-box">
            <div className="sidebar__row">
              <NotificationIcon />
              <label className="sidebar__label">NOTIFICATIONS</label>
              <label className="sidebar__label sidebar__label--rounded">
                28
              </label>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">Compase</li>
              <li className="sidebar__item">Feed</li>
            </ul>
          </div>

          {contentBox.map((content) => {
            const showContent = showContentIds[content.id];
            return (
              <div
                id={content.id}
                className={"sidebar__content-box"}
                onClick={() => handleClassName(content.id)}
              >
                <div className={`sidebar__row   ${showContent ? "show" : ""}`}>
                  {content.icon}
                  <label className="sidebar__label">{content.label}</label>

                  {showContent ? (
                    <MinusIcon className="sidebar__plus" />
                  ) : (
                    <PlusIcon className="sidebar__plus" />
                  )}
                </div>
                <ul className="sidebar__list">
                  <li className="sidebar__item">Compase</li>
                  <li className="sidebar__item">Feed</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
