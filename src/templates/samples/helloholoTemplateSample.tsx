import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface HelloHoloOpencertsTemplateCertificate extends Document {
  name: string;
  issuedOn: string;
  issuers: {
	network: string;
	name: string;
	url: string;
	documentStore: string;
	identityProof: {
		type: string;
		location: string;
	}
  }[];
  recipient: {
    name: string;
  };
  transcript: {
	courseCode: string;
    name: string;
    grade: string;
	url: string;
	description: string;
  }[];
  additionalData: {
    certSignatories: {
      name: string;
      position: string;
	  organisation: string;
	  signature: string;
    }[];
  };
}

export const helloholoTemplateCertificate: HelloHoloOpencertsTemplateCertificate = {
	"id": "d58f0963-ce84-4b3e-95bb-e71aee953df5",
	"name": "Mixed Reality Developer Course",
	"issuedOn": "2020-01-28T23:59:32+08:00",
	"issuers": [
		{
			"network": "ETHEREUM",
			"name": "HelloHolo",
			"url": "https://www.helloholo.sg/",
			"documentStore": "0x019d771a710ae45548ca5978f277633b25d4d2df",
			"identityProof": {
				"type": "DNS-TXT",
				"location": "helloholo.sg"
			}
		}
	],
	"recipient": {
		"name": "Eugene Choy Wen Jia"
	},
	"transcript": [
		{
			"courseCode": "MR101",
			"name": "Mixed Reality Developer Course",
			"grade": "Distinction",
			"url": "https://www.helloholo.sg/",
			"description": "HelloHolo's Mixed Reality Developer course aims to expose course attendees to the digital future of mixed reality and immersive media through the Microsoft HoloLens. Course attendees will have hands-on experience with the Microsoft HoloLens headset as well as other competing headsets. They are expected to learn the basics of mixed reality development using C# programming and Unity 3D. The course will be taught by HelloHolo’s pioneer mixed reality developers who are also industry experts in the field. The course comprises of 21 hours of course content in total."
		}
	],
	"additionalData": {
		"certSignatories": [
			{
				"name": "Kee Cheng Heng",
				"position": "Managing Director",
				"organisation": "Axension Studios LLP",
				"signature": "Kee Cheng Heng"
			}
		]
	},
	"$template": {
		"name": "HELLOHOLO",
		"type": "EMBEDDED_RENDERER",
		"url": "https://renderer.opencerts.helloholo.sg/"
	}
};