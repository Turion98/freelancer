import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { frontendEventTrackingIdentityLayerModule } from "../../../lib/portfolio/moduleDetailData/frontendEventTrackingIdentityLayerModule";

export default function FrontendEventTrackingIdentityLayerPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={frontendEventTrackingIdentityLayerModule} />
    </FreelanceSubpageLayout>
  );
}
