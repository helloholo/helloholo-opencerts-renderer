import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./customTemplate";
import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate/customTemplate";

import { templates as helloholoTemplates } from "./helloholoTemplate"
import { templates as govtechDemoTemplates } from "./govtechDemoCert";

export const registry: TemplateRegistry<any> = {
  default: helloholoTemplates,
  custom: templates,
  HELLOHOLO: helloholoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
  red: [
    {
      id: "custom-red",
      label: "Red Custom Template",
      template: styled(CustomTemplate)`
        color: red;
      `
    }
  ]
};
