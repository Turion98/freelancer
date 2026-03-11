import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { aiLeadQualificationModule } from "../../../lib/portfolio/moduleDetailData/aiLeadQualificationModule";

export default function AiLeadQualificationPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={aiLeadQualificationModule} />
    </FreelanceSubpageLayout>
  );
}
