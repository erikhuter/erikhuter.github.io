// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "My projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Undergraduate Teaching Assistant.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Here is a website accessible version of my CV. For a PDF format, navigate back to the homepage and click the &quot;CV&quot; icon in the top right. ** Note, this CV is unfinished. **",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-photos",
          title: "Photos",
          description: "This is a collection of some of my favorite pictures.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "projects-example-questions-and-solutions",
          title: 'Example Questions and Solutions',
          description: "Selected solutions for various example questions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/example.html";
            },},{id: "projects-lectures-on-analysis-on-metric-spaces-by-juha-heinonen",
          title: 'Lectures on Analysis on Metric Spaces by Juha Heinonen',
          description: "Selected solutions for various questions from this book.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/heinonen.html";
            },},{id: "projects-introduction-to-smooth-manifolds-by-john-lee",
          title: 'Introduction to Smooth Manifolds by John Lee',
          description: "Selected solutions for various questions from this book.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lee.html";
            },},{id: "projects-real-and-complex-analysis-by-walter-rudin",
          title: 'Real and Complex Analysis by Walter Rudin',
          description: "Selected solutions for various questions from this book.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/papa_rudin.html";
            },},{id: "projects-calculus-on-manifolds-by-micahel-spivak",
          title: 'Calculus on Manifolds by Micahel Spivak',
          description: "Selected solutions for various questions from this book.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spivak.html";
            },},{id: "projects-template",
          title: 'Template',
          description: "Selected solutions for various questions from this book.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Huter_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%75%74%65%72.%65%72%69%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/erikhuter", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/erikhuter", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
