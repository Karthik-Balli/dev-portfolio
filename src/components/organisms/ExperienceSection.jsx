import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    role: "Frontend Developer",
    company: "Edtorove Technologies",
    duration: "Jul 2024 – Present",
    responsibilities: [
      "Developed and maintained responsive UI components using React and TailwindCSS.",
      "Collaborated with backend teams to integrate RESTful APIs.",
      "Led UI performance optimization for 30% faster page load times.",
    ],
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-muted/30 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#8B5DFF]">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="text-left bg-[white] shadow-xl rounded-lg p-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-sm mt-1 italic">{exp.duration}</p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-sm">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
