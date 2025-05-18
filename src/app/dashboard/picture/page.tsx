import { UploadImage } from "@/components/items/UploadImage";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function PicturePage() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-full rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Saved pictures</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <UploadImage />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
