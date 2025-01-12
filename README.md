# AI Prompt Generator for Web Design

This is a React-based AI prompt generator designed to help web designers and developers create detailed prompts for designing or refining website components. The app allows users to specify various parameters (e.g., section type, design style, purpose, target audience) and generates tailored prompts for AI tools like ChatGPT or design systems like Figma.

---

## **Purpose**
The purpose of this app is to:
1. **Streamline the design process**: Generate detailed prompts for creating new website components or refining existing ones.
2. **Improve AI output quality**: Provide structured and specific inputs to AI tools for better design suggestions.
3. **Save time**: Automate the creation of design prompts, reducing manual effort.

---

## **How It Works**
1. **Select a Section**: Choose the website section you want to design or refine (e.g., hero, about, services).
2. **Choose a Style**: Pick a design style (e.g., modern-minimal, bold-creative).
3. **Specify Purpose**: Describe the purpose or goals of the section (e.g., "increase conversions," "improve user engagement").
4. **Add Target Audience**: Define the target audience (e.g., "young professionals," "enterprise clients").
5. **Toggle Refinement Mode**: Switch between creating a new design or refining an existing one.
6. **Generate Prompt**: The app creates a detailed, structured prompt for AI tools or design systems.

---

## **Features**
- **Dynamic Inputs**: Customize prompts with inputs like website type, target audience, and design constraints.
- **Refinement Mode**: Generate prompts for improving existing designs by specifying current issues.
- **Tailwind CSS Support**: Include Tailwind-specific instructions for developers using the framework.
- **Responsive Design**: The app is fully responsive and works on all devices.

---

## **How to Use**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the App**:
   ```bash
   npm run dev
   ```
4. **Open in Browser**:
   Visit `http://localhost:5173` to use the app.

---

## **Example Prompts**
### **New Design Prompt**
```
Design a modern-minimal hero section for my freelance website that is both aesthetically pleasing and functional.

Key Requirements:
1. Design a hero section that immediately captures attention and communicates my role as a freelance professional.
2. Include a headline, subheadline, CTA button, and consider a professional photo or illustration.
3. Use clean lines, ample white space, and a minimalist color palette.
4. Ensure the design maintains clear hierarchy and doesn't overwhelm visitors.
5. Purpose: Showcase my skills and attract new clients.
6. Target Audience: Small business owners and startups.
```

### **Refinement Prompt**
```
Refine and improve an existing bold-creative about section for my portfolio website. The current issues are:
- The layout feels cluttered.
- The typography hierarchy is unclear.
- The color scheme doesn't align with my brand.

Key Requirements:
1. Design an about section that effectively communicates my skills and experience.
2. Include a headline, bio, skills list, and professional photo.
3. Use bold colors, creative typography, and dynamic layouts.
4. Ensure the design maintains clear hierarchy and doesn't overwhelm visitors.
5. Purpose: Highlight my expertise and attract potential employers.
6. Target Audience: Creative agencies and tech companies.
```

---

## **Technologies Used**
- **React**: Frontend framework for building the UI.
- **TypeScript**: Adds type safety and improves code quality.
- **Vite**: Fast build tool for modern web development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn/ui**: UI component library for building interactive elements.

---

## **Contributing**
Contributions are welcome! If you'd like to improve this app:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
