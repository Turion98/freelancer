import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { runtimeStateManagementSystemModule } from "../../../lib/portfolio/moduleDetailData/runtimeStateManagementSystemModule";

export default function RuntimeStateManagementSystemPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={runtimeStateManagementSystemModule} />
    </FreelanceSubpageLayout>
  );
}
