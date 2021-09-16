import { Vue } from "vue-class-component";

export type VForm = Vue & {
  clearFiles: () => void;
  sliceAttachments: () => void;
  validate: () => Promise<unknown>;
  resetValidation: () => boolean;
  validateClient: () => Promise<unknown>;
  reset: () => void;
  query: string;
  submit: () => void;
  blob: () => Blob;
};
