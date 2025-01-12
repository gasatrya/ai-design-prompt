export const sections = {
  hero: {
    base: 'Design a hero section that immediately captures attention and communicates my role as a freelance professional.',
    elements:
      'Include a headline, subheadline, CTA button, and consider a professional photo or illustration.',
    considerations:
      "Ensure the design maintains clear hierarchy and doesn't overwhelm visitors.",
  },
  about: {
    base: 'Create an about section that tells my professional story and builds trust.',
    elements:
      'Include a professional bio, skills list, experience highlights, and possibly testimonials.',
    considerations:
      'Balance personal branding with professional accomplishments.',
  },
  services: {
    base: 'Design a services section that clearly communicates my offerings.',
    elements:
      'Include service cards/tiles with icons, titles, and brief descriptions.',
    considerations:
      'Make it scannable and ensure pricing or key info stands out.',
  },
  portfolio: {
    base: 'Create a portfolio gallery that showcases my best work in an impactful way.',
    elements:
      'Include project thumbnails, categories, filters, and detailed project pages.',
    considerations:
      'Focus on visual hierarchy and ensure smooth navigation between projects.',
  },
  projects: {
    base: 'Design a projects section that demonstrates the depth and breadth of my work.',
    elements:
      'Include project cards with images, descriptions, technologies used, and outcomes.',
    considerations:
      'Highlight the problem-solving process and results achieved.',
  },
  features: {
    base: 'Create a features section that highlights my unique selling points and specialties.',
    elements:
      'Include feature cards with icons, compelling headlines, and brief explanations.',
    considerations: 'Focus on benefits rather than technical details.',
  },
  testimonials: {
    base: 'Design a testimonials section that builds credibility through client feedback.',
    elements:
      'Include client photos, quotes, names, positions, and company logos.',
    considerations:
      'Ensure authenticity and maintain professional presentation.',
  },
  process: {
    base: 'Create a work process section that explains how I collaborate with clients.',
    elements:
      'Include step-by-step visualization, icons, and brief descriptions of each phase.',
    considerations: 'Make it easy to understand and show professionalism.',
  },
  pricing: {
    base: 'Design a pricing section that clearly presents my service packages or rates.',
    elements: 'Include pricing tables, package features, and clear CTAs.',
    considerations: 'Maintain clarity and highlight value propositions.',
  },
  skills: {
    base: 'Create a skills section that showcases my technical and professional capabilities.',
    elements:
      'Include skill categories, progress bars or ratings, and relevant certifications.',
    considerations:
      'Organize skills logically and avoid overwhelming visitors.',
  },
  blog: {
    base: 'Design a blog section that positions me as a thought leader in my field.',
    elements:
      'Include article cards with thumbnails, titles, excerpts, and categories.',
    considerations: 'Ensure good readability and easy navigation.',
  },
  contact: {
    base: 'Create a contact section that encourages potential clients to reach out.',
    elements:
      'Include a contact form, social links, and possibly a map or office hours.',
    considerations: "Keep it clean and ensure the form isn't intimidating.",
  },
  footer: {
    base: 'Design a footer that provides easy access to important information and navigation.',
    elements:
      'Include social links, quick links, contact info, and possibly a newsletter signup.',
    considerations:
      'Organize information clearly and maintain brand consistency.',
  },
}

export const styles = {
  'modern-minimal':
    'Use clean lines, ample white space, and a minimalist color palette.',
  'bold-creative':
    'Incorporate dynamic elements, gradients, and creative typography.',
  'professional-corporate':
    'Maintain a formal structure with traditional grid layouts and business-appropriate colors.',
  'tech-focused':
    'Use geometric patterns, dark mode elements, and tech-inspired visuals.',
  'artistic-expressive':
    'Employ unique layouts, artistic elements, and creative interactions.',
  'luxury-elegant':
    'Utilize refined typography, sophisticated colors, and premium-feeling spacing.',
}

export const generateRefinementPrompt = (
  section: keyof typeof sections,
  style: keyof typeof styles,
  purpose: string,
  useTailwind: boolean,
  currentIssues: string,
  websiteType: string
) => {
  const selectedSection = sections[section]
  const selectedStyle = styles[style]

  let prompt = `Refine and improve an existing ${style.replace(
    '-',
    ' '
  )} ${section} section for my ${websiteType} website. The current issues are:
  
${currentIssues}

Key Requirements:
1. ${selectedSection.base}
2. ${selectedSection.elements}
3. ${selectedStyle}
4. ${selectedSection.considerations}
5. Purpose: ${purpose || '[Add specific purpose]'}

Refinement Focus Areas:
- Improve visual hierarchy and layout
- Enhance user experience and interaction
- Optimize for better performance
- Increase accessibility and responsiveness
- Modernize the design while maintaining brand identity
- Address specific issues mentioned above`

  if (useTailwind) {
    prompt += `

Tailwind CSS Refinement:
- Review and optimize existing Tailwind classes
- Suggest improvements for:
  • Layout structure
  • Responsive design
  • Color usage
  • Typography hierarchy
  • Animation and interaction patterns
- Provide updated Tailwind class recommendations`
  }

  return prompt
}

export const generatePrompt = (
  section: keyof typeof sections,
  style: keyof typeof styles,
  purpose: string,
  useTailwind: boolean,
  websiteType: string
) => {
  const selectedSection = sections[section]
  const selectedStyle = styles[style]

  let prompt = `Design a ${style.replace(
    '-',
    ' '
  )} ${section} section for my ${websiteType} website that is both aesthetically pleasing and functional.

Key Requirements:
1. ${selectedSection.base}
2. ${selectedSection.elements}
3. ${selectedStyle}
4. ${selectedSection.considerations}
5. Purpose: ${purpose || '[Add specific purpose]'}

Additional Specifications:
- Ensure the design is responsive and works well on all devices
- Use modern typography and maintain consistent spacing
- Incorporate smooth animations and transitions where appropriate
- Follow current web accessibility guidelines
- Keep the layout clean and professional
- Consider dark/light mode compatibility
- Optimize for fast loading and performance

Please provide specific details about:
- Color palette recommendations
- Typography pairings
- Layout structure and grid system
- Interactive elements and hover states
- Spacing and padding guidelines
- Responsive breakpoints
- Micro-interactions and animations
- Content hierarchy and visual flow`

  if (useTailwind) {
    prompt += `

Tailwind CSS Implementation:
- Utilize Tailwind's utility-first approach for all styling
- Provide specific Tailwind classes for:
  • Layout (grid, flex, containers)
  • Spacing (padding, margin, gap)
  • Typography (font size, weight, leading)
  • Colors (text, background, borders)
  • Responsive design (sm:, md:, lg:, xl:)
  • Hover/focus states (hover:, focus:)
  • Dark mode (dark:)
  • Animations (transition, transform)
- Use @apply directives for repeated class combinations
- Leverage Tailwind's built-in color palette
- Include responsive class variations
- Implement container queries where appropriate
- Use Tailwind's grid system for layouts
- Utilize Tailwind's preset breakpoints
- Include component-specific variants

Example Class Structure:
\`\`\`html
<div class="container mx-auto px-4 py-8 md:py-12 lg:py-16">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Component structure with Tailwind classes -->
  </div>
</div>
\`\`\``
  }

  return prompt
}
