export const siteContent = {
  hero: {
    name: "Ali Rabiee",
    title: "Designing neuroadaptive autonomy that earns human trust.",
    subtitle: "Ph.D. Candidate · Translational Neurorobotics Lab · University of Rhode Island",
    ctas: [
      { label: "Email me", href: "mailto:ali.rabiee@uri.edu", variant: "primary" },
      { label: "Download CV", href: "/assets/AliRabiee_CV.pdf" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/alirabiee97/" },
    ],
    description:
      "",
    metrics: [
      { label: "Applied ML + Robotics", value: "5+ yrs", detail: "Hands-on lab & industry work" },
      { label: "Systems prototyped", value: "12", detail: "Assistive & autonomous platforms" },
      { label: "Pubs across venues", value: "15+", detail: "Journals, IEEE EMBC, AIRC" },
    ],
    highlights: [
    ],
    portrait: {
      src: "/assets/images/my-photo.jpg",
      caption: "Ali Rabiee · Translational Neurorobotics Lab",
    },
  },
  profileRail: {
    lines: [
      "Ali Rabiee",
      "Ph.D. Candidate",
      "Translational Neurorobotics Lab",
      "University of Rhode Island",
      "United States",
    ],
    links: [
      { label: "Email", icon: "mail", href: "mailto:ali.rabiee@uri.edu" },
      { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/alirabiee97/" },
      { label: "X (Twitter)", icon: "x", href: "https://twitter.com/alirabiee97" },
      { label: "GitHub", icon: "github", href: "https://github.com/ali-rabiee" },
      { label: "Google Scholar", icon: "scholar", href: "https://scholar.google.com/citations?user=FoWitbgAAAAJ&hl=en" },
      { label: "ResearchGate", icon: "researchgate", href: "https://www.researchgate.net/profile/Ali-Rabiee-5/research" },
      { label: "ORCID", icon: "orcid", href: "https://orcid.org/0000-0001-6800-6247" },
    ],
  },
  gallery: [
    { src: "/assets/images/media_1.JPG", alt: "Kinova manipulation demo" },
    { src: "/assets/images/media_2.jpg", alt: "Shared autonomy experiment" },
    { src: "/assets/images/media_3.jpg", alt: "Robotics lab testing" },
    { src: "/assets/images/media_4.jpg", alt: "Human robot collaboration" },
    { src: "/assets/images/media_5.JPG", alt: "Autonomous manipulation prototype" },
    { src: "/assets/images/media_6.JPG", alt: "Field trial snapshot" },
    { src: "/assets/images/media_7.jpg", alt: "Workshop presentation" },
    { src: "/assets/images/media_8.jpg", alt: "Conference demo booth" },
  ],
  aboutMe: {
    title: "About Me",
    content: "I'm Ali! Ph.D. candidate and University Fellow in Electrical Engineering with 5+ years of experience in machine learning research, robotics, and applied industry work as a Machine Learning Engineer. My work spans robotics, reinforcement learning, computer vision, multimodal signal processing (EEG, EMG, acoustic), and generative AI systems. My current focus is human-in-the-loop intelligent systems for assistive and neurorobotic applications. Proficient in Python, C/C++, MATLAB, PyTorch, TensorFlow, ROS, and modern deep-learning/RL toolchains, with publications in top-tier venues and patents filed in LLM-based assistive copilot systems."
  },
  about: {
    intro:
      "Graduate Research Assistant at the Translational Neurorobotics Lab, building biosignal-aware autonomy and BCIs for assistive robots. Previously Machine Learning Engineer at HARA AI and researcher at Sharif University.",
    focus: [
      "Shared autonomy that mixes human intent with adaptive RL agents",
      "Closed-loop EEG and signal-processing pipelines for neuroadaptive interfaces",
      "Trustworthy perception and decision layers that travel from simulation to real hardware",
    ],
    stats: [
      { label: "Ph.D. Candidate", value: "Ph.D. Candidate" },
      { label: "Current lab", value: "Translational Neurorobotics Lab" },
      { label: "Affiliation", value: "University of Rhode Island" },
      { label: "Location", value: "Kingston, Rhode Island" },
      { label: "Research pillars", value: "Robotics · RL · EEG analytics" },
    ],
  },
  skills: [
    {
      title: "Robotics & Autonomy",
      items: [
        "Shared control, sim-to-real verification",
        "Kinova, GUI+IMU interaction, human-robot teaming",
        "ROS, MoveIt, Gazebo, PyBullet",
      ],
    },
    {
      title: "Reinforcement Learning",
      items: ["DQN, SAC, PPO, TD3, A3C", "Custom reward shaping & policy distillation", "Assistive DRL systems"],
    },
    {
      title: "Computer Vision & GenAI",
      items: ["YOLO, Mask R-CNN, ViT", "LLM-driven perception, NeRF experiments", "GAN/DCGAN pipelines"],
    },
    {
      title: "Signal Processing",
      items: [
        "EEG decoding, TCRE vs EEG benchmarking",
        "STFT, wavelets, Hilbert-Huang, Laplacian filtering",
        "ICA, NMF, adaptive denoising",
      ],
    },
    {
      title: "Software & Ops",
      items: ["Python, C/C++, MATLAB, SQL", "PyTorch, TensorFlow, Keras", "Docker, Kubernetes, AWS, Hugging Face"],
    },
    {
      title: "Hardware & Tooling",
      items: ["Sensor fusion, IMUs, vision rigs", "Arduino, Raspberry Pi", "Custom EEG + robotics testbeds"],
    },
  ],
  projects: [
    {
      title: "STREAMS · Multimodal Shared Autonomy",
      description:
        "Self-training DRL framework that fuses environment cues with user intent to deliver smooth reach-to-grasp trajectories. Achieved 96% sim success and 83% in-user studies.",
      tags: ["Reinforcement Learning", "Shared Autonomy", "Assistive Robotics"],
      link: "https://github.com/ali-rabiee/STREAMS",
      media: { type: "video", src: "/assets/videos/STREAMS_demo.mp4" },
    },
    {
      title: "Kinova RL · Co-pilot DQN",
      description:
        "ROS package that blends DQN policies with head-tracking IMUs and onboard vision to guide Kinova robotic arms for assistive tasks.",
      tags: ["ROS", "DQN", "Computer Vision"],
      link: "https://github.com/ali-rabiee/Kinova_RL",
      media: { type: "video", src: "/assets/videos/sim2real.mp4" },
    },
    {
      title: "MAGnet · Haptic Neurorehab",
      description:
        "Magnetic actuation with Extended Kalman filtering for precise force feedback during upper-limb rehabilitation, improving comfort and smoothness.",
      tags: ["Kalman Filter", "Rehabilitation", "Hardware"],
      media: { type: "video", src: "/assets/videos/Kalman1.mp4" },
    },
    {
      title: "Adaptive DRL for Severe Impairments",
      description:
        "Maps low-DoF inputs to high-dimensional robotic actions, predicting goals in real time to blend user intent with autonomous assistance.",
      tags: ["Accessibility", "Reinforcement Learning"],
      link: "https://github.com/ali-rabiee/amplification_DRL",
      media: { type: "image", src: "/assets/videos/amplification_demo.gif" },
    },
    {
      title: "Dual-Mode Robotic Control",
      description:
        "GUI + IMU interface that lets operators switch between pointer-based and motion-based control for assistive manipulation.",
      tags: ["Human-Robot Interaction", "GUI", "IMU"],
      link: "https://github.com/ali-rabiee/ClickMove-Robotics",
      media: { type: "image", src: "/assets/videos/ClickMove_demo.gif" },
    },
    {
      title: "LLM-based Autonomous Sorter",
      description:
        "Zero-shot sorting agent that interprets natural-language commands to move simulated objects by color or shape.",
      tags: ["LLM", "Simulation", "Autonomy"],
      link: "https://github.com/ali-rabiee/LLM-AutonomousSorter",
      media: { type: "video", src: "/assets/videos/LLMsorter.mp4" },
    },
    {
      title: "Text-to-Speech Copilot",
      description:
        "Streamlit experience that ingests PDFs/Word docs, summarizes content via LLMs, and generates expressive speech output.",
      tags: ["GenAI", "Accessibility"],
      link: "https://github.com/ali-rabiee/text2speech",
      media: { type: "video", src: "/assets/videos/text2speech.mp4" },
    },
    {
      title: "Autonomous Vision Reach-to-Grasp",
      description:
        "Vision-driven DQN agent for reach-to-grasp manipulation in dynamic scenes, trained for real-time deployment.",
      tags: ["DQN", "Computer Vision"],
      link: "https://github.com/ali-rabiee/Auto-Vision-Grasp",
      media: { type: "image", src: "/assets/videos/auto_grasp.gif" },
    },
    {
      title: "Face Orientation for Robot Control",
      description:
        "Real-time face detection and orientation estimation pipeline enabling gaze-driven robotic actions.",
      tags: ["Computer Vision", "Assistive Interfaces"],
      link: "https://github.com/ali-rabiee/RealTimeFaceOrientation",
      media: { type: "image", src: "/assets/videos/FaceOrientation_demo.gif" },
    },
    {
      title: "Panorama Creation Toolkit",
      description:
        "Harris corner detection, feature matching, and homography-based stitching workflow tuned for low-texture captures.",
      tags: ["Computer Vision"],
      link: "https://github.com/ali-rabiee/Keypoint-Extraction-and-Matching",
      media: { type: "image", src: "/assets/images/panorama.png" },
    },
    {
      title: "EEG Data Analysis Suite",
      description:
        "Python toolkit for 64-channel EEG: ERP extraction, Laplacian filtering, peak detection, and topographic mapping.",
      tags: ["EEG", "Signal Processing"],
      link: "https://github.com/ali-rabiee/Brain-Signal-Analysis-Topomaps",
      media: { type: "image", src: "/assets/images/EEG.png" },
    },
    {
      title: "IMDB Sentiment Intelligence",
      description:
        "End-to-end NLP workflow with sophisticated preprocessing, classical models, and clustering-driven insights.",
      tags: ["NLP", "Analytics"],
      link: "https://github.com/ali-rabiee/sentiment-analysis",
      media: { type: "image", src: "/assets/images/sentiment.png" },
    },
    {
      title: "GAN & DCGAN for Synthetic Digits",
      description:
        "Comparative study of GAN architectures on MNIST with evaluation tooling for image quality and training stability.",
      tags: ["Generative AI"],
      link: "https://github.com/ali-rabiee/GAN-digits",
      media: { type: "image", src: "/assets/images/digits.png" },
    },
  ],
  news: [
    {
      date: "January 2025",
      title: "Nature Machine Intelligence submission",
      detail:
        "Submitted our multimodal AI framework for amplifying limited user input to Nature Machine Intelligence (under review).",
    },
    {
      date: "January 2025",
      title: "STREAMS heading to AIRC 2025",
      detail:
        "Paper accepted to the IEEE International Conference on Artificial Intelligence, Robotics, and Control (AIRC).",
    },
    {
      date: "July 2024",
      title: "Shared autonomy paradigm on arXiv",
      detail:
        "Released preprint on human-centered shared autonomy for healthcare robotics (arXiv:2407.17464).",
    },
    {
      date: "November 2023",
      title: "Society for Neuroscience presentations",
      detail:
        "Presented comparative EEG/TCRE findings for reach-to-grasp BCIs and human-inspired RL grasping strategies.",
    },
  ],
  experience: {
    work: [
      {
        role: "Machine Learning Engineer",
        org: "HARA AI",
        period: "2021 – 2022",
        location: "Tehran, Iran",
        bullets: [
          "Built car-damage detection & cost estimation models for insurance workflows.",
          "Optimized computer-vision stack for vehicle identification, color detection, and claims automation.",
          "Collaborated with domain experts to align ML outputs with regulatory expectations.",
        ],
      },
      {
        role: "Teaching Assistant",
        org: "Sharif University of Technology",
        period: "2021 – 2022",
        location: "Tehran, Iran",
        bullets: ["Led sessions for ML, DL, AI, and DSP courses; crafted exams and assessments."],
      },
    ],
    research: [
      {
        role: "Graduate Research Assistant",
        org: "Translational Neurorobotics Lab",
        period: "2023 – present",
        location: "Kingston, RI, USA",
        bullets: [
          "Develop multimodal RL and EEG pipelines for biosignal-controlled robots.",
          "Design shared autonomy agents and real-time interfaces for assistive manipulation.",
          "Co-author publications, grants, and present findings across IEEE and neuroscience venues.",
        ],
      },
      {
        role: "Graduate Research Assistant",
        org: "Digital Signal Processing Laboratory (DSPL)",
        period: "2020 – 2022",
        location: "Tehran, Iran",
        bullets: [
          "Researched deep learning and signal processing for financial time-series prediction.",
          "Built LSTM/GRU and DRL trading agents with rigorous evaluation pipelines.",
        ],
      },
    ],
  },
  publications: {
    journals: [
      "A Rabiee, S Ghafoori, MH Farhadi, A Cetera, D Lin, S Ostadabbas, R Abiri. Learning Multimodal AI Algorithms for Amplifying Limited User Input into High-dimensional Control Space. Nature Machine Intelligence (under review), 2025.",
      "A Cetera, S Ghafoori, A Rabiee, Y Shahriari, R Abiri. Emergence of Non-Invasive EEG Neural Activation in Plan-to-Grasp Tasks. Journal of Neural Engineering (under review), 2025.",
      "A Rabiee, S Ghafoori, A Cetera, M Norouzi, W Besio, R Abiri. Comparative Study of Conventional and Tripolar EEG for High-Performance Reach-to-Grasp BCI Systems. IEEE TBME, 2025.",
      "S Ghafoori, A Rabiee, M Norouzi, MK Jouaneh, R Abiri. Magnetic-Based Actuating Mechanism for Robotic Rehabilitation Platforms, 2025.",
      "A Dezhkam, MT Manzuri, A Aghapour, A Karimi, A Rabiee, SM Shalmani. Bayesian-based classification for financial time-series trend prediction. The Journal of Supercomputing, 2023.",
    ],
    conferences: [
      "A Rabiee et al. STREAMS: Assistive Multimodal AI for Biosignal-Based Robotic Controls. IEEE AIRC 2025.",
      "A Rabiee et al. Wavelet Analysis of Noninvasive EEG Signals Discriminates Grasp Types. IEEE EMBC 2024.",
      "S Ghafoori, A Rabiee et al. Bispectrum Analysis of EEG Signals Discriminates Grasp Types. IEEE EMBC 2024.",
      "A Cetera, A Rabiee et al. Classification of Emerging Neural Activity for Grasp Execution using EEG-based BCI. IEEE EMBC 2024.",
    ],
    preprints: [
      "R Abiri, A Rabiee, S Ghafoori, A Cetera. Toward human-centered shared autonomy AI paradigms for human-robot teaming in healthcare. arXiv:2407.17464, 2024.",
    ],
    posters: [
      "A Rabiee et al. Decoding Reach-to-Grasp Movements: Comparative study of TCRE and EEG. Society for Neuroscience, 2023.",
      "R Beyer, A Rabiee et al. Human-Inspired Vision-Based Reaching and Grasping with RL. Society for Neuroscience, 2023.",
    ],
    grants: [
      "Adaptive Closed-Loop Robotic Exoskeleton for Upper Extremity Motor Rehabilitation. NSF Award ID 2245558.",
      "Rhode Island IDeA Network of Biomedical Research Excellence. NIH Grant P20GM103430.",
    ],
    theses: ["A Rabiee. Portfolio Formation using Deep Learning. M.Sc. Thesis, Sharif University of Technology, 2022."],
  },
  honors: [
    "Outstanding Graduate Researcher, University of Rhode Island (2024)",
    "First-Year Doctoral Fellowship Award, University of Rhode Island (2022)",
    "Ranked 1st in National University Entrance Exam for M.Sc. Computer Engineering (2020)",
    "Ranked 1st in cumulative GPA, Tehran, Iran (2020)",
    "Finalist, 25th Scientific Olympiads for University Students (2020)",
    "Top-10 undergraduate student, K. N. Toosi University (2019)",
    "Ranked 817th in National University Entrance Exam for B.Sc. (2015)",
    "IEEE Member (2023 – present)",
    "Society for Neuroscience Member (2023 – present)",
    "Scientific Association for Electrical Engineering, K. N. Toosi University (2017 – 2020)",
  ],
  contact: {
    email: "ali.rabiee@uri.edu",
    office: [
      "Department of Electrical, Computer & Biomedical Engineering",
      "Lab 370, Fascitelli Center for Advanced Engineering",
      "2 East Alumni Ave, Kingston, RI 02881, USA",
    ],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/alirabiee97/" },
      { label: "GitHub", href: "https://github.com/ali-rabiee" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=FoWitbgAAAAJ&hl=en" },
    ],
    availability: "Open to collaborations in autonomy, assistive tech, and mission-critical ML.",
  },
};

