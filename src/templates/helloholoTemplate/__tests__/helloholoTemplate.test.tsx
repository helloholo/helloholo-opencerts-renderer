import { CertificateTemplate } from "../certificateTemplate";
import { helloholoTemplateCertificate } from "../../samples";
import { render } from "@testing-library/react";
import React from "react";

describe("helloholoTemplate", () => {
  it("should render with title provided by the document", () => {
    const { queryByText } = render(
      <CertificateTemplate document={helloholoTemplateCertificate} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Certificate of Completion")).toBeTruthy();
  });
  it("should render with the grade distinction", () => {
    const { queryByText } = render(
      <CertificateTemplate document={{ ...helloholoTemplateCertificate}} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("with Distinction")).toBeTruthy();
  });
  it("should NOT render with the grade merit", () => {
    const { queryByText } = render(
      <CertificateTemplate document={{ ...helloholoTemplateCertificate}} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("with Merit")).toBeFalsy();
  });
  it("should render the recipient name", () => {
    const { queryByText } = render(
      <CertificateTemplate document={{ ...helloholoTemplateCertificate}} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Eugene Choy Wen Jia")).toBeTruthy();
  });
  it("should render the formatted date", () => {
    const { queryByText } = render(
      <CertificateTemplate document={{ ...helloholoTemplateCertificate}} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("28th of January 2020")).toBeTruthy();
  });
  it("should render the course title", () => {
    const { queryByText } = render(
      <CertificateTemplate document={{ ...helloholoTemplateCertificate}} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Mixed Reality Developer Course")).toBeTruthy();
  });
  it("should render the signatory's title", () => {
    const { queryByText } = render(
      <CertificateTemplate document={{ ...helloholoTemplateCertificate}} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Managing Director")).toBeTruthy();
  });
});
