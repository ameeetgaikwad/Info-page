import React from "react";

export default function Main() {
  return (
    <main>
      <h1 className="main--title">Laura Smith</h1>
      <div className="subheader">Frontend Developer laurasmith.website</div>
      <div className="buttons">
        <button type="button">Email</button>
        <button type="button">LinkedIn</button>
      </div>
      <article>
        <div className="about">
          <h1>About</h1>
          <div className="description">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </div>
        </div>
        <div className="interests">
          <h1>Interests</h1>
          <div className="description">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </div>
        </div>
      </article>
    </main>
  );
}
