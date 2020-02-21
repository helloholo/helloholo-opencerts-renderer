import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./customTemplate";
import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate/customTemplate";
import { templates as helloholoTemplates } from "./helloholoTemplate"

export const registry: TemplateRegistry<any> = {
  default: templates,
  custom: templates,
  HELLOHOLO: helloholoTemplates,
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
