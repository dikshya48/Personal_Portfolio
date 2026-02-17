const AvailabilityStatus = () => {
  const isAvailable = true;

  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <div
        className={`w-3 h-3 rounded-full ${
          isAvailable ? 'bg-green-500 animate-pulse' : 'bg-red-500'
        }`}
      />
      <span className="text-muted-foreground">
        {isAvailable
          ? 'Available for new projects'
          : 'Currently unavailable'}
      </span>
    </div>
  );
};

export default AvailabilityStatus;
