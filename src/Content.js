import React from "react";
import "./Content.css";

class Content extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Privacy Policy</h1>
        <p>Last updated: April 10, 2022</p>
        <h2>We do not collect any personal details</h2>
        <p>
          Information used in our app is stored and encrypted securely on your
          iPhone. It does not get uploaded to the cloud, nor do we have an
          access to the data.
        </p>
        <h2>Personal details we do not collect</h2>
        <p>
          Even though the app asks you to provide the data mentioned below, we
          never use them. The whole app logic is processed on your iPhone.
        </p>
        <h3>Data examples:</h3>
        <ul>
          <li>IP address</li>
          <li>User behaviour</li>
          <li>Birth date</li>
          <li>Years of pension contribution</li>
          <li>Salary and bonus</li>
        </ul>
        <h2>We will never change our approach to Privacy</h2>
        <p>
          The app is paid, that's why we have the freedom to not collect any of
          the user's data. We will never change this approach, the app, once
          bought, can be used by you without any worries about your privacy.
        </p>
        <h2>Clear your data</h2>
        <p>
          To clear your data, please use the button inside of an app settings:
          "Delete personal details".
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul>
          <li>By email: jp-pension-app@tsukinode.com</li>
        </ul>
      </div>
    );
  }
}

export default Content;
