import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useState, useMemo } from 'react'
import {
  sections,
  styles,
  generatePrompt,
  generateRefinementPrompt,
} from '@/lib/prompt-utils'

const PromptGenerator = () => {
  const [section, setSection] = useState<keyof typeof sections>('hero')
  const [style, setStyle] = useState<keyof typeof styles>('modern-minimal')
  const [purpose, setPurpose] = useState('')
  const [useTailwind, setUseTailwind] = useState(false)
  const [isRefinement, setIsRefinement] = useState(false)
  const [currentIssues, setCurrentIssues] = useState('')
  const [websiteType, setWebsiteType] = useState('')
  const [targetAudience, setTargetAudience] = useState('')

  const generatedPrompt = useMemo(() => {
    return isRefinement
      ? generateRefinementPrompt(
          section,
          style,
          purpose,
          useTailwind,
          currentIssues,
          websiteType,
          targetAudience
        )
      : generatePrompt(
          section,
          style,
          purpose,
          useTailwind,
          websiteType,
          targetAudience
        )
  }, [
    isRefinement,
    section,
    style,
    purpose,
    useTailwind,
    currentIssues,
    websiteType,
    targetAudience,
  ])

  return (
    <Card className='w-full max-w-2xl'>
      <CardHeader>
        <CardTitle>Website Section Design Prompt Generator</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Select Section</label>
          <Select
            value={section}
            onValueChange={(value) =>
              setSection(value as keyof typeof sections)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder='Choose section...' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='hero'>Hero Section</SelectItem>
              <SelectItem value='about'>About</SelectItem>
              <SelectItem value='services'>Services</SelectItem>
              <SelectItem value='portfolio'>Portfolio Gallery</SelectItem>
              <SelectItem value='projects'>Projects</SelectItem>
              <SelectItem value='features'>Features</SelectItem>
              <SelectItem value='testimonials'>Testimonials</SelectItem>
              <SelectItem value='process'>Work Process</SelectItem>
              <SelectItem value='pricing'>Pricing</SelectItem>
              <SelectItem value='skills'>Skills</SelectItem>
              <SelectItem value='blog'>Blog</SelectItem>
              <SelectItem value='contact'>Contact</SelectItem>
              <SelectItem value='footer'>Footer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Design Style</label>
          <Select
            value={style}
            onValueChange={(value) => setStyle(value as keyof typeof styles)}
          >
            <SelectTrigger>
              <SelectValue placeholder='Choose style...' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='modern-minimal'>Modern Minimal</SelectItem>
              <SelectItem value='bold-creative'>Bold Creative</SelectItem>
              <SelectItem value='professional-corporate'>
                Professional Corporate
              </SelectItem>
              <SelectItem value='tech-focused'>Tech Focused</SelectItem>
              <SelectItem value='artistic-expressive'>
                Artistic Expressive
              </SelectItem>
              <SelectItem value='luxury-elegant'>Luxury Elegant</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Specific Purpose/Goals</label>
          <Textarea
            placeholder='e.g., Showcase UX/UI design work, Attract enterprise clients...'
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className='h-20'
          />
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Website Type</label>
          <Input
            placeholder='e.g., freelance, e-commerce, portfolio, corporate...'
            value={websiteType}
            onChange={(e) => setWebsiteType(e.target.value)}
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Target Audience</label>
          <Textarea
            placeholder='e.g., young professionals, enterprise clients, creative agencies...'
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className='h-20'
          />
        </div>

        <div className='flex items-center space-x-2'>
          <Checkbox
            id='refinement'
            checked={isRefinement}
            onCheckedChange={(checked) => setIsRefinement(checked === true)}
          />
          <label
            htmlFor='refinement'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Refine Existing Component
          </label>
        </div>

        {isRefinement && (
          <div className='space-y-2'>
            <label className='text-sm font-medium'>
              Current Issues/Problems
            </label>
            <Textarea
              placeholder='Describe current issues with the component...'
              value={currentIssues}
              onChange={(e) => setCurrentIssues(e.target.value)}
              className='h-20'
            />
          </div>
        )}

        <div className='flex items-center space-x-2'>
          <Checkbox
            id='tailwind'
            checked={useTailwind}
            onCheckedChange={(checked) => setUseTailwind(checked === true)}
          />
          <label
            htmlFor='tailwind'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Use Tailwind CSS
          </label>
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium'>Generated Prompt</label>
          <div className='p-4 bg-gray-50 rounded-lg text-sm whitespace-pre-wrap'>
            {generatedPrompt}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PromptGenerator
