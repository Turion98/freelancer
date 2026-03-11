import { FreelanceSubpageLayout } from "../../../components/FreelanceSubpageLayout/FreelanceSubpageLayout";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { reportingDecisionPathAnalyticsEngineModule } from "../../../lib/portfolio/moduleDetailData/reportingDecisionPathAnalyticsEngineModule";

export default function ReportingDecisionPathAnalyticsEnginePage() {
  return (
    <FreelanceSubpageLayout>
      <ModuleDetailPageShell data={reportingDecisionPathAnalyticsEngineModule} />
    </FreelanceSubpageLayout>
  );
}
