import { NotificationIcon, SummaryIcon, PublishIcon, EngageIcon, ListenIcon, ReportIcon } from "../../icons/Icons";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__header">
        sociality<label>.io</label>
      </h2>
      <div className="sidebar__wrapper">
        <div className="sidebar__brands"></div>
        <div className="sidebar__accordion">
          <div className="sidebar__content-box">
            <div className="sidebar__row">
              <NotificationIcon />
              <label className="sidebar__label">NOTIFICATIONS</label>
              <label className="sidebar__label sidebar__label--rounded">28</label>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">Compase</li>
              <li className="sidebar__item">Feed</li>
            </ul>
          </div>

          <div className="sidebar__content-box">
            <div className="sidebar__row">
              <SummaryIcon />
              <label className="sidebar__label">SUMMARY</label>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">Compase</li>
              <li className="sidebar__item">Feed</li>
            </ul>
          </div>

          <div className="sidebar__content-box">
            <div className="sidebar__row">
              <PublishIcon />
              <label className="sidebar__label">PUBLISH</label>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">Compase</li>
              <li className="sidebar__item">Feed</li>
            </ul>
          </div>

          <div className="sidebar__content-box">
            <div className="sidebar__row">
              <EngageIcon />
              <label className="sidebar__label">ENGAGE</label>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">Compase</li>
              <li className="sidebar__item">Feed</li>
            </ul>
          </div>

          <div className="sidebar__content-box">
            <div className="sidebar__row">
              <ListenIcon />
              <label className="sidebar__label">LISTEN</label>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">Compase</li>
              <li className="sidebar__item">Feed</li>
            </ul>
          </div>

          <div className="sidebar__content-box">
            <div className="sidebar__row">
              <ReportIcon />
              <label className="sidebar__label">REPORT</label>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">Compase</li>
              <li className="sidebar__item">Feed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

/*               
 */
