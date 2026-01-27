'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SkillBadge from '@/components/ui/SkillBadge'

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML/CSS', 'HTML5 Canvas', 'Framer Motion', 'Recharts', 'Lucide React'],
  },
  {
    name: 'Backend & Cloud',
    skills: ['AWS', 'Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    name: 'Data & AI',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'SHAP', 'Streamlit', 'OpenAI API', 'Claude API', 'Gemini API', 'D3.js'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'DuckDB', 'Google BigQuery'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'Vercel', 'Docker', 'GitHub Actions', 'Maven', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 transition-theme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I work with a diverse set of technologies to build cloud-native
              applications, AI-powered tools, and data-driven solutions.
            </p>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" aria-hidden="true" />
          </div>

          {/* Skill Categories */}
          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill}
                      name={skill}
                      index={categoryIndex * 6 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 bg-card rounded-xl border border-border p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {['AWS Certified Cloud Practitioner', 'Professional Scrum Master I (PSM I)', 'ITIL 4 Foundation'].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center px-3 py-1.5 text-sm font-mono bg-muted text-foreground rounded-md border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
            Always learning and exploring new technologies to stay current with
            industry trends.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
