// app/freelance/backend-story-resolution/page.tsx

import { FreelanceHeader } from "../../../components/FreelanceHeader/FreelanceHeader";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { backendStoryResolutionModule } from "../../../lib/portfolio/moduleDetailData/backendStoryResolutionModule";

export default function BackendStoryResolutionPage() {
  return (
    <div>
      <FreelanceHeader />
      <main>
        <ModuleDetailPageShell data={backendStoryResolutionModule} />
      </main>
    </div>
  );
}
