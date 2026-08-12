export const blogPosts = [
  // Add your blog posts here
  // Template:
  // {
  //   id: 1,
  //   title: 'Your Post Title',
  //   excerpt: 'Short summary for the listing page',
  //   content: `# Your Post Title\n\n## Section\nYour content here...`,
  //   author: 'Christopher Harton',
  //   date: '2024-08-12',
  //   category: 'Automation',
  //   image: 'https://images.unsplash.com/photo-url?w=800&h=400&fit=crop'
  // }
]

export function getBlogPost(id) {
  return blogPosts.find(post => post.id === parseInt(id))
}
