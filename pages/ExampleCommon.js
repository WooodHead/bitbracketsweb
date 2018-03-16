import React from "react";
import Button from "../components/common/Button";
import Drawer from "../components/common/Drawer";
import Form from "../components/common/Form";
import Icon from "../components/common/Icon";
import Navbar from "../components/common/Navbar";
import SearchInput from "../components/common/SearchInput";
import TextField from "../components/common/TextField";
import Link from "../components/common/Link";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="root">
      <div className="backcolor">
        <h1>PALETTE</h1>
        <Button
          size="large"
          backgroundColor="#0fe3ab"
          name="#0fe3ab"
          colorText="#fff"
          buttonBorder="25px"
          buttonWidth="250px;"

          // for-text
        />
        <Button
          name="#3ffeca"
          backgroundColor="#3ffeca"
          colorText="#fff"
          size="large"
          //for-icons, button
        />
        <Button
          name="#323150"
          backgroundColor="#323150"
          colorText="#fff"
          size="large"
          //background-form-control
        />
        <Button
          name="#3c3b5b"
          backgroundColor="#3c3b5b"
          colorText="#fff"
          size="large"
          // tables
        />
        <Button
          name="#f92552"
          backgroundColor="#f92552"
          colorText="#fff"
          size="large"
          // buttons- headers
        />
        <Button
          name="#9e69ee"
          backgroundColor="#9e69ee"
          colorText="#fff"
          size="large"
          // text info
        />

        <Button
          name="rgba(255, 255, 255, 0.7)"
          backgroundColor="rgba(255, 255, 255, 0.7)"
          colorText="black"
          size="large"
          // blockquotes info
        />
        <Button
          name="#9e9caa"
          backgroundColor="#9e9caa"
          colorText="#fff"
          size="large"
          //player info details
        />
        <Button
          name="#ffdc38"
          backgroundColor="#ffdc38"
          colorText="#fff"
          size="large"
        />
        <Button
          name="rgba(0, 0, 0, 0.3)"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          colorText="#fff"
          size="large"
          // label
        />
        <Button
          name="#7f7e8c"
          backgroundColor="#7f7e8c"
          colorText="#fff"
          size="large"
          // comment list
        />
        <Button
          name="#383759"
          backgroundColor="#383759"
          colorText="#fff"
          size="large"
          //background color navigation
        />
        <Button
          name="#363555"
          backgroundColor="#363555"
          colorText="#fff"
          size="large"
          // table header
        />
        <Button
          name="rgba(236, 240, 246, 0.6)"
          backgroundColor="rgba(236, 240, 246, 0.6)"
          colorText="black"
          size="large"
          //footer-widgets, widget__content--bottom-decor
        />
      </div>
      <hr />
      <span>
        <Drawer /> Drawer
      </span>
      <hr />
      <div className="backcolor">
        <Form
          styleLabel={{ fontSize: " 12px", color: "blue" }}
          label="Phone"
          styleInput={{
            width: "252px",
            backgroundColor: "purple"
          }}
        />
      </div>
      <hr />
      {/* ICON */}
      <Icon
        icon={
          <span>
            <i className="fas fa-trophy" style={{ color: "#f92552" }} />
          </span>
        }
      />
      {/* ICON */}
      <hr />
      {/* LINK */}
      <div className="backcolor">
        <Link
          name="Nacion Cripto"
          href="https://nacioncripto.com/"
          className="link"
        />
      </div>
      {/* LINK */}
      <hr />
      {/* Navbar */}
      <Navbar
        brandname="bitBrackets"
        link1="link1"
        link2="link2"
        link3="link3"
        styleNav={{ float: "right" }}
      />
      {/* Navbar */}
      <hr />
      {/* SearchInput */}
      <SearchInput
        placeholder="Search"
        styleInput={{ backgroundColor: "red", width: "250px" }}
      />
      {/* SearchInput */}
      <hr />
      {/* textField */}
      <TextField />
      {/* textField */}
      <hr />
    </div>
    <style jsx>{`
      .root {
        margin: 0px 100px 0px 100px;
      }
      .backcolor {
        background-color: #f3f3f3;
        padding-bottom: 100px;
      }
    `}</style>
  </Layout>
);
