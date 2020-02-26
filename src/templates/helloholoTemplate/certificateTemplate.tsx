import { format } from "date-fns";
import { get } from "lodash";
import React, { FunctionComponent } from "react";
import Moment from 'react-moment';

import "bootstrap/dist/css/bootstrap.css";

import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { HelloHoloOpencertsTemplateCertificate } from "../samples";
import helloholoLogo from "./common/helloholo-logo-blue-horizontal.svg";
import axensionStudiosLogo from "./common/axension-studios-logo.svg";

export const CertificateTemplate: FunctionComponent<TemplateProps<HelloHoloOpencertsTemplateCertificate>> = ({
  document
}) => (
  <>
    <div
      className="container p-2"
      style={{
        border: "1px solid #324353"
      }}
    >
      <div
        className="p-2"
        style={{
          border: "0px solid #324353"
        }}
      >
        <div className="my-5 m-lg-5 text-center">
          <img src={axensionStudiosLogo} alt="Axension Studios Logo" style={{ width: "30%", height: "auto", maxWidth: "1000px" }} />
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body" style={{ textAlign: "center" }}>
          <i>This is to certify that</i>
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title">
          <b>{document.recipient.name}</b>
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body" style={{ textAlign: "center" }}>
          <i>has successfully completed the</i>
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title" style={{ textAlign: "center" }}>
          {document.name}
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body" style={{ textAlign: "center" }}>
          <i>through training administered by</i>
        </div>
        <div className="row">
          <div className="col" />
          <div className="col">
            <img
              className="w-100"
              style={{ width: "100%", height: "auto", minWidth: "100px" }}
              src={helloholoLogo}
              alt="HelloHolo Logo"
            />
          </div>
          <div className="col" />
        </div>

        <div
          className="row"
          style={{
            paddingLeft: "8%",
            paddingTop: "5%"
          }}
        >
          <div className="col text-center transcript">
            <img
              style={{ width: "100%", height: "auto" }}
              src={get(document, "additionalData.certSignatories[0].signature")}
            />
            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "#333"
              }}
            />
            <div>
              <b>{get(document, "additionalData.certSignatories[0].name")}</b>
              <br />
              {get(document, "additionalData.certSignatories[0].position")},{" "}
              {get(document, "additionalData.certSignatories[0].organisation")}
            </div>
          </div>

          <div className="col" />

          <div
            className="d-flex flex-row-reverse col transcript"
            style={{
              paddingTop: "5%",
              paddingRight: "5%"
            }}
          >
            <Moment format="d MMMM YYYY">
              {document.issuedOn}
            </Moment>
          </div>
        </div>
      </div>
    </div>
  </>
);
