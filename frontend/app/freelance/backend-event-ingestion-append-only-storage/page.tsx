import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { backendEventIngestionAppendOnlyStorageModule } from "../../../lib/portfolio/moduleDetailData/backendEventIngestionAppendOnlyStorageModule";

export default function BackendEventIngestionAppendOnlyStoragePage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={backendEventIngestionAppendOnlyStorageModule} />
    </FreelanceSubpageLayout>
  );
}
