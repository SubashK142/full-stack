import React, { useState } from "react";

const UserProfileCard = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="col-lg-4" style={{ width: "20%", position: "relative" }}>
      <div
        className={`card mb-4${isMenuVisible ? " show-dropdown" : ""}`}
        style={{ height: "45vh", position: "relative", zIndex: 2 }}
      >
        <div className="card-body text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: "100px" }}
          />
          <h5 className="my-3">John Smith</h5>
          <p className="text-muted mb-1">Full Stack Developer</p>
          <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>

          <button
            className="btn btn-primary"
            type="button"
            onClick={toggleMenu}
          >
            Actions
          </button>

          {isMenuVisible && (
            <div className="dropdown-menu" style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
              <button type="button" className="btn btn-secondary" onClick={toggleMenu}>
                Close
              </button>
              {/* Add more dropdown items as needed */}
            </div>
          )}
        </div>
      </div>
      
      {/* Other content that should be overlayed */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 0 }}>
        {/* Add other content here */}
      </div>
    </div>
  );
};

export default UserProfileCard;
