import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { dynamicUseCaseRecommendationModule } from "../../../lib/portfolio/moduleDetailData/dynamicUseCaseRecommendationModule";

export default function DynamicUseCaseRecommendationPage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={dynamicUseCaseRecommendationModule} />
    </FreelanceSubpageLayout>
  );
}

