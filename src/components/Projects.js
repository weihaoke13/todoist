//github
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { IndividualProject } from './IndividualProject';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectid}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectid
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectid);
            setSelectedProject(project.projectid);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActive(project.projectid);
              setSelectedProject(project.projectid);
            }
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};

Projects.propTypes = {
  activeValue: PropTypes.bool,
};