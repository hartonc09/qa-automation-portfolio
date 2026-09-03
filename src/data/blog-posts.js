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
  },
  {
    id: 2,
    title: 'Playwright Trace Viewer: A Time Machine for Test Runs',
    excerpt: 'Playwright Trace Viewer turns CI debugging from a trial-and-error ritual into a fast investigation with DOM snapshots, network timelines, and precise action logs.',
    content: `# Playwright Trace Viewer: A Time Machine for Test Runs\n\nBefore I started using Playwright, debugging a failed test in CI usually looked like this:\n\n1. Look at a static, blurry screenshot of the failure.\n2. Read through wall-of-text console logs trying to figure out what happened 3 seconds prior.\n3. Re-run the test locally and hope it fails the exact same way.\n\nWhen I started using Playwright's Trace Viewer, that whole trial-and-error ritual disappeared.\n\nIf you haven't used it yet, Trace Viewer isn't just a static report - it's essentially a time machine for your test runs:\n\n- **Full DOM Snapshots:** You can hover over any step in your test and see what the page looked like Before, During, and After an action. Because it's a real DOM snapshot, you can even open DevTools and inspect elements inside the recording.\n- **Network Call Timelines:** You get a full breakdown of every API request and response happening in the background at the exact millisecond of the failure.\n- **Console & Action Logs:** You can see precise timing, action durations, and locator evaluation in real-time.\n\nInstead of guessing why a click failed or an element didn't load, you can step backward through the execution timeline to see the exact state change that broke things. It turned what used to be a 30-minute investigation into a 2-minute fix.\n\nFor anyone using Playwright in production - do you rely on Trace Viewer for local debugging, or do you mostly use it to inspect CI/CD failure artifacts?\n\n**Tags:** #Playwright #SoftwareTesting #TestAutomation #QAEngineering #DevOps`,
    author: 'Christopher Harton',
    date: '2026-09-03',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
  }
]

export function getBlogPost(id) {
  return blogPosts.find(post => post.id === parseInt(id))
}