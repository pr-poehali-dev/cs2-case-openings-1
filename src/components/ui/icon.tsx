
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons | string;
  color?: string;
  size?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = 24,
  className,
  fallback = "Circle",
  ...props
}) => {
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] || LucideIcons[fallback];

  return (
    <LucideIcon
      color={color}
      size={size}
      className={cn("", className)}
      {...props}
    />
  );
};

export default Icon;
