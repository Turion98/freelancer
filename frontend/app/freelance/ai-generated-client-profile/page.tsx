import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { aiGeneratedClientProfileModule } from "../../../lib/portfolio/moduleDetailData/aiGeneratedClientProfileModule";

export default function AiGeneratedClientProfilePage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={aiGeneratedClientProfileModule} />
    </FreelanceSubpageLayout>
  );
}

