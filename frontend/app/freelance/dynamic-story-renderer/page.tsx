import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { dynamicStoryRendererModule } from "../../../lib/portfolio/moduleDetailData/dynamicStoryRendererModule";

export default function DynamicStoryRendererPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={dynamicStoryRendererModule} />
    </FreelanceSubpageLayout>
  );
}
