# 🚀 COFAT Frontend Intern - Week 2: Practical Angular Development

> **Week 2 Focus**: Building Static Components & Real Angular Development

---

## 🎯 Week 2 Mission: Build Your First Angular Components

Welcome to Week 2! Now that you have your development environment set up, it's time to get your hands dirty with real Angular development. This week, you'll build the core static components for a COFAT-branded homepage.

### 📋 **What You'll Build This Week**

| 🧩 Component            | 📝 Description                 | 🎨 Features                                |
| ----------------------- | ------------------------------ | ------------------------------------------ |
| **🧭 Navbar Component** | Professional navigation header | Logo, Menu items, Responsive design        |
| **🎪 Hero Section**     | Eye-catching homepage banner   | COFAT branding, Call-to-action, Background |
| **📄 Footer Component** | Company information footer     | Contact info, Social links, Copyright      |

---

## 📚 Learning Objectives

By the end of Week 2, you will:

- ✅ **Understand Angular Components**: How they work and how to create them
- ✅ **Master Component Structure**: HTML templates, CSS styling, TypeScript logic
- ✅ **Practice Git Workflow**: Commit each component separately with clear messages
- ✅ **Apply COFAT Branding**: Consistent company colors, fonts, and design
- ✅ **Build Responsive Design**: Components that work on desktop and mobile

---

## 🛠️ Prerequisites Checklist

Before starting Week 2, ensure you have completed:

- [ ] ✅ All Week 1 deliverables submitted
- [ ] 🛠️ Angular CLI installed and working (`ng version`)
- [ ] 📁 `cofat-intern-playground` repository cloned locally
- [ ] 🎯 GitHub Desktop or Git CLI ready for commits
- [ ] 💻 VS Code or preferred editor configured

---

## 📅 Week 2 Daily Plan

### 🌟 **Day 1: Project Setup & Navbar Component**

**Goal**: Set up Angular project and build the navigation component

#### 📋 Tasks:

1. **🔧 Create Angular Project**

   ```bash
   cd cofat-intern-playground
   ng new cofat-homepage --routing --style=scss
   cd cofat-homepage
   ```

2. **🧭 Generate Navbar Component**

   ```bash
   ng generate component components/navbar
   ```

3. **🎨 Build Navbar Structure**

   - Company logo placeholder
   - Navigation menu (Home, About, Services, Contact)
   - Responsive hamburger menu for mobile

4. **📤 Commit Your Work**
   ```bash
   git add .
   git commit -m "feat: create Angular project with navbar component structure"
   git push origin main
   ```

**📸 End of Day 1**: Take a screenshot of your navbar component running in the browser

---

### 🎪 **Day 2: Hero Section Component**

**Goal**: Create an impressive homepage hero section

#### 📋 Tasks:

1. **🎭 Generate Hero Component**

   ```bash
   ng generate component components/hero
   ```

2. **🎨 Design Hero Content**

   - COFAT company headline
   - Compelling subtitle/description
   - Call-to-action button
   - Background image or gradient

3. **📱 Make it Responsive**

   - Desktop layout
   - Tablet adjustments
   - Mobile-friendly design

4. **📤 Commit Your Progress**
   ```bash
   git add .
   git commit -m "feat: add hero section component with responsive design"
   git push origin main
   ```

**📸 End of Day 2**: Screenshot of hero section on different screen sizes

---

### 📄 **Day 3: Footer Component**

**Goal**: Complete the page layout with a professional footer

#### 📋 Tasks:

1. **🦶 Generate Footer Component**

   ```bash
   ng generate component components/footer
   ```

2. **📋 Footer Content Structure**

   - Company information
   - Contact details
   - Social media links
   - Copyright notice

3. **🎨 Style Footer Design**

   - Multi-column layout
   - Consistent with COFAT branding
   - Clean, professional appearance

4. **📤 Commit Footer Component**
   ```bash
   git add .
   git commit -m "feat: add footer component with company information"
   git push origin main
   ```

**📸 End of Day 3**: Complete footer component screenshot

---

### 🔗 **Day 4: Component Integration**

**Goal**: Bring all components together into a cohesive homepage

#### 📋 Tasks:

1. **🧩 Update App Component**

   - Import all three components
   - Arrange in proper order: Navbar → Hero → Footer
   - Ensure proper spacing and layout

