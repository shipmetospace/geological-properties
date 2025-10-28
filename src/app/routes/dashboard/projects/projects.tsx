import { ContentLayout } from '@/components/layouts';
import { ProjectsList } from '@/features/projects/components/projects-list';

const ProjectsRoute = () => {
  return (
    <ContentLayout title="Projects">
      <ProjectsList />
    </ContentLayout>
  );
};

export default ProjectsRoute;
