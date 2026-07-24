import React from 'react';

export default function QAMatrix() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header & GitHub CI/CD Status Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">QA Coverage Matrix</h1>
          <p className="text-slate-600 mt-1">Real-time automation status and test suite mapping.</p>
        </div>
        <div>
          {/* Real-time GitHub Action Status Badge */}
          <a 
            href="https://github.com/hartonc09/qa-automation-portfolio/actions/workflows/playwright.yml" 
            target="_blank" 
            rel="noreferrer"
          >
            <img 
              src="https://github.com/hartonc09/qa-automation-portfolio/actions/workflows/playwright.yml/badge.svg" 
              alt="Playwright Test Status" 
              className="h-8"
            />
          </a>
        </div>
      </div>

      {/* Live Playwright Report Banner */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-indigo-950">Interactive Playwright Test Reports</h2>
          <p className="text-sm text-indigo-700 mt-1">
            View detailed test step execution, trace logs, and screenshots from our latest automated CI run.
          </p>
        </div>
        <a 
          href="https://chrishartonqa.com/reports/" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-md shadow-sm transition whitespace-nowrap"
        >
          View Live Report ↗
        </a>
      </div>

      {/* Test Coverage Matrix Table */}
      <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-700">Functional Area</th>
              <th className="p-4 font-semibold text-slate-700">E2E Tests</th>
              <th className="p-4 font-semibold text-slate-700">Accessibility (a11y)</th>
              <th className="p-4 font-semibold text-slate-700">Chaos / Error Handling</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            <tr>
              <td className="p-4 font-medium text-slate-900">Product Catalog</td>
              <td className="p-4 text-emerald-600 font-semibold"> Covered</td>
              <td className="p-4 text-emerald-600 font-semibold"> Covered (WCAG 2.1)</td>
              <td className="p-4 text-slate-400">N/A</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-slate-900">E-Commerce Checkout</td>
              <td className="p-4 text-emerald-600 font-semibold"> Covered</td>
              <td className="p-4 text-emerald-600 font-semibold"> Covered</td>
              <td className="p-4 text-emerald-600 font-semibold"> Covered (500 handling)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-slate-900">QA Dev Tools Drawer</td>
              <td className="p-4 text-emerald-600 font-semibold"> Covered</td>
              <td className="p-4 text-emerald-600 font-semibold"> Covered</td>
              <td className="p-4 text-emerald-600 font-semibold"> Covered (Network delays)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Detailed Automated Test Cases Section */}
      <div className="bg-white rounded-lg shadow border border-slate-200 overflow-hidden mt-8">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Automated Test Inventory & Scenarios</h2>
          <p className="text-sm text-slate-600 mt-1">A human-readable breakdown of execution logic for each Playwright test.</p>
        </div>
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-700">Spec File</th>
              <th className="p-4 font-semibold text-slate-700">Test Scenario</th>
              <th className="p-4 font-semibold text-slate-700">Execution Steps & Verifications</th>
              <th className="p-4 font-semibold text-slate-700">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
            <tr>
              <td className="p-4 font-mono text-xs text-indigo-600 font-semibold">e2e-checkout.spec.js</td>
              <td className="p-4 font-medium text-slate-900">End-to-End Cart & Promo Discount Flow</td>
              <td className="p-4">
                Adds item to cart, applies valid promo code, verifies state updates to calculate discount correctly, and completes checkout modal.
              </td>
              <td className="p-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-semibold">E2E</span></td>
            </tr>
            <tr>
              <td className="p-4 font-mono text-xs text-indigo-600 font-semibold">accessibility.spec.js</td>
              <td className="p-4 font-medium text-slate-900">Catalog WCAG 2.1 AA Compliance Audit</td>
              <td className="p-4">
                Runs automated <code className="bg-slate-100 px-1 rounded">@axe-core/playwright</code> scan across store pages to verify color contrast, ARIA labels, and interactive keyboard target sizes.
              </td>
              <td className="p-4"><span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-semibold">a11y</span></td>
            </tr>
            <tr>
              <td className="p-4 font-mono text-xs text-indigo-600 font-semibold">chaos-resilience.spec.js</td>
              <td className="p-4 font-medium text-slate-900">Server Error (500) Network Interception</td>
              <td className="p-4">
                Intercepts API network requests using Playwright <code className="bg-slate-100 px-1 rounded">page.route()</code> to mock a 500 Internal Server Error and asserts friendly user UI fallbacks appear.
              </td>
              <td className="p-4"><span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs font-semibold">Chaos</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}