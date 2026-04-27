import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  {
    title: "Complete Practice Setup",
    description:
      "Turnkey solutions for new practices including equipment, installation, and training.",
    features: [
      "Equipment selection and procurement",
      "Professional installation",
      "Staff training programs",
      "Ongoing technical support",
    ],
    image: "https://images.unsplash.com/photo-1770321119305-f191c09c5801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjBvZmZpY2UlMjBlbXB0eSUyMGNsZWFufGVufDF8fHx8MTc3NTg1MzQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Technology Integration",
    description:
      "Seamless integration of digital workflows and practice management systems.",
    features: [
      "Digital imaging integration",
      "CAD/CAM workflow setup",
      "Practice management software",
      "Cloud-based solutions",
    ],
    image: "https://images.unsplash.com/photo-1629701764404-907eed4a139d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjb21wdXRlciUyMHRlY2hub2xvZ3klMjB3b3Jrc3BhY2UlMjBtb2Rlcm4lMjBubyUyMHBlb3BsZXxlbnwxfHx8fDE3NzU4NTM0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Equipment Maintenance",
    description:
      "Comprehensive maintenance programs to ensure optimal performance and longevity.",
    features: [
      "Preventive maintenance schedules",
      "Priority repair services",
      "Replacement parts inventory",
      "Performance optimization",
    ],
    image: "https://images.unsplash.com/photo-1746842421936-461e16dd8238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdG9vbHMlMjBlcXVpcG1lbnQlMjBzdGVyaWxlfGVufDF8fHx8MTc3NTg1MzQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function SolutionsPage() {
  return (
    <div className="relative min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#DC2626]">
            Integrated Solutions
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive services designed to support every aspect of your
            dental practice, from setup to ongoing maintenance.
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold">{solution.title}</h2>
                <p className="text-lg text-neutral-700">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
