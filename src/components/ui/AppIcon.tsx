import React from 'react';
import {
  SparklesIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  FolderIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

type IconName =
  | 'SparklesIcon'
  | 'CodeBracketIcon'
  | 'BriefcaseIcon'
  | 'ChatBubbleLeftIcon'
  | 'HomeIcon'
  | 'FolderIcon'
  | 'AcademicCapIcon'
  | 'EnvelopeIcon'
  | 'Bars3Icon'
  | 'XMarkIcon';

interface AppIconProps {
  name: IconName | string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SparklesIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  FolderIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
};

const AppIcon = ({ name, size = 24, className = '' }: AppIconProps) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <span style={{ width: size, height: size, display: 'inline-flex' }} className={className}>
      <IconComponent className="w-full h-full" />
    </span>
  );
};

export default AppIcon;
