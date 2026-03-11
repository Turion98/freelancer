import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { conversationalVisitorDiscoveryModule } from "../../../lib/portfolio/moduleDetailData/conversationalVisitorDiscoveryModule";

export default function ConversationalVisitorDiscoveryPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={conversationalVisitorDiscoveryModule} />
    </FreelanceSubpageLayout>
  );
}

