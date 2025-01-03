import DemoComponent from "@/components/Demo/ComponentSkeletok.tsx";
import PageHeader from "@/components/Demo/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button Components - Origin UI",
  description:
    "A collection of beautiful and accessible button components built with Tailwind CSS and Next.js.",
};

const directory = "btns";
const files = [
  "btn-01", 
  "btn-02", 
  "btn-03", 
  "btn-04", 
  "btn-05",
  "btn-06",
  "btn-07",
  "btn-08",
  "btn-09",
  "btn-10",
  "btn-11",
  "btn-12",
  "btn-13",
  "btn-14",
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Button">
            A growing collection of <span className="underline hover:underline-offset-4 decoration-cyan-400 font-bold">{files.length} button</span>   components built with
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative px-1 py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {files.map((componentName, index) => {
              return (
                <div
                  key={componentName}
                  className={`text-center ${
                    index !== files.length - 1
                      ? "border-r border-b border-gray-600"
                      : "border-b border-gray-600"
                  }`}
                >
                  <DemoComponent
                    directory={directory}
                    componentName={componentName}
                    className="text-center"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
