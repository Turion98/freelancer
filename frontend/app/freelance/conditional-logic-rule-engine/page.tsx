import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { conditionalLogicRuleEngineModule } from "../../../lib/portfolio/moduleDetailData/conditionalLogicRuleEngineModule";

export default function ConditionalLogicRuleEnginePage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={conditionalLogicRuleEngineModule} />
    </FreelanceSubpageLayout>
  );
}
