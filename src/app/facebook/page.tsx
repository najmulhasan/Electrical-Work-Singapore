import Link from 'next/link'

export const metadata = {
  title: 'Facebook Page | Ask Engineering Pte Ltd',
  description: 'Follow Ask Engineering Pte Ltd on Facebook for updates, project showcases, and electrical tips.',
}

const FACEBOOK_URL = 'https://www.facebook.com/AskEngineeringPteLtd'

export default function FacebookPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Connect with us on Facebook</h1>
          <p className="text-gray-600 mb-8">
            We share updates, tips, and recent project highlights. Tap the button below to open our Facebook page.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Open Facebook Page
          </a>

          <div className="mt-10 text-sm text-gray-500">
            <p>
              Having trouble? Copy and paste this link into your browser:
            </p>
            <code className="block mt-2 break-all bg-gray-100 p-3 rounded">{FACEBOOK_URL}</code>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
