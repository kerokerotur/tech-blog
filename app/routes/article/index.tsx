import { Advertisement } from "~/components/advertisement";
import { ArticleContent } from "~/components/article-content";
import { ArticleHero } from "~/components/article-hero";
import { AuthorCard } from "~/components/author-card";
import { Breadcrumb } from "~/components/breadcrumb";
import { Header } from "~/components/header";
import { RelatedArticles } from "~/components/related-articles";
import { SupportSection } from "~/components/support-section";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Article() {

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles", active: true },
    { label: "About", href: "/about" },
  ]

  const breadcrumbItems = [
    { label: "Articles", href: "/articles" },
    { label: "Data Structures", href: "/articles/data-structures" },
    { label: "Understanding Data Structures" },
  ]

  const articleSections = [
    {
      title: "Arrays",
      content:
        "Arrays are contiguous blocks of memory that store elements of the same data type. They offer constant time access to elements based on their index, making them suitable for scenarios requiring frequent element access. However, arrays have a fixed size, and inserting or deleting elements in the middle can be inefficient.",
    },
    {
      title: "Linked Lists",
      content:
        "Linked lists consist of nodes, each containing data and a pointer to the next node. They provide flexibility in size and efficient insertion/deletion operations, but accessing elements by index requires traversing the list from the beginning. Linked lists are ideal for dynamic data storage where frequent modifications are expected.",
    },
    {
      title: "Stacks and Queues",
      content:
        "Stacks follow the Last-In-First-Out (LIFO) principle, while queues follow the First-In-First-Out (FIFO) principle. Stacks are used in scenarios like function call management and expression evaluation, while queues are used in task scheduling and breadth-first search algorithms. Both offer efficient insertion and removal operations at specific ends of the structure.",
    },
  ]

  const relatedArticles = [
    {
      title: "Advanced Tree Traversal Techniques",
      description: "Explore DFS, BFS, and other algorithms for navigating tree structures.",
      href: "/articles/tree-traversal",
    },
    {
      title: "Optimizing Hash Table Performance",
      description: "Learn about collision resolution and load balancing in hash tables.",
      href: "/articles/hash-tables",
    },
    {
      title: "Graphs in Real-World Applications",
      description: "Discover how graphs power social networks, recommendation systems, and more.",
      href: "/articles/graph-applications",
    },
    {
      title: "Introduction to Stacks and Queues",
      description: "A beginner-friendly guide to these fundamental linear data structures.",
      href: "/articles/stacks-queues",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
          <Header
            blogTitle="Tech Blog"
            navigation={navigationItems}
            userAvatar="/placeholder.svg?height=32&width=32"
            userName="User"
          />
    
          <div className="container mx-auto px-4 py-6">
            <Breadcrumb items={breadcrumbItems} />
    
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <main className="lg:col-span-2">
                <ArticleHero
                  title="Understanding Data Structures: A Comprehensive Guide"
                  heroImage="/hero-image.png"
                  heroImageAlt="Abstract blue wave patterns representing data flow"
                  author="Alex Turner"
                  publishDate="January 15, 2024"
                  readTime="10 min read"
                  tags={["Data Structures", "Algorithms", "Computer Science"]}
                />
    
                <ArticleContent
                  introduction="Data structures are fundamental building blocks in computer science, enabling efficient organization, management, and retrieval of data. This comprehensive guide covers various data structures, including arrays, linked lists, stacks, queues, trees, and graphs. We'll delve into their characteristics, operations, and use cases, providing practical examples and code snippets to illustrate their implementation. Understanding data structures is crucial for optimizing algorithm performance and designing scalable software solutions."
                  sections={articleSections}
                />
    
                <Advertisement title="Advertisement Placeholder" description="Imagine a well-placed, relevant ad here!" />
              </main>
    
              <aside className="space-y-6">
                <AuthorCard
                  name="Alex Turner"
                  title="Lead Software Engineer"
                  bio="Alex is a passionate software engineer with over 10 years of experience in building scalable and efficient systems. He loves sharing his knowledge on data structures and algorithms."
                  avatar="/placeholder.svg?height=48&width=48"
                  socialLinks={{
                    facebook: "#",
                    twitter: "#",
                    github: "#",
                  }}
                />
    
                <SupportSection
                  title="Support Our Blog"
                  description="Help us continue to provide high-quality content. Your support is greatly appreciated!"
                  buttonText="Donate"
                  disclaimer="This is a placeholder for an advertisement."
                />
    
                <RelatedArticles title="Related Articles in Data Structures" articles={relatedArticles} />
              </aside>
            </div>
          </div>
        </div>
  );
}
