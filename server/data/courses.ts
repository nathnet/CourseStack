export interface Course {
  courseId: string;
  title: string;
  provider: string;
  description: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  languages: string[];
  url: string;
  image: string;
}

export const courses: Course[] = [
  {
    courseId: "cs50",
    title: "CS50: Introduction to Computer Science",
    provider: "Harvard / edX",
    description:
      "Harvard's legendary intro to computer science. Covers C, Python, SQL, and web basics through problem sets that genuinely challenge you to think like a programmer.",
    skillLevel: "Beginner",
    topics: ["Algorithms", "Data Structures", "Web Basics", "SQL"],
    languages: ["C", "Python", "SQL", "JavaScript"],
    url: "https://www.edx.org/cs50",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlscAvljO6d6IJo8aanhISXBx1g8MxjmJF7g&s",
  },
  {
    courseId: "grokking-system-design",
    title: "Grokking Modern System Design Interview",
    provider: "Educative",
    description:
      "A structured, visual approach to cracking system design interviews. Covers scalability, load balancing, caching, databases, and real-world architectures like YouTube and Twitter.",
    skillLevel: "Intermediate",
    topics: ["System Design", "Scalability", "Databases", "Interviews"],
    languages: [],
    url: "https://www.educative.io/courses/grokking-modern-system-design-interview-for-engineers-managers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwqFYOvD5ykvZBBqwxHN2lZKe-5BR4ewGDQ&s",
  },
  {
    courseId: "llm-bootcamp",
    title: "LLM Bootcamp",
    provider: "Educative",
    description:
      "Practical, hands-on bootcamp covering large language models end-to-end — from prompting and fine-tuning to building LLM-powered products and understanding deployment tradeoffs.",
    skillLevel: "Beginner",
    topics: ["LLMs", "AI", "Prompt Engineering", "Fine-tuning"],
    languages: ["Python"],
    url: "https://www.educative.io/courses/llm-bootcamp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwqFYOvD5ykvZBBqwxHN2lZKe-5BR4ewGDQ&s",
  },
  {
    courseId: "grokking-product-architecture",
    title: "Grokking the Product Architecture Interview",
    provider: "Educative",
    description:
      "Bridges the gap between system design and product thinking. Learn how to communicate architectural decisions in terms of business goals, user needs, and trade-offs.",
    skillLevel: "Advanced",
    topics: ["System Design", "Product Thinking", "Interviews"],
    languages: [],
    url: "https://www.educative.io/courses/grokking-the-product-architecture-interview",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwqFYOvD5ykvZBBqwxHN2lZKe-5BR4ewGDQ&s",
  },
  {
    courseId: "advanced-react-patterns",
    title: "Advanced React Patterns With Hooks",
    provider: "Frontend Masters",
    description:
      "Deep dive into compound components, render props, custom hooks, and the context API. Perfect for React devs who want to write cleaner, more reusable component libraries.",
    skillLevel: "Advanced",
    topics: ["React", "Design Patterns", "Component Architecture"],
    languages: ["JavaScript", "TypeScript"],
    url: "https://www.educative.io/courses/advanced-react-patterns-with-hooks",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwqFYOvD5ykvZBBqwxHN2lZKe-5BR4ewGDQ&s",
  },
  {
    courseId: "distributed-systems",
    title: "Distributed Systems for Practitioners",
    provider: "Educative",
    description:
      "Covers consensus algorithms, replication, partitioning, consistency models, and fault tolerance with concrete examples. Essential reading before any senior backend or infrastructure role.",
    skillLevel: "Beginner",
    topics: ["Distributed Systems", "Consensus", "Fault Tolerance", "Databases"],
    languages: [],
    url: "https://www.educative.io/courses/distributed-systems-practitioners",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwqFYOvD5ykvZBBqwxHN2lZKe-5BR4ewGDQ&s",
  },
];
