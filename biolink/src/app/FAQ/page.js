import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar would be here - same as your other pages */}
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - 20% width */}
          <div className="w-full md:w-1/5 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="sticky top-24">
              <div className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">BioList</div>
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400">FAQ</div>
            </div>
          </div>

          {/* Right Side - 80% width */}
          <div className="w-full md:w-4/5">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              {/* FAQ Item 1 */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">What is this?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  BioList is a curated list of fast growing biotech startups driving European technological sovereignty.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Why?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We created BioList to help talented people discover high quality biotech startups in Europe that make a difference.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">How are companies selected?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Most important criteria are: level of ambition of the founding team, breakthrough innovations in biotech, 
                  and potential for significant impact in healthcare or life sciences. Giving generous equity to employees is a big plus.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Who is behind this?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  BioList is maintained by a team passionate about biotechnology and European innovation.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">How often is the list updated?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We update the list quarterly to ensure we’re featuring the most relevant and promising biotech startups.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Can I suggest a startup?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely! We welcome suggestions for biotech startups that fit our criteria.
                </p>
              </div>

              {/* FAQ Item 7 */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Do you rank the startups?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No, we don’t rank the startups. We believe each featured company is doing important work in their respective fields.
                </p>
              </div>

              {/* FAQ Item 8 */}
              <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Contact</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  If you’ve spotted a mistake or would like to suggest a startup for the list, please contact us at contact@biolist.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
