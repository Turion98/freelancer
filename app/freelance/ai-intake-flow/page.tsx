// app/freelancer/ai-intake-flow/page.tsx

import { FreelanceHeader } from "../../../components/FreelanceHeader/FreelanceHeader";
import { HeroSection } from "../../../components/HeroSection/HeroSection";
import { AiIntakeFlowDetails } from "../../../components/Pages/AiIntakeFlowDetails/AiIntakeFlowDetails";

export default function AiIntakeFlowPage() {
  return (
    <div>
      <FreelanceHeader />
      <main>
        {/* opcionális: adhatsz egy specifikus hero-t, vagy használhatod a globált */}
        <HeroSection />
        <AiIntakeFlowDetails />
      </main>
    </div>
  );
}
