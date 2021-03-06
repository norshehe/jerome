import { FileListTypes } from "@/types/others/types";
import { Vue } from "vue-class-component";

export type VForm = Vue & {
  clearFiles: () => void;
  sliceAttachments: () => void;
  validate: () => Promise<unknown>;
  resetValidation: () => boolean;
  validateClient: () => Promise<unknown>;
  reset: () => void;
  query: string;
  modelValue: string;
  propertyKeys: Array<{ icon: string; name: string }>;
  submit: () => void;
  setMarker: (event: { lat: number; lng: number }) => void;
  blob: () => Blob;
  fileList: FileListTypes[];
  test: () => void;
  render: () => void;
  setPolygon: () => void;
  loadMarkers: () => void;
  downloadPDF: () => void;
  initMap: () => void;
  mountKeys: () => void;
  unsetPolygon: () => void;
  openModal: () => void;
  setCenter: (lat: number, lng: number) => void;
  setMarkers: (event: { lat: number; lng: number }) => void;
  setLongLat: (event: { lat: number; lng: number }) => void;
  setPolygonMarker: (event: { lat: number; lng: number }[]) => void;
};
