import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { fragmentFlagStateSystemModule } from "../../../lib/portfolio/moduleDetailData/fragmentFlagStateSystemModule";

export default function FragmentFlagStateSystemPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={fragmentFlagStateSystemModule} />
    </FreelanceSubpageLayout>
  );
}
