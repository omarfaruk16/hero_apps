const RatingsChart = ({ ratings }) => {
  const maxValue = Math.max(...ratings.map(r => r.count));

  return (
    <div className="w-full py-2">
      <div className="space-y-3">
        {[...ratings].reverse().map((rating) => {
          const percentage = (rating.count / maxValue) * 100;

          return (
            <div key={rating.name} className="flex items-center gap-4">
              <span className="w-12 text-sm text-gray-600">
                {rating.name}
              </span>

              <div className="relative h-4 w-full rounded bg-gray-100">
                <div
                  className="h-4 rounded bg-orange-400"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

    
      <div className="mt-4 flex justify-between text-xs text-gray-400">
        <span>0</span>
        <span>{Math.round(maxValue / 2)}</span>
        <span>{maxValue}</span>
      </div>
    </div>
  );
};

export default RatingsChart;
