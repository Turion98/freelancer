// app/freelance/backend-story-resolution/page.tsx

import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { backendStoryResolutionModule } from "../../../lib/portfolio/moduleDetailData/backendStoryResolutionModule";

export default function BackendStoryResolutionPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={backendStoryResolutionModule} />
    </FreelanceSubpageLayout>
  );
}
