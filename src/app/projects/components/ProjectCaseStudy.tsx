'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const caseStudies: Record<string, { title: string; problem: string; process: string; solution: string; tools: string[] }> = {
  'dristi': {
    title: 'Dristi — AI-Powered Wearable Smart Bag',
    problem: 'Visually impaired individuals need real-time environmental awareness and emergency assistance for safe navigation.',
    process: 'Led product ideation and technical execution at Google X HackNYU 2025. Designed system architecture and MVP features including object detection and a voice user interface (VUI) for navigation. Integrated Google Maps and emergency alert APIs into a full-stack solution.',
    solution: 'Delivered an AI-powered wearable smart bag achieving 92% object detection accuracy and 95% VUI success rate. Optimized alert latency by 45% with potential 40% reduction in emergency response time. Awarded 1st place out of 120+ projects.',
    tools: ['Python', 'TensorFlow', 'Computer Vision', 'Google Maps API', 'Object Detection', 'VUI'],
  },
  'smart-traffic-signal': {
    title: 'Smart Traffic Signal Control with RL & LSTM',
    problem: 'Fixed-time traffic signals cause unnecessary wait times and inefficient traffic flow during variable demand.',
    process: 'Engineered a real-time vehicle detection system using OpenCV at 15 FPS. Developed an RL-based adaptive traffic light controller and designed an LSTM model for short-term traffic forecasting. Validated in SUMO traffic simulations.',
    solution: 'Achieved 85% detection accuracy on live video feeds. Reduced average vehicle wait time by 15.7% with the RL controller. LSTM forecasting achieved 18% MAE for reliable signal-timing adjustments.',
    tools: ['Python', 'OpenCV', 'Reinforcement Learning', 'LSTM', 'SUMO', 'PyTorch'],
  },
  'gesture-robotic-arm': {
    title: 'Gesture-Controlled Robotic Arm',
    problem: 'Industrial robotic arms require intuitive, low-latency control for remote and gamified task execution.',
    process: 'Designed a real-time hand tracking and gesture recognition system using OpenCV, TensorFlow, and MediaPipe. Developed a low-latency Bluetooth communication pipeline with PySerial. Created an interactive PyGame interface mapping gestures to robotic movements.',
    solution: 'Enabled precise control of a robotic arm through gameplay. Achieved efficient landmark data transmission via compact string encoding. Allowed remote execution of industrial tasks in a gamified environment. HackNJIT Winner.',
    tools: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe', 'PySerial', 'PyGame'],
  },
  'caldwell-astrobot': {
    title: 'Caldwell Astrobot — NASA Space Apps Challenge',
    problem: 'Robotic systems in microgravity need reliable, gesture-based control interfaces for simulated environments.',
    process: 'Led product design decisions for control interfaces. Integrated and optimized a robotic hand system for gesture-based control. Implemented Bluetooth communication for seamless operation in microgravity environments.',
    solution: 'Prioritized usability and responsiveness in simulated microgravity. Delivered a seamless, reliable gesture-controlled robotic hand for NASA Space Apps Challenge 2024.',
    tools: ['Python', 'OpenCV', 'Bluetooth', 'PySerial', 'Robotics'],
  },
  'activearc-ui': {
    title: 'ActiveArc Case Study',
    problem: 'The modern fitness industry is saturated with fragmented applications that force users to manage their health across disconnected platforms. This fragmentation leads to high cognitive load and user fatigue as individuals must switch between one app for caloric tracking, another for biometric monitoring, and a third for workout execution. This lack of a unified interface often results in data silos and high churn rates because the user cannot see a holistic view of their progress. ActiveArc was designed to solve this friction by creating a centralized ecosystem that bridges the gap between nutrition, performance, and data analytics.',
    process: 'My design process was rooted in systems thinking and atomic design principles to ensure a scalable product architecture. I began by mapping out comprehensive user flows to streamline the onboarding experience, transforming a complex data entry process into a frictionless guided journey. Using Figma, I developed a robust component library with autolayout and variants, which allowed for the creation of a seamless dual theme system. This was a critical step in addressing environmental accessibility, ensuring the interface remained legible in high glare gym settings via light mode and comfortable for evening recovery via dark mode. I also prioritized edge case management by designing complete authentication and recovery flows to ensure a professional and secure user experience.',
    solution: 'The resulting high fidelity interface provides a unified health architecture that prioritizes visual hierarchy and actionable insights. At the core of the solution is a centralized dashboard that utilizes a snapshot mental model, allowing users to view their caloric intake, active minutes, and upcoming routines in a single glance. By incorporating circular progress indicators, the design leverages the goal gradient effect to boost user motivation and daily retention. ActiveArc successfully transforms raw biometric data into a structured wellness journey, offering a professional grade tool that adapts to the user\'s lifestyle while maintaining a consistent and energetic brand identity.',
    tools: ['Figma', 'Systems Thinking', 'Atomic Design', 'Dual Theme', 'User Flows', 'Component Library'],
  },
};

export default function ProjectCaseStudy({ slug }: { slug: string }) {
  const project = caseStudies[slug] || {
    title: 'Project',
    problem: 'Overview of the challenge.',
    process: 'How we approached it.',
    solution: 'The outcome.',
    tools: ['Tool 1', 'Tool 2'],
  };

  return (
    <section className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <h1 className="font-fraunces text-4xl md:text-5xl font-semibold text-foreground mb-8">
            {project.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">
            <h3 className="font-fraunces text-lg font-semibold text-primary mb-4">Problem</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{project.problem}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">
            <h3 className="font-fraunces text-lg font-semibold text-primary mb-4">Process</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{project.process}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">
            <h3 className="font-fraunces text-lg font-semibold text-primary mb-4">Solution</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{project.solution}</p>
          </div>
          {!['activearc-ui', 'brand-identity-system', 'app-redesign', 'marketing-campaign'].includes(slug) && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8">
              <h3 className="font-fraunces text-lg font-semibold text-primary mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="px-4 py-2 rounded-full border border-primary/30 text-primary text-base"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
