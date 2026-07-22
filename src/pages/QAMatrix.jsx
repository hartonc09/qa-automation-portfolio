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
          <img 
            src="https://github.com/hartonc09/qa-automation-portfolio/actions/workflows/playwright.yml/badge.svg" 
            alt="Playwright Test Status" 
            className="h-8"
          />
        </div>
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
    </div>
  );
}