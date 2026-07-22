import { useState } from 'react'

const SAMPLE_REPORTS = [
  { id: 'run-001', suite: 'Smoke Tests', passed: 12, failed: 0, duration: '1m 24s', status: 'passed' },
  { id: 'run-002', suite: 'Cart E2E', passed: 8, failed: 1, duration: '3m 02s', status: 'failed' },
  { id: 'run-003', suite: 'Checkout Form', passed: 15, failed: 0, duration: '2m 11s', status: 'passed' },
  { id: 'run-004', suite: 'Promo Code', passed: 6, failed: 0, duration: '45s', status: 'passed' },
]

export default function LiveReportsPage() {
  const [selectedRun, setSelectedRun] = useState(null)

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8" data-testid="live-reports-page">
      <h1 className="mb-2 text-3xl font-bold text-slate-900" data-testid="live-reports-heading">
        Live Reports
      </h1>
      <p className="mb-8 text-slate-600">
        Sample test run results. Select a run to view details.
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm" data-testid="reports-table">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-4 py-3 font-medium text-slate-700">Run ID</th>
              <th className="px-4 py-3 font-medium text-slate-700">Suite</th>
              <th className="px-4 py-3 font-medium text-slate-700">Passed</th>
              <th className="px-4 py-3 font-medium text-slate-700">Failed</th>
              <th className="px-4 py-3 font-medium text-slate-700">Duration</th>
              <th className="px-4 py-3 font-medium text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_REPORTS.map((report) => (
              <tr
                key={report.id}
                onClick={() => setSelectedRun(report)}
                className="cursor-pointer border-b border-slate-100 transition hover:bg-slate-50"
                data-testid={`report-row-${report.id}`}
              >
                <td className="px-4 py-3 font-mono text-xs">{report.id}</td>
                <td className="px-4 py-3">{report.suite}</td>
                <td className="px-4 py-3 text-green-600">{report.passed}</td>
                <td className="px-4 py-3 text-red-600">{report.failed}</td>
                <td className="px-4 py-3">{report.duration}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      report.status === 'passed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                    data-testid={`report-status-${report.id}`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRun && (
        <div
          className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          data-testid="report-detail-panel"
        >
          <h2 className="mb-2 text-lg font-semibold text-slate-900" data-testid="report-detail-heading">
            Run Details: {selectedRun.id}
          </h2>
          <p className="text-sm text-slate-600">
            Suite <strong>{selectedRun.suite}</strong> completed in {selectedRun.duration} with{' '}
            {selectedRun.passed} passed and {selectedRun.failed} failed test(s).
          </p>
          <button
            type="button"
            onClick={() => setSelectedRun(null)}
            className="mt-4 text-sm text-indigo-600 hover:text-indigo-800"
            data-testid="report-detail-close-button"
          >
            Close
          </button>
        </div>
      )}
    </main>
  )
}
