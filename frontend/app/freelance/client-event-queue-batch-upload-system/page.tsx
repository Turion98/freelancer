import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { clientEventQueueBatchUploadSystemModule } from "../../../lib/portfolio/moduleDetailData/clientEventQueueBatchUploadSystemModule";

export default function ClientEventQueueBatchUploadSystemPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={clientEventQueueBatchUploadSystemModule} />
    </FreelanceSubpageLayout>
  );
}
