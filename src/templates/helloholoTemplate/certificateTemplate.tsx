import { format } from "date-fns";
import { get } from "lodash";
import React, { FunctionComponent } from "react";
import Moment from "react-moment";

import "./common/fonts.css";
import "./common/certificate.css";
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
      className="container"
    >
      <div
        className="p-2"
        style={{
          border: "0px solid #324353"
        }}
      >
        <div className="my-5 m-lg-5 text-center">
          <img src={axensionStudiosLogo} alt="Axension Studios Logo" style={{ width: "28%", height: "auto", maxWidth: "1000px" }} />
        </div>

        <div className="d-flex justify-content-center cert-title">
          Certificate
          of Completion
        </div>
        
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title-extra">
          with Distinction
        </div>

        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body">
          This certificate is awarded to
        </div>

        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-recipient-name">
          {document.recipient.name}
        </div>

        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body">
          on the
          <span>&nbsp;</span>
          <Moment format="Do \o\f MMMM YYYY">
            {document.issuedOn}
          </Moment>
          <span>&nbsp;</span>
          for having successfully completed the
        </div>

        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-course-name">
          {document.name}
        </div>

        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body">
          through training administered by
        </div>

        <div className="row mb-4">
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

        <div className="row mt-4">
          <div className="col" />
          <div className="col">
            <img
              style={{ width: "100%", height: "50%" }}
              src={get(document, "additionalData.certSignatories[0].signature")}
            />
            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "#333"
              }}
            />
            <div className="text-center">
              <span>{get(document, "additionalData.certSignatories[0].name")}</span><br />
              <span>{get(document, "additionalData.certSignatories[0].position")}</span><br />
              <span>{get(document, "additionalData.certSignatories[0].organisation")}</span>
            </div>
          </div>

          <div className="col" />
        </div>
      </div>
    </div>
  </>
);
