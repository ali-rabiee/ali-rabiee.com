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
    content: "I'm Ali! Ph.D. candidate and University Fellow in Electrical Engineering with 5+ years of experience in machine learning research, robotics, and applied industry work as a Machine Learning Engineer. My work spans robotics, reinforcement learning, computer vision, multimodal signal processing (EEG, EMG, acoustic), and generative AI systems. My current focus is human-in-the-loop intelligent systems for assistive and neurorobotic applications. Proficient in Python, C/C++, MATLAB, PyTorch, TensorFlow, ROS, and modern deep-learning/RL toolchains, with publications in top-tier venues and patents filed in LLM-based assistive copilot systems.",
    education: [
      {
        degree: "Ph.D. in Electrical Engineering (AI and Robotics)",
        period: "Jan 2023 - Sep 2026",
        institution: "University of Rhode Island, RI, US",
        details: "Dissertation: Biosignal-based Shared Autonomy Paradigms for User-machine Interfaces (GPA: 3.90/4.00)",
      },
      {
        degree: "M.S. in Computer Engineering (AI and Robotics)",
        period: "Sep 2020 - Sep 2022",
        institution: "Sharif University of Technology",
        details: "Thesis: Portfolio Formation Using Deep Learning (GPA: 4.00/4.00)",
      },
      {
        degree: "B.S. in Electrical Engineering (Control Systems)",
        period: "Sep 2015 - Sep 2020",
        institution: "K. N. Toosi University of Technology",
        details: "Thesis: Design and Fabrication of a Novel and Cost Friendly Fire Alarm System (GPA: 3.52/4.00)",
      },
    ],
    experience: [
      {
        role: "Ph.D. Candidate in Machine Learning & Robotics",
        period: "Jan 2023 - Present",
        organization: "University of Rhode Island (TNLab), Funded by URI Fellowship and NSF",
        bullets: [
          "Enhanced multimodal frameworks for shared autonomy by combining imitation learning, computer vision, and reinforcement learning that reduced required user inputs by 45%, lowered NASA-TLX workload scores by more than 50%, and increased success rate by 35%.",
          "Built and tested robotic control systems in ROS, enabling seamless simulation-to-real (Sim2Real) transfer of RL models from simulated tasks to real-world assistive platforms, retaining 90% of simulated performance.",
          "Improved an RL controller that fuses noisy head-movement inputs with RGB-D vision, raising reach-to-grasp success from 44% to 83% in zero-shot Sim2Real trials (98% in simulation) and cutting subjective task load by 45%.",
          "Leveraged GPT4o-based dialogue layer to enhance interactive capabilities and natural language communication, facilitating more efficient and adaptable human-in-the-loop control in assistive robotics, and resulting in a provisional patent on language-driven assistive control.",
          "Led capstone teams working with diverse software and hardware systems, including motion capture setups and robotic platforms; authored peer-reviewed papers, directed experiments, supported grant proposals, managed data collection and study design, presented findings at conferences, and contributed to the journal peer-review process.",
        ],
      },
      {
        role: "Robotics & Reinforcement Learning Engineer Intern",
        period: "Sep 2025 - Dec 2025",
        organization: "Familiar Machines & Magic — Physical AI startup building embodied AI systems",
        bullets: [
          "Developed advanced locomotion and pose-control policies for quadruped robots in Isaac Sim / Isaac Lab, leveraging PPO and generative action models to achieve a unified policy capable of over 200+ gait styles and poses.",
          "Designed a Generative Action Policy Architecture enabling style-conditioned gait modulation, improving policy generalization, versatility, and zero-shot adaptation across terrains and dynamic scenarios.",
          "Enhanced control stability by reducing the action-rate L2 by 80%, resulting in significantly smoother joint commands and 70% improvement in robustness to external disturbances, domain randomization, and push-recovery tests.",
          "Integrated LLM-based Inner Monologue to enable emotion-aware, expressive robot behaviors and more transparent human–robot interaction.",
        ],
      },
      {
        role: "Machine Learning Engineer",
        period: "Mar 2021 - Jul 2022",
        organization: "HARA AI (hara.ai)",
        bullets: [
          "Designed and implemented custom computer vision architectures for vehicle analysis tasks including model recognition, color detection, and fine-grained damage assessment.",
          "Improved and optimized vision-based damage and cost estimation models, raising mAP@0.5 IoU from 0.74 to 0.91 and boosting classification accuracy by 15%, while sustaining 45 ms/image inference in production.",
          "Deployed models via MLflow for real-time, scalable vehicle assessment; curated large-scale image datasets and built streamlined annotation pipelines to improve data quality and training efficiency.",
          "Led A/B testing and error analysis to iteratively refine model performance and reduce false positives by 12%; presented results to stakeholders, highlighting time savings and improved evaluation consistency.",
        ],
      },
      {
        role: "Machine Learning Researcher",
        period: "Sep 2020 - May 2022",
        organization: "Digital Data Processing Laboratory (DDPL)",
        bullets: [
          "Advanced time-series analysis by using various custom deep learning architectures, and designed deep reinforcement learning agents for automated trading bots.",
          "Enhanced a Bayesian-based classification framework for market trend prediction, hitting 80% accuracy.",
          "Improved custom deep learning models, including LSTM and GRU architectures, for stock market prediction and financial time-series analysis.",
        ],
      },
    ],
  },
  highlights: [
    { value: "5+", label: "years of ML and robotics research experience" },
    { value: "2+", label: "years of applied industry experience in machine learning" },
    { value: "10+", label: "publications in top-tier journals and conferences" },
    { value: "5+", label: "prototypes on shared-autonomy and RL frameworks" },
  ],
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
      title: "Robotics & Autonomous Systems",
      items: [
        "Kinematics, dynamics, and control",
        "Reinforcement learning & imitation learning for robot policies",
        "Motion/path planning, HRI, shared autonomy",
        "Sensor fusion (LiDAR, RGB-D, IMUs) and perception pipelines",
        "ROS/ROS2 development, simulation (PyBullet, Isaac Lab, Gazebo), sim-to-real transfer",
      ],
    },
    {
      title: "ML & Reinforcement Learning",
      items: [
        "Deep RL (PPO, SAC, TD3, DDPG), policy gradients, actor–critic methods",
        "Imitation & inverse RL, generative skill learning",
        "Custom reward shaping, curriculum learning, behavior cloning",
      ],
    },
    {
      title: "Computer Vision & 3D Perception",
      items: [
        "CNNs & Vision Transformers",
        "Object detection, segmentation, pose estimation",
        "Point clouds, voxel processing, SLAM, multi-view geometry",
      ],
    },
    {
      title: "NLP & Language Models",
      items: [
        "Transformer models (BERT, GPT family, instruction-tuned LLMs)",
        "Text representation, retrieval, sentiment & intent modeling",
        "Prompt engineering and agentic/LLM pipeline design",
      ],
    },
    {
      title: "Generative AI",
      items: [
        "Diffusion models, VAEs, GANs",
        "Multimodal generative systems (text–vision–action models)",
        "LLM-based copilots for robotics & human-in-the-loop systems",
      ],
    },
    {
      title: "Signal Processing",
      items: [
        "Time-series modeling (LSTM/GRU, transformers)",
        "EEG/EMG/tEEG processing, feature extraction, spectral & time–frequency analysis",
        "Kalman filtering, ICA/NMF, denoising & sensor enhancement",
      ],
    },
  ],
  technicalSkills: [
    {
      category: "Programming",
      tools: "Python, C/C++, MATLAB, SQL",
    },
    {
      category: "Machine Learning & AI",
      tools: "TensorFlow, PyTorch, torchvision, Scikit-learn, Keras, OpenAI Gym, OpenCV, PIL",
    },
    {
      category: "Robotics",
      tools: "ROS, MoveIt, PyBullet, Gazebo",
    },
    {
      category: "Data Analysis & Visualization",
      tools: "NumPy, Pandas, Matplotlib, Seaborn, Plotly, SKLearn, SciPy",
    },
    {
      category: "Tools",
      tools: "Git, GitHub, Docker, Kubernetes, Streamlit, Hugging Face, AWS",
    },
    {
      category: "Hardware",
      tools: "Sensor fusion, Microcontrollers, Arduino, Raspberry Pi",
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