2. **🎨 Final Styling Polish**

   - Consistent color scheme
   - Proper margins and padding
   - Smooth transitions and hover effects

3. **📱 Responsive Testing**

   - Test on different screen sizes
   - Fix any layout issues
   - Ensure mobile-friendly experience

4. **📤 Integration Commit**
   ```bash
   git add .
   git commit -m "feat: integrate all components into homepage layout"
   git push origin main
   ```

**📸 End of Day 4**: Full homepage screenshot showing all components

---

### 🏁 **Day 5: Documentation & Refinement**

**Goal**: Polish your work and document your learning

#### 📋 Tasks:

1. **📝 Update Project README**

   - How to run the project
   - Component descriptions
   - Screenshots of each component

2. **🔍 Code Review & Cleanup**

   - Remove unused code
   - Add comments to your TypeScript
   - Ensure consistent naming conventions

3. **📸 Create Component Gallery**

   - Individual component screenshots
   - Full page screenshots
   - Mobile responsive examples

4. **📤 Final Week 2 Commit**
   ```bash
   git add .
   git commit -m "docs: add comprehensive README and component documentation"
   git push origin main
   ```

**📋 End of Day 5**: Complete Week 2 deliverables package

---

## 🎨 COFAT Branding Guidelines

### 🎨 **Color Palette**

```scss
// COFAT Brand Colors (from logo)
$cofat-blue: #0066cc;
$cofat-red: #dc3545;
$cofat-dark-blue: #004499;

// Supporting Colors
$text-dark: #2c3e50;
$text-light: #7f8c8d;
$background: #ffffff;
$light-gray: #f8f9fa;
```

### 🔤 **Typography**

- **Primary Font**: 'Segoe UI', -apple-system, BlinkMacSystemFont
- **Headings**: Bold, professional hierarchy
- **Body Text**: Clean, readable line-height: 1.6

### 📐 **Layout Principles**

- **Spacing**: Consistent 16px, 24px, 32px margins
- **Responsive**: Mobile-first approach
- **Components**: Modular, reusable design

---

## 🧩 Component Specifications

### 🧭 **Navbar Component Requirements**

```typescript
// navbar.component.ts structure
export class NavbarComponent {
  menuItems = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Services", route: "/services" },
    { label: "Contact", route: "/contact" },
  ];

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
```

**🎨 Design Requirements:**

- Company logo on the left
- Navigation menu in the center/right
- Responsive hamburger menu for mobile
- Hover effects on menu items
- Fixed/sticky navigation behavior

---

### 🎪 **Hero Section Requirements**

```typescript
// hero.component.ts structure
export class HeroComponent {
  companyName = "COFAT";
  headline = "Spécialiste en Faisceaux Électriques Automobiles";
  subtitle = "COFAT est spécialisée dans la production d'une gamme très variée de faisceaux électriques de câbles couvrant la totalité des besoins de l'industrie automobile : moteurs, cabines, habitacles, châssis, planches de bord, systèmes de navigation, systèmes ABS, airbag et d'autres options.";
  ctaText = "Découvrir nos Solutions";

  onCtaClick() {
    // Handle call-to-action button click
    console.log("CTA clicked");
  }
}
```

**🎨 Design Requirements:**

- Full-width background with COFAT brand colors (blue/red gradient)
- Centered content with company messaging in French
- Primary call-to-action button in COFAT red
- Responsive text sizing for automotive industry focus
- Professional, modern appearance reflecting automotive expertise

---

### 📄 **Footer Component Requirements**

```typescript
// footer.component.ts structure
export class FooterComponent {
  companyInfo = {
    name: "COFAT",
    description: "Spécialiste en faisceaux électriques automobiles",
    address: "Zone Industrielle, Tunisie",
    phone: "+216 XX XXX XXX",
    email: "contact@cofat.tn",
  };

  socialLinks = [
    { platform: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
    { platform: "Twitter", url: "#", icon: "fab fa-twitter" },
    { platform: "Facebook", url: "#", icon: "fab fa-facebook" },
  ];

  currentYear = new Date().getFullYear();
}
```

**🎨 Design Requirements:**

