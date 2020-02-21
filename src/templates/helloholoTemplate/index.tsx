import { CertificateTemplate } from "./certificateTemplate";
import { GradeTemplate } from "./gradeTemplate";
import { AboutTemplate } from "./aboutTemplate";

export const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: CertificateTemplate
  },
  {
    id: "grade",
    label: "Grade",
    template: GradeTemplate
  },
  {
    id: "about",
    label: "About",
    template: AboutTemplate
  }
];