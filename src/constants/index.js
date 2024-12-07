import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    BlogProject,
    ASL,
    jobit,
    tripguide,
    threejs,
    samsung,
    capabl,
    Bharath_intern,
    pandas,
    python,
    numpy,
    sklearn,
    matplotlib,
    ansible,
    aws,
    Kubernetes,
    chatapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Site Reliability Engineer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    // {
    //   name: "AWS",
    //   icon: aws,
    // },
    // {
    //   name: "Docker",
    //   icon: docker,
    // },
    // {
    //   name: "Ansible",
    //   icon: ansible,
    // },
    // {
    //   name: "Kubernetes",
    //   icon: Kubernetes,
    // },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Ansible",
      icon: ansible,
    },
    {
      name: "Kubernetes",
      icon: Kubernetes,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "pandas",
      icon: pandas,
    },
    {
      name: "numpy",
      icon: numpy,
    },
    {
      name:"sklearn",
      icon:sklearn,
    },
    {
      name:"matplotlib",
      icon:matplotlib,
    }
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Bharath Intern",
      icon: Bharath_intern,
      iconBg: "#FFFF",
      date: "Sept 2023 - Oct 2023",
      points: [
        " The Portfolio project serves as a personal showcase, featuring his skills, projects, and achievements, designed with a sleek, responsive interface to create a strong online presence. The Netflix Clone replicates the popular streaming platform's interface and functionality, incorporating features such as dynamic content display, user interaction, and API integration for real-time data, demonstrating his ability to work with complex front-end technologies. Lastly, the Temperature Converter is a practical tool that allows users to convert temperature units (Celsius, Fahrenheit, and Kelvin) seamlessly, reflecting his capability to implement interactive and functional web applications. Together, these projects exhibit his proficiency in building user-centric, efficient, and visually appealing web solutions.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "SAMSUNG R&D INSTITUTE INDIA-BANGALORE PRIVATE LIMITED",
      icon: samsung,
      iconBg: "#E6DEDD",
      date: "August 2023 - August 2024",
      points: [
        "Given multi camera surround view images, objective was to generate BEV semantic occupancy grid map capturing information like showing moving objects, pedestrians, road lanes, speed bumps etc."
      ],
    },
    
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Sept 2023 - Oct 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ChatApp",
      description:
        "The ChatApp built with React for the frontend, Node.js for the backend, and Socket.IO for real-time communication provides instant messaging with features like typing indicators and live updates. React ensures a dynamic interface, while Node.js and Socket.IO enable efficient, bi-directional communication. It likely integrates Express.js for routing and a database like MongoDB for secure, scalable user and message management. This architecture supports seamless, real-time interactions in a user-friendly environment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/suarim/chatapp.git",
    },
    {
      name: "PILS",
      description:
        "The project aims to deliver a comprehensive system featuring a trained YOLO model for real-time object recognition, a user-friendly interface for generating sign language gestures, an evaluation module for assessing user proficiency, and continuous refinement based on user feedback to enhance functionality and usability.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "ffmpeg library",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "black-text-gradient",
        },
      ],
      image: ASL,
      source_code_link: "https://github.com/vranjan041/Personalized-Interactive-Leaning-System-for-Sign-Language-Acquisition-PILS-",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };