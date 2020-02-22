import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

import { templates as helloholoTemplates } from "./helloholoTemplate"
import { templates as govtechDemoTemplates } from "./govtechDemoCert";

export const registry: TemplateRegistry<any> = {
  default: helloholoTemplates,
  HELLOHOLO: helloholoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
};
