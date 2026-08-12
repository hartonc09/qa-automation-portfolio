import { useState, useMemo } from 'react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blog-posts'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(blogPosts.map(post => post.category))]
    return cats
  }, [])

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return blogPosts
    }
    return blogPosts.filter(post => post.category === selectedCategory)
  }, [selectedCategory])

  return (
    <main data-testid="blog-page" className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-gray-900">QA Testing Blog</h1>
          <p className="mt-4 text-lg text-gray-600">
            Expert insights, best practices, and latest updates from our QA testing community
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white px-4 py-8 sm:px-6 lg:px-8 border-b border-gray-200 sticky top-14 z-30">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
