import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projectsData = [
  {
    title: "---Divine Sync---",
    category: "Full-Stack Alert App",
    tools: "Node.js, Web API, JavaScript, React.js",
    image: "/images/placeholder.webp",
  },
  {
    title: "Grocery Online Store",
    category: "E-Commerce Web Application",
    tools: "ASP.NET MVC, C#, MySQL, Web API",
    image: "/images/placeholder.webp",
  },
  {
    title: "GDG Hackathon Solution",
    category: "Winning Tech Solution",
    tools: "React.js, Node.js, Cloud & Firebase",
    image: "/images/placeholder.webp",
  },
  {
    title: "Cloud & Firebase Apps",
    category: "Cloud Computing Projects",
    tools: "AWS Cloud, Firebase, Full-Stack Web",
    image: "/images/placeholder.webp",
  },
  {
    title: "Enterprise Web API",
    category: "Backend Architecture",
    tools: "C#, ASP.NET MVC, MySQL, REST API",
    image: "/images/placeholder.webp",
  },
  {
    title: "Portfolio Web Application",
    category: "Interactive Full-Stack Web",
    tools: "React.js, Three.js, GSAP, CSS3",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    window.addEventListener("resize", setTranslateX);

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
        invalidateOnRefresh: true,
        onRefresh: () => setTranslateX(),
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      window.removeEventListener("resize", setTranslateX);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectsData.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
