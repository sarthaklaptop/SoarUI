import { cn } from "@/lib/utils";
import { readComponentSource } from "../readComponentSource";
import CopyButton from "../CopyButton";

export default async function DemoComponent({
  directory,
  componentName,
  className,
  ...props
}: {
  directory: string;
  componentName: string;
  className?: string;
  [key: string]: any;
}) {
  const Component = (await import(`@/components/${directory}/${componentName}`)).default;
  const source = await readComponentSource(directory, componentName);

  return (
    <div className={cn("group/item relative min-h-[200px] flex items-center justify-center", className)}>
      <Component {...props} />
      <CopyButton componentSource={source || ""} />
    </div>
  );
}