- Multi-column layout (Company Info | Services | Contact)
- COFAT brand colors (blue headers, red accents)
- Social media icons
- Copyright information
- Automotive industry focus in messaging
- Clean, organized appearance

---

## 📤 Week 2 Deliverables

### 📋 **Required Submissions**

1. **🔗 GitHub Repository**: Updated `cofat-intern-playground` with:

   - Complete Angular project: `cofat-homepage/`
   - Clear commit history showing component development
   - Professional README.md with setup instructions

2. **🧩 Component Files**: All three components properly structured:

   - `src/app/components/navbar/`
   - `src/app/components/hero/`
   - `src/app/components/footer/`

3. **📸 Screenshot Gallery**: Document your progress with:

   - Individual component screenshots
   - Full homepage assembly
   - Mobile responsive views
   - Before/after development progress

4. **📝 Learning Documentation**: Create `notes/week-2.md` with:
   - Daily progress summaries
   - Challenges faced and solutions
   - Angular concepts learned
   - Next week goals and questions

### 📊 **Success Criteria**

| 🎯 Criteria                | ✅ Excellent                                    | 👍 Good                                    | 📈 Needs Work               |
| -------------------------- | ----------------------------------------------- | ------------------------------------------ | --------------------------- |
| **🧩 Component Structure** | All components properly generated and organized | Most components well-structured            | Basic structure present     |
| **🎨 COFAT Branding**      | Perfect brand consistency across all components | Good branding with minor inconsistencies   | Basic branding applied      |
| **📱 Responsive Design**   | Flawless mobile/desktop experience              | Good responsive behavior                   | Basic responsive elements   |
| **💾 Git Workflow**        | Clear, logical commits for each step            | Good commit messages and organization      | Basic version control usage |
| **📚 Documentation**       | Comprehensive README and learning notes         | Good documentation with clear instructions | Basic documentation present |

---

## 🆘 Getting Help & Resources

### 📚 **Essential Resources**

- **Angular Documentation**: [angular.io/docs](https://angular.io/docs)
- **Angular Components Guide**: [angular.io/guide/component-overview](https://angular.io/guide/component-overview)
- **CSS Flexbox Guide**: [css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Responsive Design**: [developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

### 🔧 **Common Commands Reference**

```bash
# Create new component
ng generate component components/component-name

# Serve application
ng serve

# Build for production
ng build

# Check Angular version
ng version

# Add new dependency
npm install package-name
```

### 💬 **When to Ask for Help**

- 🚫 Stuck for more than 30 minutes on the same issue
- 🤔 Unsure about Angular concepts or best practices
- 💻 Build errors or configuration problems
- 🎨 Design decisions or branding questions
- 📋 Git workflow or commit message guidance

### 📞 **How to Ask for Help**

1. **📸 Screenshot** the error or issue
2. **📝 Describe** what you were trying to do
3. **🔍 Share** the exact command or code that caused the problem
4. **💭 Explain** what you expected vs. what actually happened
5. **📧 Send** via Teams or email with clear subject line

---

## 🌟 Success Tips for Week 2

### 💪 **Best Practices**

- 🔄 **Commit Often**: After each small feature completion
- 📝 **Clear Messages**: Use descriptive commit messages
- 🧪 **Test Frequently**: Check your work in the browser regularly
- 📚 **Document Learning**: Keep notes of new concepts
- 🤔 **Ask Questions**: Don't hesitate to seek clarification

### ⚡ **Productivity Tips**

- 🍅 Use Pomodoro technique (25 min work, 5 min break)
- 🎯 Focus on one component at a time
- 📱 Test responsive design on real devices
- 💾 Save your work frequently
- 🔄 Push to GitHub at the end of each day

### 🎨 **Design Tips**

- 🎨 Keep COFAT branding consistent
- 📐 Use consistent spacing throughout
- 🖼️ Add placeholder images for visual appeal
- 🎪 Make the hero section visually striking
- 📱 Test on mobile devices regularly

---

**📅 Created**: August 24, 2025  
**👨‍💼 Mentor**: Mohamed Amine  
**🏢 Company**: COFAT  
**📋 Week**: 2 of 4  
**🎯 Focus**: Practical Angular Component Development

---

_Ready to build something awesome? Let's turn your Week 1 foundation into real Angular components! 🚀_
