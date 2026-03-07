// app/freelance/content-schema-validation/page.tsx

import { FreelanceHeader } from "../../../components/FreelanceHeader/FreelanceHeader";
import { ModuleDetailPageShell } from "../../../components/Portfolio/ModuleDetail/ModuleDetailPageShell";
import { contentSchemaValidationModule } from "../../../lib/portfolio/moduleDetailData/contentSchemaValidation";

export default function ContentSchemaValidationPage() {
  return (
    <div>
      <FreelanceHeader />
      <main>
        <ModuleDetailPageShell data={contentSchemaValidationModule} />
      </main>
    </div>
  );
}
