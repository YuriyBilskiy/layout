import { Card } from "../Card/Card";

export const Columns = () => {
  return (
    <div className="mt-6 grid grid-cols-4 gap-6">
          {/* Open Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Open (approve to earn)
            </h3>
            <div className="space-y-4">
              <Card
                title="Task t4t - 13 November 2024"
                time="4h"
                points="450"
              />
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
            </div>
          </div>

          {/* Pending Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pending</h3>
            <div className="space-y-4">
              <Card
                title="Recording - 23 September 2024"
                time="3:45:42"
                points="1450"
              />
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
            </div>
          </div>

          {/* Rejected Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              Rejected)
            </h3>
            <div className="space-y-4">
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
            </div>
          </div>

          {/* Accepted Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              Accepted
            </h3>
            <div className="space-y-4">
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
              <Card
                title="Recording - 12 November 2024"
                time="3:45:42"
                points="1450"
              />
            </div>
          </div>
        </div>
  );
};