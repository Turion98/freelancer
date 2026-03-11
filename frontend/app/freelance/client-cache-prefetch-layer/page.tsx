import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { clientCachePrefetchLayerModule } from "../../../lib/portfolio/moduleDetailData/clientCachePrefetchLayerModule";

export default function ClientCachePrefetchLayerPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={clientCachePrefetchLayerModule} />
    </FreelanceSubpageLayout>
  );
}
