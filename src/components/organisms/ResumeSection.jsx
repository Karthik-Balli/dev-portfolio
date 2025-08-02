import { Button } from "@/components/ui/button"

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="min-h-[70vh] bg-[#f0f0f0] flex flex-col items-center justify-center text-center p-4 md:mx-16"
    >
      <h2 className="text-3xl font-bold text-[#8B5DFF] mb-4">My Resume</h2>

      {/* Embedded PDF viewer */}
      <div className="w-full max-w-4xl aspect-[4/3] mb-6">
        <iframe
          src="https://drive.google.com/file/d/1P8Ok5bcP0O3-tdLAPq6x-gSu5XVvGZbl/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          className="rounded-lg shadow-lg"
          title="Karthik Resume"
        />
      </div>

      {/* Resume Download Button */}
      <Button asChild className="bg-[#09060e] text-white hover:bg-[#7a4cd9] transition-colors">
        <a
          href="https://drive.google.com/uc?export=download&id=1P8Ok5bcP0O3-tdLAPq6x-gSu5XVvGZbl"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </Button>
    </section>
  )
}
