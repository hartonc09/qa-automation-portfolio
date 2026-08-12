export const blogPosts = [
  // Add your blog posts here
  {
    id: 1, // Update this ID if you already have posts in the array
    title: 'Why Switching to Playwright Changed My Automation Workflow',
    excerpt: 'After struggling with fragile wait logic and driver management in Selenium, building a framework with Playwright completely changed the trajectory of my browser automation work.',
    content: `# Why Switching to Playwright Changed My Automation Workflow\n\nBefore Playwright, my experience with browser automation was mostly trial runs.\n\nI’d experimented with Pytest and Selenium, but whenever I tried to piece together something scalable, it felt like a constant uphill battle. Between managing browser driver versions, writing fragile wait logic, and dealing with random test flakiness, setting up the foundation took more effort than writing the actual automation.\n\nBuilding my first true framework with Playwright completely changed that trajectory.\n\nA few things immediately stood out:\n\n- **Zero driver headaches:** Out-of-the-box browser binaries meant no more hunting down chrome driver versions or managing local executables.\n- **Auto-waiting that actually works:** Moving away from manual \`WebDriverWait\` calls eliminated the majority of the timing issues I kept running into with Selenium.\n- **Trace Viewer for debugging:** Stepping through DOM snapshots, network requests, and console logs at the exact moment of a failure made debugging fast and painless.\n- **Fast local execution:** Running headlessly out of the box shaved a ton of time off running scripts locally during development.\n\nIt was the first time an automation tool felt like it was accelerating my workflow instead of adding overhead.\n\nFor anyone who started out experimenting with Selenium—what was the feature or pain point that made you look for a modern alternative?`,
    author: 'Christopher Harton',
    date: '2026-08-12',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop' // Code/tech themed image
  }
]

export function getBlogPost(id) {
  return blogPosts.find(post => post.id === parseInt(id))
}