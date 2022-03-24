import React from "react";

export default function Main() {
  return (
    <main>
      <h1 className="main--title">Laura Smith</h1>
      <div className="sub--title">
        <span className="subheader">Frontend Developer</span>
        <span className="website">laurasmith.website</span>
      </div>
      <div className="buttons">
        <button type="email">Email</button>
        <button type="linkedin">LinkedIn</button>
      </div>
      <article className="info">
        <div className="about">
          <h1 className="info--heading">About</h1>
          <div className="description">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </div>
        </div>
        <div className="interests">
          <h1 className="info--heading">Interests</h1>
          <div className="description">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </div>
        </div>
      </article>
    </main>
  );
}
