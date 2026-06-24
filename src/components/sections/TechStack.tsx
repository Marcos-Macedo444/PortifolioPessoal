"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { carouselSkills, skillGroups } from "@/data/technologies";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import type { SkillGroup, Technology } from "@/types";

const accentStyles = {
  green: {
    activeTab: "border-matrix-green/45 bg-matrix-green/10 text-matrix-green",
    icon: "border-matrix-green/25 bg-matrix-green/10 text-matrix-green",
    text: "text-matrix-green",
    bar: "from-matrix-green/70 to-matrix-cyan/55"
  },
  cyan: {
    activeTab: "border-matrix-cyan/45 bg-matrix-cyan/10 text-matrix-cyan",
    icon: "border-matrix-cyan/25 bg-matrix-cyan/10 text-matrix-cyan",
    text: "text-matrix-cyan",
    bar: "from-matrix-cyan/70 to-matrix-blue/55"
  },
  blue: {
    activeTab: "border-matrix-blue/45 bg-matrix-blue/10 text-matrix-blue",
    icon: "border-matrix-blue/25 bg-matrix-blue/10 text-matrix-blue",
    text: "text-matrix-blue",
    bar: "from-matrix-blue/70 to-matrix-cyan/55"
  },
  purple: {
    activeTab: "border-matrix-purple/45 bg-matrix-purple/10 text-matrix-purple",
    icon: "border-matrix-purple/25 bg-matrix-purple/10 text-matrix-purple",
    text: "text-matrix-purple",
    bar: "from-matrix-purple/70 to-matrix-green/55"
  }
} satisfies Record<SkillGroup["accent"], Record<"activeTab" | "icon" | "text" | "bar", string>>;

export function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = useMemo(() => [...carouselSkills, ...carouselSkills], []);
  const activeGroup = skillGroups[activeIndex] ?? skillGroups[0];

  return (
    <section id="tecnologias" className="relative py-20 sm:py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow="scanning skills"
          title="Skill matrix por áreas de atuação"
          description="Competências agrupadas como um painel técnico: menos ruído visual, mais leitura rápida do que sustenta cada projeto."
        />

        <div className="lg:hidden">
          <div
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Categorias de competências"
          >
            {skillGroups.map((group, index) => {
              const styles = accentStyles[group.accent];
              const isActive = index === activeIndex;

              return (
                <button
                  key={group.title}
                  id={`skill-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="skill-panel"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "shrink-0 rounded-md border px-3 py-2 font-mono text-xs transition",
                    isActive
                      ? styles.activeTab
                      : "border-white/10 bg-white/[0.03] text-matrix-muted hover:border-white/20 hover:text-matrix-text"
                  )}
                >
                  {group.title}
                </button>
              );
            })}
          </div>

          <SkillGroupCard group={activeGroup} index={0} id="skill-panel" labelledBy={`skill-tab-${activeIndex}`} compact />
        </div>

        <div className="hidden gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.title} group={group} index={index} />
          ))}
        </div>

        <div className="cyber-panel mt-8 overflow-hidden rounded-lg py-3 sm:mt-10 sm:py-4">
          <div className="flex w-max animate-ticker-slow gap-3 px-3 motion-reduce:animate-none sm:gap-4 sm:px-4">
            {carouselItems.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="min-w-36 rounded-md border border-matrix-cyan/15 bg-white/[0.035] px-4 py-2.5 text-center font-mono text-xs text-matrix-cyan/90 sm:min-w-40 sm:px-5 sm:py-3 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type SkillGroupCardProps = {
  group: SkillGroup;
  index: number;
  compact?: boolean;
  id?: string;
  labelledBy?: string;
};

function SkillGroupCard({ group, index, compact = false, id, labelledBy }: SkillGroupCardProps) {
  const GroupIcon = group.icon;
  const styles = accentStyles[group.accent];
  const averageSignal = Math.round(
    group.skills.reduce((total, skill) => total + skill.signal, 0) / group.skills.length
  );

  return (
    <motion.article
      id={id}
      role={compact ? "tabpanel" : undefined}
      aria-labelledby={labelledBy}
      className="cyber-panel rounded-lg p-4 transition duration-300 hover:border-white/20 hover:bg-matrix-panel/85 sm:p-5"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.38, delay: compact ? 0 : index * 0.035 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-md border", styles.icon)}>
            <GroupIcon className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-matrix-text">{group.title}</h3>
            <p className="mt-1 text-sm leading-6 text-matrix-muted">{group.description}</p>
          </div>
        </div>
        <div className="hidden shrink-0 text-right sm:block">
          <p className={cn("font-mono text-xl font-semibold", styles.text)}>{averageSignal}%</p>
          <p className="font-mono text-[0.65rem] uppercase text-matrix-muted">sinal médio</p>
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {group.skills.map((technology) => (
          <SkillSignalRow key={technology.name} technology={technology} accent={group.accent} />
        ))}
      </ul>
    </motion.article>
  );
}

type SkillSignalRowProps = {
  technology: Technology;
  accent: SkillGroup["accent"];
};

function SkillSignalRow({ technology, accent }: SkillSignalRowProps) {
  const Icon = technology.icon;
  const styles = accentStyles[accent];

  return (
    <li className="border-t border-white/[0.07] pt-3 first:border-t-0 first:pt-0">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Icon className={cn("h-4 w-4 shrink-0", styles.text)} aria-hidden />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-matrix-text">{technology.name}</p>
            <p className="truncate text-xs text-matrix-muted">{technology.area}</p>
          </div>
        </div>
        <div className="shrink-0 text-right font-mono text-xs">
          <p className={styles.text}>{technology.level}</p>
          <p className="text-matrix-muted">{technology.signal}%</p>
        </div>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
        <motion.div
          className={cn("h-full rounded-full bg-gradient-to-r", styles.bar)}
          initial={{ width: 0 }}
          whileInView={{ width: `${technology.signal}%` }}
          viewport={{ once: false }}
          transition={{ duration: 0.75 }}
        />
      </div>
    </li>
  );
}
