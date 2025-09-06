import { protectServer } from "@/features/auth/utils";

import { Banner } from "../(dashboard)/banner";
import { ProjectsSection } from "../(dashboard)/project-section";
import { TemplatesSection } from "../(dashboard)/template-section";

export default async function Home() {
  // await protectServer();

  return (
    <div className="flex flex-col space-y-4 px-4 sm:space-y-6 sm:px-6 lg:px-8 max-w-screen-xl mx-auto pb-6 sm:pb-10">
      <Banner />
      <TemplatesSection />
      <ProjectsSection />
    </div>
  );
}
