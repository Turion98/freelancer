import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { stateDrivenConversationControlModule } from "../../../lib/portfolio/moduleDetailData/stateDrivenConversationControlModule";

export default function StateDrivenConversationControlPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={stateDrivenConversationControlModule} />
    </FreelanceSubpageLayout>
  );
}
