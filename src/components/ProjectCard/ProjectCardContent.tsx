import React from 'react';
import { ProjectCardTitle } from './ProjectCardTitle';
import { ProjectCardDescription } from './ProjectCardDescription';

interface ProjectCardContentProps {
  title: string;
  description: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export function ProjectCardContent({
  title,
  description,
  isExpanded,
  onToggleExpand,
}: ProjectCardContentProps) {
  return (
    <div className="mb-4">
      <ProjectCardTitle title={title} />
      <ProjectCardDescription
        description={description}
        isExpanded={isExpanded}
        onToggleExpand={onToggleExpand}
      />
    </div>
  );
}
