import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { decisionRuntimeEngineModule } from "../../../lib/portfolio/moduleDetailData/decisionRuntimeEngineModule";

export default function DecisionRuntimeEnginePage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={decisionRuntimeEngineModule} />
    </FreelanceSubpageLayout>
  );
}
