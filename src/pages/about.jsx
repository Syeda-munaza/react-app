import React from "react";

const ListGroupTabs = () => {
  return (
    <div className="row">
      {/* Left side list-group with yellow background */}
      <div className="col-4">
        <div className="list-group bg-success-subtle p-3" id="list-tab" role="tablist">
          <a
            className="list-group-item list-group-item-action active"
            id="list-home-list"
            data-bs-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="list-home"
          >
            Home
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-profile-list"
            data-bs-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="list-profile"
          >
            Profile
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-messages-list"
            data-bs-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="list-messages"
          >
            Messages
          </a>
          <a
            className="list-group-item list-group-item-action"
            id="list-settings-list"
            data-bs-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="list-settings"
          >
            Settings
          </a>
        </div>
      </div>

      {/* Right side content with a yellow background */}
      <div className="col-8">
        <div className="tab-content bg-warning p-3" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <p>Home Content</p>
          </div>
          <div
            className="tab-pane fade"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <p>Profile Content</p>
          </div>
          <div
            className="tab-pane fade"
            id="list-messages"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            <p>Messages Content</p>
          </div>
          <div
            className="tab-pane fade"
            id="list-settings"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            <p>Settings Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListGroupTabs;
