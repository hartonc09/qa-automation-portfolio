import { useParams, Link } from 'react-router-dom'
import { getBlogPost, blogPosts } from '../data/blog-posts'

export default function BlogPostPage() {
  const { id } = useParams()
  const post = getBlogPost(id)

  if (!post) {
    return (
      <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-900">Post Not Found</h1>
          <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="mt-8 inline-block text-indigo-600 font-semibold hover:text-indigo-700">
            ← Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <main data-testid="blog-post-page" className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-96 bg-gray-200 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article */}
      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <Link to="/blog" className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center mb-6">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="mb-4">
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {post.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <time className="text-sm text-gray-500">{formattedDate}</time>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length
                const text = paragraph.replace(/^#+\s/, '')
                const className = level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'
                return (
                  <div key={idx} className={`${className} font-bold text-gray-900 mt-8 mb-4`}>
                    {text}
                  </div>
                )
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="ml-4">{item.replace(/^-\s/, '')}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-200">
            {prevPost && (
              <Link
                to={`/blog/${prevPost.id}`}
                className="group flex flex-col p-4 border border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-all"
              >
                <span className="text-sm text-gray-600 mb-2">← Previous Article</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {prevPost.title}
                </h3>
              </Link>
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.id}`}
                className="group flex flex-col p-4 border border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition-all md:col-start-2"
              >
                <span className="text-sm text-gray-600 mb-2 text-right">Next Article →</span>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 text-right">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </article>
    </main>
  )
}
