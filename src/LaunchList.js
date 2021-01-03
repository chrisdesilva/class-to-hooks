import React from "react";

const LaunchList = ({ launches }) => {
  return (
    <div>
      <ul>
        {launches.map((launch) => (
          <li>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LaunchList;
