import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-11/12 mx-auto bg-white p-4 mt-4 rounded-md shadow-lg">
      <h1 className="font-bold text-base uppercase">About this project</h1>
      <p className="text-base text-darkGray">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level to improve your posture and make you more
        comfortable while at work, helping you stay focused on the task at hand.
        <br />
        <br />
        Featuring Artisan craftmanship, the simplicity design creates extra desk
        space below your computer to allow notpads, pens and USB sticks to be
        stored under the stand.
      </p>
      <Link className="text-black no-underline font-bold" to="/">
        Back to home
      </Link>
    </div>
  );
}

export default About;
