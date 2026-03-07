// app/freelance/content-schema-validation/page.tsx

import { FreelanceHeader } from "../../../components/FreelanceHeader/FreelanceHeader";
import { HeroSection } from "../../../components/HeroSection/HeroSection";
import { ContentSchemaValidationDetails } from "../../../components/Pages/ContentSchemaValidationDetails/ContentSchemaValidationDetails";

export default function ContentSchemaValidationPage() {
  return (
    <div>
      <FreelanceHeader />
      <main>
        <HeroSection />
        <ContentSchemaValidationDetails />
      </main>
    </div>
  );
}
