import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface HelloHoloOpencertsTemplateCertificate extends Document {
  name: string;
  issuedOn: string;
  recipient: {
    name: string;
  };
  transcript: {
    name: string;
    grade: string;
    courseCode: string;
    url: string;
  }[];
  additionalData: {
    certSignatories: {
      signature: string;
      name: string;
      position: string;
      organisation: string;
    }[];
  };
}

export const helloholoTemplateCertificate: HelloHoloOpencertsTemplateCertificate = {
	id: "d58f0963-ce84-4b3e-95bb-e71aee953df5",
	name: "Mixed Reality Developer Course",
	issuedOn: "2019-12-31T23:59:32+08:00",
	$template: {
		name: "HELLOHOLO_MRDC",
		type: "EMBEDDED_RENDERER",
		url: "https://renderer.opencerts.helloholo.sg/"
	},
	recipient: {
		name: "Eugene Choy Wen Jia"
	},
	transcript: [{
		name: "Mixed Reality Developer Course",
		grade: "Distinction",
		courseCode: "MR101",
        url: "https://learn.helloholo.sg/"
    }],
	additionalData: {
		certSignatories: [
			{
			  signature: "",
			  name: "Kee Cheng Heng",
			  position: "Managing Director",
			  organisation: "HelloHolo"
			}
		]
	}
};