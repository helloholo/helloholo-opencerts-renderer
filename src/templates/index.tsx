import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

import { templates as helloholoTemplates } from "./helloholoTemplate"

export const registry: TemplateRegistry<any> = {
  default: helloholoTemplates,
  HELLOHOLO: helloholoTemplates
};
