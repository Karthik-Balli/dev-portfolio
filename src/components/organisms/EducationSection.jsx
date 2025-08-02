export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "Bapatla Engineering College",
      duration: "2021 – 2024",
      location: "Andhra Pradesh, India",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Audisankara Polytechnic College",
      duration: "2018 – 2021",
      location: "Andhra Pradesh, India",
    },
  ]

  return (
    <section id="education" className="py-16 px-4 bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[#8B5DFF]">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border border-border bg-background p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{edu.duration}</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
